"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Adopter = {
  firstname: string;
  lastname: string;
  email: string;
  telephone?: string;
  location: string;
};

type Animal = {
  id: number;
  name: string;
  species: string;
  imageUrl: string;
};

type Rencontre = {
  id: number;
  date: string;
  animalName: string;
};

export default function DashboardAdoptant() {
  const router = useRouter();
  const [adopter, setAdopter] = useState<Adopter | null>(null);
  const [favorites, setFavorites] = useState<Animal[]>([]);
  const [rencontres, setRencontres] = useState<Rencontre[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/volunteers/loginadoptant");
        return;
      }

      try {
        const [adopterRes, favsRes, rencontresRes] = await Promise.all([
          fetch("http://localhost:8000/api/adoptant/me", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch("http://localhost:8000/api/adoptant/favorites", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch("http://localhost:8000/api/adoptant/rencontres", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        if (!adopterRes.ok) throw new Error("Adopter data fetch failed");
        if (!favsRes.ok) throw new Error("Favorites fetch failed");
        if (!rencontresRes.ok) throw new Error("Rencontres fetch failed");

        const adopterData = await adopterRes.json();
        const favsData = await favsRes.json();
        const rencontresData = await rencontresRes.json();

        setAdopter(adopterData);
        setFavorites(favsData);
        setRencontres(rencontresData);
      } catch (error) {
        console.error("Erreur fetch dashboard :", error);
        localStorage.removeItem("token");
        router.push("/volunteers/loginadoptant");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/volunteers/loginadoptant");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600 text-xl">Chargement du tableau de bord...</p>
      </div>
    );
  }

  if (!adopter) {
    return (
      <div className="p-10 text-center">
        Impossible de charger les informations de l'adoptant.
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-gray-50">
        {/* Profil */}
        <aside className="w-1/4 bg-gray-100 p-6">
          <h2 className="text-xl font-bold mb-4">Mon Profil</h2>
          <p><strong>Nom :</strong> {adopter.lastname}</p>
          <p><strong>Prénom :</strong> {adopter.firstname}</p>
          <p><strong>Email :</strong> {adopter.email}</p>
          {adopter.telephone && <p><strong>Téléphone :</strong> {adopter.telephone}</p>}

          <button
            onClick={() => router.push("/adoptant/profile")}
            className="mt-6 w-full bg-[#324960] text-white font-bold px-4 py-3 rounded-full shadow hover:bg-[#4682a9] transition"
          >
            Modifier le profil
          </button>

          <button
            onClick={handleLogout}
            className="mt-4 w-full bg-red-600 text-white font-bold px-4 py-3 rounded-full shadow hover:bg-red-700 transition"
          >
            Se déconnecter
          </button>
        </aside>

        {/* Contenu principal */}
        <main className="flex-grow p-8">
          <h1 className="text-3xl font-bold mb-6">Bienvenue {adopter.firstname} 👋</h1>

          {/* Rencontres */}
          <section className="mb-8 bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Mes rencontres passées</h2>
            {rencontres.length === 0 ? (
              <p>Aucune rencontre pour le moment.</p>
            ) : (
              <ul className="space-y-2">
                {rencontres.map(r => (
                  <li key={r.id} className="border p-4 rounded-lg">
                    🐾 {r.animalName} — 📅 {new Date(r.date).toLocaleDateString()}
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* Favoris */}
          <section className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Mes animaux favoris ❤️</h2>
            {favorites.length === 0 ? (
              <p>Vous n'avez pas encore ajouté d'animaux à vos favoris.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {favorites.map(animal => (
                  <div
                    key={animal.id}
                    className="border rounded-lg overflow-hidden shadow hover:shadow-md transition"
                  >
                    <img
                      src={animal.imageUrl}
                      alt={animal.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{animal.name}</h3>
                      <p className="text-sm text-gray-600">{animal.species}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
