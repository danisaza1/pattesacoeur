"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchForm from "../components/SearchForm";
import Image from 'next/image';

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
  const [currentPage, setCurrentPage] = useState(1);

  const animalsPerPage = 6;
  const [loading, setLoading] = useState(true);
  // Cargar animales al montar el componente y llenar inputs desde URL si hay parámetros
  useEffect(() => {
    async function fetchAnimals() {
      const res = await fetch("http://localhost:8000/api/animaux/");
      const data = await res.json();
      setAnimals(data);
      setLoading(false);
    }
    fetchAnimals();

    const params = new URLSearchParams(window.location.search);
    setType(params.get("animal_type") ?? "");
    setCity(params.get("city") ?? "");
  }, []);

  // Filtrar animales según tipo y ciudad
  useEffect(() => {
    if (!animals.length) return; // ne filtre que si les animaux ont été chargés

    const filtred = animals.filter((animal) => {
      return (
        (!animal_type ||
          animal.animal_type
            .toLowerCase()
            .includes(animal_type.toLowerCase())) &&
        (!city || animal.city.toLowerCase().includes(city.toLowerCase()))
      );
    });
    setFilteredAnimals(filtred);

    // Actualizar la URL sin recargar la página
    const params = new URLSearchParams();
    if (animal_type) params.set("animal_type", animal_type);
    if (city) params.set("city", city);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, "", newUrl);

    // Reiniciar la página actual a 1 al cambiar filtros
    setCurrentPage(1);
  }, [animal_type, city, animals]);

  // Calcular la paginación
  const totalPages = Math.ceil(filteredAnimals.length / animalsPerPage);
  const indexOfLastAnimal = currentPage * animalsPerPage;
  const indexOfFirstAnimal = indexOfLastAnimal - animalsPerPage;
  const currentAnimals = filteredAnimals.slice(
    indexOfFirstAnimal,
    indexOfLastAnimal
  );

  // Funciones para paginar
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Resetear filtros
  const resetFilters = () => {
    setType("");
    setCity("");
  };

  return (
    <>
      <Header />
      <main id="section1" className="p-4">
        <SearchForm
          animal_type={animal_type}
          setAnimalType={setType}
          city={city}
          setCity={setCity}
          onSubmit={() => {}} // Puedes manejar esto si quieres, aquí no redirige porque filtras en esta página
          onReset={resetFilters}
          showResetButton={true}
          mode="recherche"
          resultCount={filteredAnimals.length}
        />

        {loading ? (
          <div className="text-center mt-12 text-xl text-gray-600">
            Chargement...
          </div>
        ) : (
          <>
            {currentAnimals.length === 0 ? (
              <div className="flex flex-col items-center justify-center">
                <div className="text-center text-gray-500 mt-12 text-lg">
Oups ! Aucun résultat trouvé. Vous pouvez modifier les filtres pour découvrir d&apos;autres animaux adorables.                </div>
<div>
                <Image
  src="/images/loading.png"
  alt="loading"
  width={240} // width in pixels
  height={240} // height in pixels
  className="rounded mb-10"
/>
                </div>
              </div>
            ) : (
              <figure
                id="gallery"
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto"
              >
                {currentAnimals.map((animal, index) => (
                  <div
                    key={index}
                    className="card rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center bg-white"
                  >
                    <Image
  src={`http://localhost:8000/images${animal.photo_url.replace( "/data",
                        ""
                      )}`}
  alt={animal.name}
  width={400} // ajustez selon la taille réelle ou le design
  height={192}
  className="w-full h-48 object-contain object-center rounded"
/>
                    <div className="card-content mt-4 text-center">
                      <div className="text-sm text-gray-500">
                        {animal.animal_type}
                      </div>
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
            )}
          </>
        )}

        {/* Paginación */}
        <div className="pagination flex justify-center gap-2 mt-8">
          <button
            className="px-2 py-2 text-lg font-bold text-white bg-[#324960] rounded-lg shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:bg-[#4682a9] hover:shadow-[0_6px_12px_rgba(6,182,212,0.4)] active:translate-y-1 active:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] transition-all duration-200 ease-in-out"
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            &lt; Précédent
          </button>

          <span className="px-3 py-1 font-semibold text-center">
            Page {currentPage} sur {totalPages}
          </span>

          <button
            className="px-2 py-2 text-lg font-bold text-white bg-[#324960] rounded-lg shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:bg-[#4682a9] hover:shadow-[0_6px_12px_rgba(6,182,212,0.4)] active:translate-y-1 active:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] transition-all duration-200 ease-in-out"
            onClick={handleNext}
            disabled={currentPage === totalPages || totalPages === 0}
          >
            Suivant &gt;&gt;
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SearchPage;
