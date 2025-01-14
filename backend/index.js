const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
const crypto = require("crypto");
const multer = require("multer");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3030;

// Configuration de base
app.use(
  cors({
    origin: "http://localhost:3000", // URL complète au lieu de juste le port
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "signature", "timestamp", "Authorization"],
  })
);
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Configuration PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

const verifySignature = (req, res, next) => {
  try {
    const { signature, timestamp } = req.headers;
    const url = req.originalUrl;
    const isFormData = req.headers["content-type"]?.includes(
      "multipart/form-data"
    );

    if (!signature || !timestamp) {
      return res.status(401).json({ error: "Missing signature or timestamp" });
    }

    // Pour FormData, on utilise une chaîne vide
    const data = `${process.env.API_SECRET}${timestamp}${url}`;

    const expectedSignature = crypto
      .createHash("sha256")
      .update(data)
      .digest("base64");

    if (signature !== expectedSignature) {
      return res.status(401).json({
        error: "Invalid signature",
        expected: expectedSignature,
        received: signature,
      });
    }

    next();
  } catch (error) {
    console.error("Verification error:", error);
    res.status(401).json({ error: "Invalid signature" });
  }
};

// Configuration Multer pour les images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type"));
    }
  },
});

// Création de compte/authentification
app.post("/api/account/create", verifySignature, async (req, res) => {
  try {
    const { walletAddress } = req.body;

    // Vérifier si l'utilisateur existe déjà
    const existingUser = await pool.query(
      "SELECT * FROM users WHERE wallet_address = $1",
      [walletAddress.toLowerCase()]
    );

    let user;
    if (existingUser.rows.length === 0) {
      // Créer un nouvel utilisateur
      const result = await pool.query(
        "INSERT INTO users (wallet_address) VALUES ($1) RETURNING *",
        [walletAddress.toLowerCase()]
      );
      user = result.rows[0];
    } else {
      user = existingUser.rows[0];
    }

    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Upload d'images
app.post(
  "/api/upload",
  verifySignature,
  upload.array("files", 5),
  async (req, res) => {
    try {
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ error: "No files uploaded" });
      }

      const fileUrls = req.files.map(
        (file) =>
          `${req.protocol}://${req.get("host")}/uploads/${file.filename}`
      );

      res.json({ urls: fileUrls });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// Création de recette
app.post("/api/recipes", verifySignature, async (req, res) => {
  try {
    const {
      title,
      description,
      country,
      categories,
      images,
      duration,
      difficulty,
      ingredients,
      instructions,
      walletAddress, // Ajouté pour identifier l'auteur
    } = req.body;

    // Récupérer l'ID de l'utilisateur à partir de son wallet
    const userResult = await pool.query(
      "SELECT id FROM users WHERE wallet_address = $1",
      [walletAddress.toLowerCase()]
    );

    if (userResult.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const userId = userResult.rows[0].id;

    const result = await pool.query(
      `INSERT INTO recipes (
       recipe_id,
       title,
       author_id,
       description,
       country,
       categories,
       images,
       duration,
       difficulty,
       ingredients,
       instructions
     ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`,
      [
        "recipe_" + Date.now(),
        title,
        userId,
        description,
        country,
        categories,
        images,
        duration,
        difficulty,
        ingredients,
        instructions,
      ]
    );

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3030, () => {
  console.log(`Server running on port ${3030}`);
});
