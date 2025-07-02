"use client";

import React, { JSX } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSearchFilters, animalOptions, AnimalType } from "./useSearchFilters";

export default function Rechercher(): JSX.Element {
  const { animal, setAnimal, city, setCity } = useSearchFilters();

  return (
    <>
      <Header />

      <main className="py-12 px-4">
        <section className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Animal Input */}
              <div>
                <label htmlFor="animal-type" className="block mb-1 font-medium">
                  Type d'animal
                </label>
                <input
                  id="animal-type"
                  list="options-animaux"
                  name="animal"
                  value={animal}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (animalOptions.includes(value as AnimalType)) {
                      setAnimal(value as AnimalType);
                    } else {
                      console.warn("Valeur non valide sélectionnée:", value);
                    }
                  }}
                  className="input"
                />
                <datalist id="options-animaux">
                  {animalOptions.map((option) => (
                    <option key={option} value={option} />
                  ))}
                </datalist>
              </div>

              {/* City Input */}
              <div>
                <label htmlFor="city-filter" className="block mb-1 font-medium">
                  Localisation
                </label>
                <input
                  type="text"
                  id="city-filter"
                  name="city"
                  value={city}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setCity(e.target.value)
                  }
                  className="input"
                />
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition"
                >
                  Rechercher 🔍
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-gray-700">🐾 Animaux trouvés</p>
              <a href="#" className="text-pink-600 hover:underline">
                Réinitialiser les filtres
              </a>
            </div>
          </form>
        </section>

        {/* ... reste du composant ... */}

      </main>

      <Footer />
    </>
  );
}
