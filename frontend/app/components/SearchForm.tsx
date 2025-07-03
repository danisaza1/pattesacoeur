"use client";

import React from "react";

export default function SearchForm() {
  return (
    <section className="bg-white results mx-auto max-w-4xl p-6 rounded-4xl shadow-[0_4px_20px_0_rgba(6,182,212,0.3)] ">
      <form className="search-form flex flex-col  md:flex-row flex-wrap md:h-35 gap-4 w-full items-end">
        {/* Type d'animal */}
        <section className="form-group flex-1 min-w-[200px]">
          <label
            htmlFor="search-pet"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Type d'animal
          </label>
          <select
            name="pet"
            id="search-pet"
            className="text-black h-12 block w-full rounded-md border border-gray-300 shadow-sm focus:border-[#4682A9] focus:ring-[#4682A9]"
          >
            <option value="chien">Chien</option>
            <option value="chat">Chat</option>
            <option value="lapin">Lapin</option>
            <option value="rongeur">Cochon d'inde</option>
          </select>
        </section>

        {/* Localisation */}
        <section className="form-group flex-1 min-w-[200px]">
          <label
            htmlFor="search-city"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Localisation
          </label>
    <input
  type="search"
  id="search-city"
  className="text-black h-12 block w-full rounded-md border border-gray-300 shadow-sm
             focus:border-[#4682A9] focus:outline-none"
/>

        </section>

        {/* Bouton de recherche */}
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 text-lg font-bold text-white bg-[#324960] rounded-lg shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:bg-[#4682a9] hover:shadow-[0_6px_12px_rgba(6,182,212,0.4)] active:translate-y-1 active:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] transition-all duration-200 ease-in-out mt-4"
          >
            Rechercher
          </button>
        </div>
      </form>
    </section>
  );
}
