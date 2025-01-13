import determStringify from "fast-json-stable-stringify";

export async function calculateDigest(
  body: any,
  url: string,
  timestamp: number
): Promise<string> {
  console.log("Données signature:", {
    secret: process.env.NEXT_PUBLIC_API_SECRET,
    timestamp,
    url,
    body: body ? determStringify(body) : "",
  });

  const encoder = new TextEncoder();
  const data = encoder.encode(
    `${process.env.NEXT_PUBLIC_API_SECRET}${timestamp}${url}${
      body ? determStringify(body) : ""
    }`
  );

  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return btoa(hashArray.map((byte) => String.fromCharCode(byte)).join(""));
}
