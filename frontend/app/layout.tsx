import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./globals.css";
import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anant LLC - Professional Business Consulting Services',
  description: 'Anant LLC provides expert business consulting, strategic planning, and professional services to help your company grow and succeed.',
  keywords: ['business consulting', 'strategic planning', 'professional services', 'business growth', 'consulting'],
  authors: [{ name: 'Anant LLC' }],
  openGraph: {
    title: 'Anant LLC - Professional Business Consulting',
    description: 'Expert business consulting and strategic planning services to help your business thrive.',
    type: 'website',
  },
  robots: 'index, follow',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body> 
      <Navbar />
      {children}
      <Footer />
      </body>
    </html>
  );
}
