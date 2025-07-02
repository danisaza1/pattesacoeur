'use client'

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Rechercher() {
  const [animal, setAnimal] = useState("Chien");
  const [city, setCity] = useState("Votre ville");

  return (
    <>
      <Header></Header>

    

      <main className="py-12 px-4">
        <section className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="animal-type" className="block mb-1 font-medium">Type d'animal</label>
                <input
                  id="animal-type"
                  list="options-animaux"
                  name="animal"
                  value={animal}
                  onChange={(e) => setAnimal(e.target.value)}
className="input"
                />
                <datalist id="options-animaux">
                  <option value="Chien" />
                  <option value="Lapin" />
                  <option value="Chat" />
                  <option value="Cochon d'inde" />
                </datalist>
              </div>

              <div>
                <label htmlFor="city-filter" className="block mb-1 font-medium">Localisation</label>
                <input
                  type="text"
                  id="city-filter"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
className="input"
                />
              </div>

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
              <a href="#" className="text-pink-600 hover:underline">Réinitialiser les filtres</a>
            </div>
          </form>
        </section>

        <section id="gallery" className="my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* TODO: Add animal cards here */}
        </section>

        <div className="flex justify-center gap-2 mt-6">
          <button className="px-3 py-1 border rounded hover:bg-gray-100">1</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-100">2</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-100">3</button>
          <button className="px-4 py-1 bg-pink-600 text-white rounded hover:bg-pink-700">Suivant &gt;&gt;</button>
        </div>
      </main>

      <Footer></Footer>
    </>
  );
}
