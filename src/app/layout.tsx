import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar/Navbar";
import Foot from "../components/Foot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alvi & Prity",
  description: "Alvi & Prity's RSVP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
