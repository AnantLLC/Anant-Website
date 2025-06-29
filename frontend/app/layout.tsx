'use client';
import Footer from "./components/footer";
import "./globals.css";
import React from "react";
import Navbar from "./components/navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
