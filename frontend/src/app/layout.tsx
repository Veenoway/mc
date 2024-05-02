import { Header } from "@/layouts/header";
import ReactQueryProvider from "@/lib/react-query";
import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const cinzel = Cinzel({
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
      <ReactQueryProvider>
        <body className={cinzel.className}>
          <Header />
          <main>{children}</main>
        </body>
      </ReactQueryProvider>
    </html>
  );
}
