import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moch. Agil Sugiarto | Portfolio",
  description: "Full Stack Developer - React, Node.js, JavaScript",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={geist.className}>{children}</body>
    </html>
  );
}
