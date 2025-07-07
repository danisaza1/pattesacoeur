"use client";


import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Dashboard() {
  const router = useRouter();
  const [volunteer, setVolunteer] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVolunteer = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/volunteer/login');
        return;
      }

      try {
        const res = await fetch('http://localhost:8000/api/volunteers/me/', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (res.ok) {
          const data = await res.json();
          setVolunteer(data);
        } else {
          console.warn('Token invalide ou expiré. Redirection vers login.');
          router.push('/volunteer/login');
        }
      } catch (error) {
        console.error('Erreur de chargement du profil :', error);
        router.push('/volunteer/login');
      } finally {
        setLoading(false);
      }
    };

    fetchVolunteer();
  }, []);


  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/volunteer/login');
  };

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
      <div className="flex min-h-screen">
        {/* Menu latéral gauche */}
        <aside className="w-1/4 bg-gray-100 p-6">
          <h2 className="text-xl font-bold mb-4">Mon Profil</h2>
          <div className="mb-6 space-y-1">
            <p><strong>Nom :</strong> {volunteer?.last_name}</p>
            <p><strong>Prénom :</strong> {volunteer?.first_name}</p>
            <p><strong>Email :</strong> {volunteer?.email}</p>
          </div>
         <button
  onClick={() => router.push('/volunteer/profile')}
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

        {/* Contenu principal */}
        <main className="flex-grow p-8 bg-gray-50">
          <h1 className="text-3xl font-bold mb-6">Bienvenue {volunteer?.first_name} 👋</h1>
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Mes actions</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
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

