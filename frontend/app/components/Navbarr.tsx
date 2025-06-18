import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // List of nav links except external
  const navLinks = ["about", "services", "meet_our_team"];

  return (
    <nav className="fixed w-full z-50 bg-zinc-900 shadow-md py-2 transition-all duration-300">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center">
          <img
            src="/static/img/Screenshot 2025-06-04 170730.png"
            alt="Anant Logo"
            className="h-16"
          />
        </a>

        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`/#${link}`} // <-- changed to full URL with slash
              className="font-medium text-white hover:text-[#C4A35A] transition"
            >
              {link.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
            </a>
          ))}
          <a
            href="https://calendly.com/yug-goyal46/1-1-meet-with-yugam?month=2025-05"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-white hover:text-[#C4A35A] transition"
          >
            Schedule a Call
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <i className="fas fa-times text-xl" />
          ) : (
            <i className="fas fa-bars text-xl" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-zinc-900 p-4 space-y-2">
          <a href="/#about" className="block font-medium text-white">
            About
          </a>
          <a href="/#services" className="block font-medium text-white">
            Our Services
          </a>
          <a
            href="https://calendly.com/yug-goyal46/1-1-meet-with-yugam?month=2025-05"
            target="_blank"
            rel="noopener noreferrer"
            className="block font-medium text-white"
          >
            Schedule a Call
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
