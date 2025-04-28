import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 bg-white shadow-md sticky top-0 z-50">
        {/* Left Side - Logo */}
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Anant LLC Logo"
              width={120}
              height={40}
            />
          </Link>
        </div>

        {/* Center - Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 font-semibold text-gray-700 text-sm">
          <li><Link href="#about">About</Link></li>
          <li><Link href="#services">Our Services</Link></li>
          <li><Link href="#internships">Internships</Link></li>
          <li><Link href="#team">Meet Our Team</Link></li>
          <li><Link href="#contact">Schedule A Call</Link></li>
        </ul>

        {/* Right Side - Search Icon */}
        <div className="hidden md:flex items-center">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600 hover:text-gold-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Page Content */}
      <main>{children}</main>
    </>
  );
}
