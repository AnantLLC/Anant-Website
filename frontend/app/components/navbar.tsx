"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../images/logo/logo.svg";

/**
 * 
 * @returns 
 *       <Link href="/about" className={`font-medium ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'} transition-colors duration-200`}>
              About
            </Link>
            <Link href="/services" className={`font-medium ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'} transition-colors duration-200`}>
              Our Services
            </Link>
            <Link href="/internships" className={`font-medium ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'} transition-colors duration-200`}>
              Internships
            </Link>
            <Link href="/team" className={`font-medium ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'} transition-colors duration-200`}>
              Meet Our Team
            </Link>
            <Link href="/schedule" className={`font-medium ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'} transition-colors duration-200`}>
              Schedule a Call
            </Link>
 * 
 */

interface NavItems {
  name: string;
  href: string;
}

const navitems: NavItems[] = [
  {
    name: "About",
    href: "#",
  },
  {
    name: " Our Services",
    href: "#",
  },
  {
    name: "Internships",
    href: "#",
  },
  {
    name: "Meet Our Team",
    href: "#",
  },
  {
    name: "Schedule a Call",
    href: "#",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
  let ticking = false;

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 10);
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

 

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-zinc-900 shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="h-32 w-32 relative">
              <Image
                src={logo}
                alt="Anant Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <div className="hidden lg:flex items-center space-x-6">
            {navitems.map((nav) => (
              <Link
                key={nav.name}
                href={nav.href}
                className={`font-medium ${
                  scrolled
                    ? "text-white hover:text-blue-600"
                    : "text-white hover:text-gray-200"
                } transition-colors duration-200`}
              >
                {nav.name}
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          {/* <div className="hidden lg:flex items-center">
            <div
              className={`relative rounded-md shadow-sm ${
                scrolled ? "bg-gray-100" : "bg-white bg-opacity-20"
              }`}
            > */}
              {/* <input
                type="text"
                className={`block w-full pl-4 pr-10 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  scrolled
                    ? "bg-gray-100 text-gray-900 placeholder-gray-500"
                    : "bg-transparent text-white placeholder-white"
                }`}
                placeholder="Search..."
              /> */}
              {/* <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className={`h-5 w-5 ${
                    scrolled ? "text-gray-400" : "text-white"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div> */}

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                scrolled
                  ? "text-white hover:text-blue-600"
                  : "text-white hover:text-gray-200"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${mobileMenuOpen ? "block" : "hidden"} shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navitems.map((nav) => (
            <Link
              key={nav.name}
              href={nav.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                scrolled
                  ? "text-white hover:text-blue-600"
                  : "text-white hover:text-gray-200"
              } transition-colors duration-200`}
            >
              {nav.name}
            </Link>
          ))}

          {/* Mobile search */}
          <div className="px-3 py-2">
            <div className="relative rounded-md shadow-sm">
              <input
                type="text"
                className="block w-full pl-4 pr-10 py-2 bg-gray-100 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search..."
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
