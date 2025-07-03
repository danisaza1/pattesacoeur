"use client";

import Link from "next/link";
import React, { useState } from "react";
import { User, Menu, X } from "lucide-react"; // Import Menu and X icons

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="shadow-2xl">
      <div className="bg-[url] flex justify-between items-center px-4 py-3 md:px-6 lg:px-8">
        <Link href="/">
          <img
            src="/icons/logo2.png"
            alt="Logo"
            className="w-24 sm:w-28 h-auto"
          />
        </Link>

        <div className="flex items-center gap-3 sm:gap-4">
          {/* Bouton Faire un don caché en mobile */}
          <Link
            href="/don"
            className="hidden md:inline-block px-3 py-1.5 text-center sm:px-4 sm:py-2 text-base font-semibold rounded-full text-white bg-[#4682a9] hover:bg-[#6aa1c7] transition duration-300"
          >
            Faire un don 💖
          </Link>

          <Link href="/middle-page">
            <User className="text-white-700 w-6 h-6 sm:w-7 sm:h-7" />
          </Link>

          <button
            className="md:hidden p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`bg-[#4682a9] px-4 py-3  ${
          isMenuOpen ? "flex shadow-md" : "hidden"
        } flex-col md:flex md:flex-row md:items-center md:justify-center`}
      >
        <div className="flex flex-col items-center justify-center gap-2 md:flex-row text-lg font-bold text-white md:max-w-7xl md:mx-auto md:w-full">
          {/* Bouton Faire un don visible seulement en mobile dans menu */}
          <Link
            href="/"
            className="py-2 md:pr-6 text-white transition-all duration-300 transform hover:scale-105 hover:brightness-110 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
            onClick={() => setIsMenuOpen(false)}
          >
            🏠 Accueil
          </Link>
          {isMenuOpen && (
            <Link
              href="/don"
              className="py-2 md:pr-6 text-white transition-all duration-300 transform hover:scale-105 hover:brightness-110 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
              onClick={() => setIsMenuOpen(false)}
            >
              💖 Faire un don
            </Link>
          )}
          <Link
            href="/recherche"
            className="py-2 md:pr-6 text-white transition-all duration-300 transform hover:scale-105 hover:brightness-110 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
            onClick={() => setIsMenuOpen(false)}
          >
            🦴 J'adopte
          </Link>
          <Link
            href="/guide"
            className="py-2 md:pr-6 text-white transition-all duration-300 transform hover:scale-105 hover:brightness-110 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
            onClick={() => setIsMenuOpen(false)}
          >
            🐟 Guide de l'adoption
          </Link>
          <Link
            href="/benevole"
            className="py-2 md:pr-6 text-white transition-all duration-300 transform hover:scale-105 hover:brightness-110 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
            onClick={() => setIsMenuOpen(false)}
          >
            🐿️ Devenir bénévole
          </Link>
        </div>
      </div>
    </nav>
  );
}
