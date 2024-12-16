import { Header } from "@/layouts/header";
import ReactQueryProvider from "@/lib/react-query";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = {
  title: "Monad Lore",
  description:
    "Monad Lore allow users to discover the lore of Monad. It will allow users to fight for his house by playing games.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://code.jquery.com/jquery-3.7.1.min.js"
          integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
          crossOrigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          href="https://unpkg.com/@chrisoakman/chessboardjs@1.0.0/dist/chessboard-1.0.0.min.css"
          integrity="sha384-q94+BZtLrkL1/ohfjR8c6L+A6qzNH9R2hBLwyoAfu3i/WCvQjzL2RQJ3uNHDISdU"
          crossOrigin="anonymous"
        />
        <script
          src="https://code.jquery.com/jquery-3.5.1.min.js"
          integrity="sha384-ZvpUoO/+PpLXR1lu4jmpXWu80pZlYUAfxl5NsBMWOEPSjUn/6Z/hRTt8+pR6L4N2"
          crossOrigin="anonymous"
        ></script>

        <script
          src="https://unpkg.com/@chrisoakman/chessboardjs@1.0.0/dist/chessboard-1.0.0.min.js"
          integrity="sha384-8Vi8VHwn3vjQ9eUHUxex3JSN/NFqUg3QbPyX8kWyb93+8AC/pPWTzj+nHtbC5bxD"
          crossOrigin="anonymous"
        ></script>
      </head>
      <ReactQueryProvider>
        <body className={poppins.className}>
          <Header />
          <main>{children}</main>
        </body>
      </ReactQueryProvider>
    </html>
  );
}
