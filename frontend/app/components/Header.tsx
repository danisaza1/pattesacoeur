'use client'

import Link from "next/link";
import React, { useState } from "react";
import { User, Menu, X } from "lucide-react"; // Import Menu and X icons

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="shadow-2xl">
      {/* Top Bar: Logo, User Icon, Donate Button */}
      <div className="bg-white flex justify-between items-center px-4 py-3 md:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/"> {/* Added Link to logo for navigation to home */}
          <img src="/icons/logo2.png" alt="Logo" className="w-24 sm:w-28 h-auto" />
        </Link>

        {/* Right Section: User Icon, Donate Button, and Hamburger Menu */}
        <div className="flex items-center gap-3 sm:gap-4">
         <Link
             href="#Guide-de-ladoption">
            <User className="text-white-700 w-6 h-6 sm:w-7 sm:h-7" />
          </Link>
          <Link
            href="#Faire-un-don"
            className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm font-semibold rounded-full text-white bg-[#4682a9] hover:bg-[#6aa1c7] transition duration-300"
          >
            Faire un don 💖
          </Link>

          {/* Hamburger Menu Icon (visible on small/medium screens) */}
          <button
            className="md:hidden p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <X className="w-7 h-7" /> // Close icon when menu is open
            ) : (
              <Menu className="w-7 h-7" /> // Hamburger icon when menu is closed
            )}
          </button>
        </div>
      </div>

      {/* Navigation Menu (full width on desktop, toggled on mobile) */}
      <div
        className={`bg-[#4682a9] px-4 py-3  ${isMenuOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:items-center md:justify-center`} // Flex-col on mobile when open, row on md+
      >
        <div className="flex flex-col justify-between md:flex-row text-lg font-bold text-gray-800 md:max-w-7xl md:mx-auto md:w-full">
          {/* Navigation Links */}
          <Link
            href="#Accueil"
            className="py-2 md:pr-6 text-white transition-all duration-300 transform hover:scale-105 hover:brightness-110 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] "
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            🏠 Accueil
          </Link>
          <Link
            href="/recherche"
            className="py-2 md:pr-6 text-white transition-all duration-300 transform hover:scale-105 hover:brightness-110 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] "
            onClick={() => setIsMenuOpen(false)}
          >
            🦴 J'adopte
          </Link>
          <Link
            href="#Guide-de-ladoption"
            className="py-2 md:pr-6 text-white transition-all duration-300 transform hover:scale-105 hover:brightness-110 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] "
            onClick={() => setIsMenuOpen(false)}
          >
            🐟 Guide de l'adoption
          </Link>
          <Link
            href="/benevole"
            className="py-2 md:pr-6 text-white transition-all duration-300 transform hover:scale-105 hover:brightness-110 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] "
            onClick={() => setIsMenuOpen(false)}
          >
            🐿️ Devenir bénévole
          </Link>
        </div>
      </div>
    </nav>
  );
}