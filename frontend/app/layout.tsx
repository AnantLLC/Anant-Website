'use client';

import Footer from "./components/footer";
import HomeNavbar from "./components/navbar";    // Navbar for homepage
import Navbar from "./components/Navbarr";       // Navbar for other pages
import "./globals.css";
import React from "react";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <html>
      <body>
        {isHomePage ? <HomeNavbar /> : <Navbar />}
        {children}
        <Footer />
      </body>
    </html>
  );
}
