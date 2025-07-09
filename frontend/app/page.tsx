"use client";

import Image from "next/image"; // Import Image de Next.js
import Grid from "./components/Grid";
import SearchForm from "./components/SearchForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ButtonAnimalsSection from "./components/ButtonAnimalsSection";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Pour redirection

export default function Home() {
  // ✅ États requis
  const [animal_type, setAnimalType] = useState("");
  const [city, setCity] = useState("");

  const router = useRouter();

  const onSubmit = () => {
    if (!animal_type && !city) return;

    const query = new URLSearchParams();
    if (animal_type) query.append("animal_type", animal_type);
    if (city) query.append("city", city);

    router.push(`/animaux?${query.toString()}`); // ✅ Redirection ici
  };

  return (
    <>
      <Header />

      <div className="flex flex-col">
        {/* HERO section avec image à gauche et texte à droite */}
        <section className="w-full md:h-[588px] flex flex-col md:flex-row items-center justify-between bg-[#4682a9]">
          {/* Image à gauche */}
          <div className="w-full md:w-1/2 h-64 md:h-full relative">
            <Image
              src="/images/bg.jpg"
              alt="Chien mignon"
              fill
              style={{ objectFit: "cover" }}
              priority // Optionnel, si tu veux charger l’image rapidement
            />
          </div>

          {/* Texte + Form à droite */}
          <div className="w-full md:w-1/2 px-6 py-8 md:p-12 flex flex-col justify-center items-center md:items-start text-white">
            <div className="text-center md:text-left max-w-xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                DONNONS-LEUR AUTANT QU&apos;ILS NOUS APPORTENT
              </h2>
              <p className="text-base sm:text-lg mb-6">
                Chaque jour, des milliers d&apos;animaux attendent une famille
                aimante. Trouvez votre compagnon idéal parmi nos animaux
                disponibles à l&apos;adoption.
              </p>
            </div>
            <SearchForm
              animal_type={animal_type}
              setAnimalType={setAnimalType}
              city={city}
              setCity={setCity}
              onSubmit={onSubmit}
            />
          </div>
        </section>

        {/* Section animaux */}
        <div className="flex flex-col text-center px-4 py-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">
            Nos animaux à adopter
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto">
            Découvrez en images tous nos animaux qui attendent une famille
            aimante. Chaque photo raconte une histoire et un espoir.
          </p>
        </div>

        <div className="w-full py-4 flex flex-col items-center px-4">
          <Grid />
          <ButtonAnimalsSection />
        </div>
      </div>

      <Footer />
    </>
  );
}
