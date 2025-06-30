'use client'

import Head from "next/head";
import { useState } from "react";

export default function Rechercher() {
  const [animal, setAnimal] = useState("Chien");
  const [city, setCity] = useState("Votre ville");

  return (
    <>
      <Head>
        <title>Adaopte</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
      </Head>

      <header className="bg-white shadow">
        <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">
            <span className="text-pink-600">🐾Ada</span><span>opte</span>
          </h1>
          <ul className="flex gap-4 text-sm">
            <li><a href="/" className="hover:underline">🏠Accueil</a></li>
            <li><a href="/rechercher" className="hover:underline">🦴J'adopte</a></li>
            <li><a href="#Guide-de-ladoption" className="hover:underline">🐟Guide de l'adoption</a></li>
            <li><a href="/benevole" className="hover:underline">🐿️Devenir bénévole</a></li>
          </ul>
          <button className="bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition">Faire un don 🫶</button>
        </nav>
      </header>

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

      <section className="bg-gray-100 py-12 px-4 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-lg font-bold mb-2">ADAOPTE</h3>
          <p className="text-sm text-gray-700">Notre mission est de retrouver des foyers aimants pour chaque animal abandonné et de promouvoir le bien-être animal.</p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">INFORMATIONS UTILES</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>FAQs</li>
            <li>Conseils d'adoption</li>
            <li>Nous contacter</li>
            <li>Mentions légales</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">CONTACT</h3>
          <p className="text-sm text-gray-700">
            116 Rue du Faubourg Saint-Martin<br />
            75010 Paris, France<br />
            Email: contact@adaopte.fr<br />
            Tél: +33 1 23 45 67 89
          </p>
        </div>
      </section>

      <footer className="bg-pink-600 text-white text-center py-6">
        <p>© 2025 Adaopte. Tous droits réservés.</p>
        <p className="text-sm">Ce site a été développé dans le cadre d'un projet pour ADA Tech School.</p>
      </footer>
    </>
  );
}
