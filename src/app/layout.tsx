import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Weather",
  description: "Desafio Frontend - TDS",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "600"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} `}>
      <body>
        {children}
      </body>
    </html>
  );
}
