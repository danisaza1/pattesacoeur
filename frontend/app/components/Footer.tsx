"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="section-end bg-[#4682a9] text-white py-8  px-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-8 md:flex-row md:items-start md:gap-6">
        {/* Mission */}
        <div className="mission flex-1 text-center md:text-left md:max-w-xs lg:max-w-sm">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">PATTES À COEUR</h3>
          <p className="mb-6 text-sm sm:text-base">
            Notre mission est de trouver des foyers aimants pour chaque animal
            abandonné et de promouvoir le bien-être animal.
          </p>
          <div className="icon-container flex justify-center md:justify-start gap-4">
            <Image
              src="/icons/facebook.png"
              alt="Facebook"
              width={32} // ajuste selon ta taille (w-7 => 28px, w-8 => 32px)
              height={32}
              className="filter invert"
            />
            <Image
              src="/icons/instagram.png"
              alt="Instagram"
              width={32}
              height={32}
              className="filter invert"
            />
            <Image
              src="/icons/linkedin.png"
              alt="LinkedIn"
              width={32}
              height={32}
              className="filter invert"
            />
            <Image
              src="/icons/twitch.png"
              alt="Twitch"
              width={32}
              height={32}
              className="filter invert"
            />
          </div>
        </div>

        {/* Informations utiles */}
        <div className="information flex-1 text-center md:text-left md:max-w-xs lg:max-w-sm">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">
            INFORMATIONS UTILES
          </h3>

          <Link href="/faq">
            <p className="mb-2 cursor-pointer hover:text-blue-200 text-sm sm:text-base">
              FAQs
            </p>
          </Link>

          <Link href="/guide">
            <p className="mb-2 cursor-pointer hover:text-blue-200 text-sm sm:text-base">
              Conseils d&apos;adoption
            </p>
          </Link>

          <p className="mb-2 cursor-pointer hover:text-blue-200 text-sm sm:text-base">
            Mentions légales
          </p>
        </div>

        {/* Contact */}
        <div className="contact flex-1 text-center md:text-left md:max-w-xs lg:max-w-sm">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">CONTACT</h3>
          <p className="text-sm sm:text-base">
            116 Rue du Faubourg Saint-Martin <br />
            75010 Paris, France <br />
            Email: contact@pattesacoeur.fr <br />
            Tél: +33 1 23 45 67 89
          </p>
        </div>
      </div>
    </section>
  );
}
