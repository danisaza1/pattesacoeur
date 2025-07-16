"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface Adoptant {
  first_name?: string;
  last_name?: string;
  email?: string;
  telephone?: string;
}

export default function DashboardAdoptant() {
  const router = useRouter();
  const [adoptant, setAdoptant] = useState<Adoptant | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdoptant = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/volunteers/login");
        return;
      }

      try {
        const res = await fetch("http://patacoeur-backend.vercel.app/api/volunteers/me/", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (res.ok) {
          const data = await res.json();
          setAdoptant(data);
        } else {
          console.warn("Token invalide. Redirection...");
          router.push("/dashboardadoptant");
        }
      } catch (err) {
        console.error("Erreur API:", err);
        router.push("/dashboardadoptant");
      } finally {
        setLoading(false);
      }
    };

    fetchAdoptant();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/dashboardadoptant");
  };

  const animauxFavoris = [
    { nom: "Luna", type: "Chat", race: "Maine Coon" },
    { nom: "Rex", type: "Chien", race: "Berger allemand" },
  ];

  const animauxRencontres = [
    { nom: "Nino", type: "Chien", race: "Labrador" },
    { nom: "Zelda", type: "Chat", race: "Siamois" },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600 text-xl">Chargement du tableau de bord...</p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-gray-50">
        <aside className="w-1/4 bg-gray-100 p-6">
          <h2 className="text-xl font-bold mb-4">Mon Profil</h2>
          <div className="mb-6 space-y-1 text-sm text-gray-700">
            <p><strong>Nom :</strong> {adoptant?.last_name}</p>
            <p><strong>Prénom :</strong> {adoptant?.first_name}</p>
            <p><strong>Email :</strong> {adoptant?.email}</p>
            <p><strong>Téléphone :</strong> {adoptant?.telephone}</p>
          </div>

          <button
            onClick={() => router.push("/volunteer/profile")}
            className="w-full bg-[#324960] text-white font-bold px-4 py-3 mb-4 rounded-full shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:bg-[#4682a9] hover:text-black hover:shadow-[0_6px_12px_rgba(6,182,212,0.4)] active:translate-y-1 active:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] transition-all duration-200 ease-in-out"
          >
            Modifier le profil
          </button>

          <button
            onClick={handleLogout}
            className="w-full bg-red-600 text-white font-bold px-4 py-3 rounded-full shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:bg-red-700 hover:shadow-md active:translate-y-1 active:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] transition-all duration-200 ease-in-out"
          >
            Se déconnecter
          </button>
        </aside>

        <main className="flex-grow p-8">
          <h1 className="text-3xl font-bold mb-6">Bienvenue {adoptant?.first_name} 👋</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">🐾 Mes animaux favoris</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {animauxFavoris.map((a, i) => (
                <li key={i} className="bg-white p-4 rounded shadow hover:shadow-md transition">
                  <p className="font-bold">{a.nom}</p>
                  <p className="text-sm text-gray-600">{a.type} - {a.race}</p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">👋 Animaux rencontrés</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {animauxRencontres.map((a, i) => (
                <li key={i} className="bg-white p-4 rounded shadow hover:shadow-md transition">
                  <p className="font-bold">{a.nom}</p>
                  <p className="text-sm text-gray-600">{a.type} - {a.race}</p>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
