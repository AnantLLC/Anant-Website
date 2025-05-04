import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./globals.css";
import React from "react";

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
