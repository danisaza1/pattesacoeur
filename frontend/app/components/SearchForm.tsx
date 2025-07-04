"use client";

import React from "react";

interface Props {
  animal_type: string;
  setAnimalType: (value: string) => void;
  city: string;
  setCity: (value: string) => void;
  onSubmit: () => void;
  onReset?: () => void;
  showResetButton?: boolean;
  mode?: "standard" | "recherche";
  resultCount?: number;
}

export default function SearchForm({
  animal_type,
  setAnimalType,
  city,
  setCity,
  onSubmit,
  onReset,
  showResetButton,
  mode = "standard", // valeur par défaut
  resultCount,
}: Props) {
  return (
    <section className="bg-white results mx-auto max-w-4xl p-6 rounded-4xl shadow-[0_4px_20px_0_rgba(6,182,212,0.3)]">
      <form
        className={`search-form flex flex-col md:flex-row flex-wrap gap-4 w-full ${
          mode === "recherche" ? "items-start" : "items-end"
        }`}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        {/* Div for Type d'animal, Localisation, and Rechercher button */}
        <div className={`flex flex-col items-center md:flex-row gap-4 w-full ${mode === "recherche" ? "md:items-end" : ""}`}>
          {/* Type d'animal */}
          <section
            className={`form-group flex-1 min-w-[200px] ${
              mode === "recherche" ? "mx-auto text-center md:text-left" : ""
            }`}
          >
            <label
              htmlFor="search-pet"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Type d'animal
            </label>
            <select
              name="pet"
              id="search-pet"
              value={animal_type}
              onChange={(e) => setAnimalType(e.target.value)}
              className="text-black h-12 block w-full rounded-md border border-gray-300 shadow-sm focus:border-[#4682A9] focus:ring-[#4682A9]"
            >
              <option value=""> Choisir</option>
              <option value="chien">Chien</option>
              <option value="chat">Chat</option>
              <option value="lapin">Lapin</option>
              <option value="rongeur">Cochon d'inde</option>
            </select>
          </section>

          {/* Localisation */}
          <section
            className={`form-group flex-1 min-w-[200px] ${
              mode === "recherche" ? "mx-auto text-center md:text-left" : ""
            }`}
          >
            <label
              htmlFor="search-city"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Localisation
            </label>
            <input
              type="search"
              id="search-city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="text-black h-12 block w-full rounded-md border border-gray-300 shadow-sm focus:border-[#4682A9] focus:outline-none"
            />
          </section>

          {/* Rechercher button */}
          <div className={`mt-auto ${mode === "recherche" ? "md:pb-1" : ""}`}>
            <button
              type="submit"
              className="px-6 py-2 text-lg font-bold text-white bg-[#324960] rounded-lg shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:bg-[#4682a9] hover:shadow-[0_6px_12px_rgba(6,182,212,0.4)] active:translate-y-1 active:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] transition-all duration-200 ease-in-out"
            >
              Rechercher
            </button>
          </div>
        </div>

        {/* Div for Animaux trouvés and Réinitialiser les filtres (only in "recherche" mode) */}
        {mode === "recherche" && (
          <div className="w-full flex flex-col md:flex-row items-center justify-between mt-4">
            {typeof resultCount === "number" && (
              <p className=" text-left mb-2 md:mb-0">
                Animaux trouvés : {resultCount}
              </p>
            )}

            {showResetButton && onReset && (
              <button
                type="button"
                onClick={onReset}
                className="text-blue-600 underline font-medium"
              >
                Réinitialiser les filtres
              </button>
            )}
          </div>
        )}
      </form>
    </section>
  );
}