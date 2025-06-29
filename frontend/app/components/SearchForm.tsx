'use client';

import React from 'react';

export default function SearchForm() {
  return (
    <section
      className="results mx-auto max-w-4xl px-4 py-6 bg-white rounded shadow-[0_4px_20px_0_rgba(6,182,212,0.3)]"
      aria-label="Barre de recherche avec les résultats de la recherche"
    >
      <form className="search-form flex flex-col md:flex-row flex-wrap gap-4 w-full items-end">
        {/* Type d'animal */}
        <section className="form-group flex-1 min-w-[200px]" aria-label="Sélection du type d'animal">
          <label htmlFor="search-pet" className="block text-sm font-medium text-gray-700 mb-1">
            Type d'animal
          </label>
          <select
            name="pet"
            id="search-pet"
            className="h-12 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
          >
            <option value="chien">CHIEN</option>
            <option value="chat">CHAT</option>
            <option value="lapin">LAPIN</option>
            <option value="rongeur">RONGEUR</option>
          </select>
        </section>

        {/* Localisation */}
        <section className="form-group flex-1 min-w-[200px]" aria-label="Sélection de la localisation">
          <label htmlFor="search-city" className="block text-sm font-medium text-gray-700 mb-1">
            Localisation
          </label>
          <input
            type="search"
            id="search-city"
            className="h-12 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
          />
        </section>

        {/* Bouton de recherche */}
        <section className="button-form">
          <button
            type="submit"
            className="hw-32 relative inline-flex items-center justify-center px-6 py-2 text-lg font-bold text-white bg-cyan-600 rounded-lg shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:bg-cyan-700 hover:shadow-[0_6px_12px_rgba(6,182,212,0.4)] active:translate-y-1 active:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] transition-all duration-200 ease-in-out mt-4"
          >
            Rechercher
          </button>
        </section>
      </form>

      <section className="results-pets mt-8" aria-label="Résultat de la recherche">
      </section>
    </section>
  );
}


  //  <button
  //           type="submit"
  //           className="h-12 px-6 bg-cyan-600 text-white font-semibold rounded shadow-[0_4px_10px_rgba(6,182,212,0.5)] hover:bg-cyan-700 transition"
  //         >
  //           Rechercher
  //         </button>
