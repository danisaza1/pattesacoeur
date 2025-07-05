'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Dashboard() {
  const router = useRouter();
  // const [nom, setName] = useState("bob.martin@example.com");
  

  const handleLogout = () => {
    // log out logic, redirect to login page
    router.push("/volunteer/login");
  };

  return (
    <>
      <Header />
      <div className="flex min-h-screen">
        {/* Section à gauche pour le profil et options */}
        <aside className="w-1/4 bg-gray-200 p-6">
          <h2 className="text-xl font-bold mb-4">Mon Profil</h2>
          <div className="mb-6">
            <p><strong>Nom:</strong> {}</p>
            <p><strong>Prenom:</strong>{}</p>
            {/* <p><strong>Status:</strong> Actif</p> */}
          </div>
          <div className="mb-6">
            <button
              onClick={() => router.push("/volunteer/profile")}
             className="w-full bg-[#4682a9] text-white px-4 py-2 rounded-md hover:bg-[#6aa1c7] transition-all duration-300 hover:brightness-110 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"

            >
              Modifier le profil
            </button>
          </div>
          <div className="mb-6">
            <button
              onClick={handleLogout}
              className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
            >
              Se déconnecter
            </button>
          </div>
        </aside>

        {/* Section principale à droite */}
        <main className="flex-grow p-6">
          <h2 className="text-2xl font-bold mb-4">Tableau de bord</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Mes actions</h3>
            <ul className="list-disc pl-6">
              <li>3 adoptions finalisées</li>
              <li>1 animal actuellement en accueil</li>
              <li>2 visites de pré-adoption planifiées</li>
            </ul>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
