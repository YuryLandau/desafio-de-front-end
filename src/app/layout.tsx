import "./globals.css";

import type { Metadata } from "next";
import { Inter, Montserrat, Oxanium } from "next/font/google";

export const metadata: Metadata = {
  title: "Nimbus Weather",
  description: "Desafio Frontend - TDS",
};

const oxanium = Oxanium({
  subsets: ["latin"], // Biblioteca de caracteres
  weight: ["500", "600"], // Pesos da fonte
  variable: "--font-oxanium", // Variável CSS
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

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
    <html lang="en" className={`${oxanium.variable} ${montserrat.variable} ${inter.variable} `}>
      <body>
        {children}
      </body>
    </html>
  );
}
