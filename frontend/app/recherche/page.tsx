'use client'

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Animal {
  animal_type: string;
  name: string;
  race: string;
  birthdate: string;
  city: string;
  zipcode: string;
  description: string;
  photo_url: string;
}

const SearchPage: React.FC = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [filteredAnimals, setFilteredAnimals] = useState<Animal[]>([]);
  const [animal_type, setType] = useState<string>("");
  const [city, setCity] = useState<string>("");

  // Charger les animaux au montage
  useEffect(() => {
    async function fetchAnimals() {
      const res = await fetch("http://localhost:8000/api/animaux/");
      const data = await res.json();
      setAnimals(data);
      setFilteredAnimals(data);
    }
    fetchAnimals();

    // Remplir les inputs depuis URL (si paramètres présents)
    const params = new URLSearchParams(window.location.search);
    setType(params.get("type") ?? "");
    setCity(params.get("city") ?? "");
  }, []);

  // Filtrer à chaque changement de type ou city
  useEffect(() => {
    const filtred = animals.filter((animal) => {
      return (
        (!animal_type || animal.animal_type.toLowerCase().includes(animal_type.toLowerCase())) &&
        (!city || animal.city.toLowerCase().includes(city.toLowerCase()))
      );
    });
    setFilteredAnimals(filtred);

    // Mise à jour de l’URL sans recharger la page
    const params = new URLSearchParams();
    if (animal_type) params.set("type", animal_type);
    if (city) params.set("city", city);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, "", newUrl);
  }, [animal_type, city, animals]);

  // Réinitialiser les filtres
  const resetFilters = () => {
    setType("");
    setCity("");
  };

  return (
    <>
    <Header></Header>
    <main id="section1" className="p-4">
      <div className="search-container max-w-xl mx-auto">
        <form
          className="search"
          onSubmit={(e) => {
            e.preventDefault();
            // Pas besoin de redirection, tout est en React
          }}
        >
          <div className="section-up mb-6 flex flex-col gap-4">
            <div className="form-group">
              <label htmlFor="animal-type" className="block font-semibold mb-1">
                Type d'animal
              </label>
              <input
                id="animal-type"
                type="text"
                list="options-animaux"
                name="animal"
                value={animal_type}
                onChange={(e) => setType(e.target.value)}
                className="border rounded px-3 py-2 w-full"
                placeholder="Chien, Chat..."
              />
              <datalist id="options-animaux">
                <option value="Chien" />
                <option value="Lapin" />
                <option value="Chat" />
                <option value="Cochon d'inde" />
              </datalist>
            </div>

            <div className="form-group">
              <label htmlFor="city-filter" className="block font-semibold mb-1">
                Localisation
              </label>
              <input
                type="text"
                id="city-filter"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="border rounded px-3 py-2 w-full"
                placeholder="Votre ville"
              />
            </div>

            <div className="form-group">
              <button
                id="search-button-class"
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Rechercher 🔍
              </button>
            </div>
          </div>

          <div className="section-down">
            <div id="result-count" className="mb-4">
              <p id="result-number" className="font-semibold">
                Animaux trouvés : {filteredAnimals.length}
              </p>
            </div>

            <div className="form-end">
              <button
                type="button"
                id="reset-filters"
                onClick={resetFilters}
                className="text-blue-600 underline"
              >
                Réinitialiser les filtres
              </button>
            </div>
          </div>
        </form>
      </div>

      <figure id="gallery" className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
        {filteredAnimals.map((animal, index) => (
          <div
            key={index}
            className="card border rounded shadow p-4 flex flex-col items-center"
          >
           <img
  src={`http://localhost:8000/media${animal.photo_url.replace('/data', '')}`}
  alt={animal.name}
              className="w-full h-48 object-cover rounded"
            />
            <div className="card-content mt-4 text-center">
              <div className="text-sm text-gray-500">{animal.animal_type}</div>
              <h3 className="text-xl font-bold">{animal.name}</h3>
              <div className="text-gray-600">
                {animal.race} · {animal.birthdate}
              </div>
              <div className="text-gray-600">
                {animal.city} · {animal.zipcode}
              </div>
              <p className="mt-2 text-gray-700">{animal.description}</p>
              <button
                className="rencontrer-button mt-4 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                onClick={() =>
                  alert(`Rencontrer ${animal.name} (${animal.race})`)
                }
              >
                Rencontrer
              </button>
            </div>
          </div>
        ))}
      </figure>

      {/* Pagination (à implémenter si besoin) */}
      <div className="pagination flex justify-center gap-2 mt-8">
        <button className="page-button bg-gray-300 px-3 py-1 rounded">1</button>
        <button className="page-button bg-gray-300 px-3 py-1 rounded">2</button>
        <button className="page-button bg-gray-300 px-3 py-1 rounded">3</button>
        <button className="next-button bg-blue-500 text-white px-3 py-1 rounded">
          Suivant &gt;&gt;
        </button>
      </div>
    </main>
    <Footer></Footer>
    </>
  );
};

export default SearchPage;
