"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

type Disponibility = {
  days: string[];
  hours: string[];
};

interface Volunteer {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  birthdate: string;
  address: string;
  zipcode: string;
  telephone: string;
  disponibility: Disponibility;
  status: string;
}

export default function ProfilePage() {
  const router = useRouter();
  const [volunteer, setVolunteer] = useState<Volunteer | null>(null);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState<
    Partial<Volunteer> & { password?: string; password_confirm?: string }
  >({});

  const [token, setToken] = useState<string | null>(null);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        router.push("/volunteer/login");
        return;
      }


      const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

      try {
        const res = await fetch(`${API_BASE_URL}/api/volunteers/me/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.ok) {
          const data: Volunteer = await res.json();
          setVolunteer(data);
          setForm(data);
        } else {
          router.push("/volunteer/login");
        }
      } catch (err) {
        console.error("Erreur lors de la récupération des données du bénévole :", err);
        router.push("/volunteer/login");
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchData();
    }
  }, [router, token]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!token || !volunteer) {
      setMessage({ type: 'error', text: 'Token d\'authentification ou données du bénévole manquantes.' });
      return;
    }

    if (form.password && form.password !== form.password_confirm) {
      setMessage({ type: 'error', text: "Les mots de passe ne correspondent pas." });
      return;
    }

    const dataToSend = { ...form };
    delete dataToSend.password_confirm;

    if (dataToSend.password === "") {
      delete dataToSend.password;
    }

    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

try {
  const res = await fetch(`${API_BASE_URL}/api/volunteers/?id=${volunteer.id}`, {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );

      if (res.ok) {
        setMessage({ type: 'success', text: "Profil mis à jour 🎉" });
        setForm((prev) => ({ ...prev, password: "", password_confirm: "" }));
      } else {
        const errorData = await res.json();
        setMessage({ type: 'error', text: `Erreur lors de la mise à jour : ${errorData.detail || res.statusText}` });
      }
    } catch (err) {
      console.error("Erreur lors de la mise à jour du profil :", err);
      setMessage({ type: 'error', text: "Erreur lors de la mise à jour du profil." });
    }
  };

  const handleDelete = async () => {
    setShowConfirmDelete(true);
  };

  const confirmDeleteAccount = async () => {
    setShowConfirmDelete(false);

    if (!token || !volunteer) {
      setMessage({ type: 'error', text: 'Token d\'authentification ou données du bénévole manquantes.' });
      return;
    }

    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

try {
  const res = await fetch(`${API_BASE_URL}/api/volunteers/?id=${volunteer.id}`, {
        
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.ok) {
        setMessage({ type: 'success', text: "Compte supprimé 😢" });
        localStorage.removeItem("token");
        router.push("/");
      } else {
        const errorData = await res.json();
        setMessage({ type: 'error', text: `Erreur lors de la suppression : ${errorData.detail || res.statusText}` });
      }
    } catch (err) {
      console.error("Erreur lors de la suppression du compte :", err);
      setMessage({ type: 'error', text: "Erreur lors de la suppression du compte." });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-xl font-semibold text-gray-700">Chargement...</div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg my-8">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-[#324960]">Mon Profil</h1>

        {message && (
          <div
            className={`p-4 mb-4 rounded-md text-center ${
              message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}
            role="alert"
          >
            {message.text}
          </div>
        )}

        <div className="space-y-6">
          <label className="block">
            <span className="text-gray-700 font-medium mb-1 block">Prénom</span>
            <input
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#4682a9] focus:border-transparent transition duration-200"
              name="first_name"
              value={form.first_name || ""}
              onChange={handleChange}
            />
          </label>

          <label className="block">
            <span className="text-gray-700 font-medium mb-1 block">Nom</span>
            <input
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#4682a9] focus:border-transparent transition duration-200"
              name="last_name"
              value={form.last_name || ""}
              onChange={handleChange}
            />
          </label>

          <label className="block">
            <span className="text-gray-700 font-medium mb-1 block">Email</span>
            <input
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#4682a9] focus:border-transparent transition duration-200"
              name="email"
              value={form.email || ""}
              onChange={handleChange}
              type="email"
            />
          </label>

          <label className="block">
            <span className="text-gray-700 font-medium mb-1 block">Téléphone</span>
            <input
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#4682a9] focus:border-transparent transition duration-200"
              name="telephone"
              value={form.telephone || ""}
              onChange={handleChange}
              type="tel"
            />
          </label>

          <label className="block">
            <span className="text-gray-700 font-medium mb-1 block">Code postal</span>
            <input
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#4682a9] focus:border-transparent transition duration-200"
              name="zipcode"
              value={form.zipcode || ""}
              onChange={handleChange}
              type="text"
            />
          </label>

          <label className="block">
            <span className="text-gray-700 font-medium mb-1 block">Adresse</span>
            <input
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#4682a9] focus:border-transparent transition duration-200"
              name="address"
              value={form.address || ""}
              onChange={handleChange}
              type="text"
            />
          </label>

          <label className="block">
            <span className="text-gray-700 font-medium mb-1 block">Nouveau mot de passe</span>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#4682a9] focus:border-transparent transition duration-200"
              name="password"
              value={form.password || ""}
              onChange={handleChange}
              placeholder="Laisser vide pour ne pas modifier"
            />
          </label>

          <label className="block">
            <span className="text-gray-700 font-medium mb-1 block">Confirmation du mot de passe</span>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#4682a9] focus:border-transparent transition duration-200"
              name="password_confirm"
              value={form.password_confirm || ""}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleSubmit}
            className="flex-1 bg-[#324960] text-white font-bold px-6 py-3 rounded-full shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:bg-[#4682a9] hover:text-white hover:shadow-[0_6px_12px_rgba(6,182,212,0.4)] active:translate-y-1 active:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] transition-all duration-200 ease-in-out text-lg"
          >
            Mettre à jour
          </button>
          <button
            onClick={handleDelete}
            className="flex-1 bg-red-600 text-white font-bold px-6 py-3 rounded-full shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:bg-red-700 hover:shadow-md active:translate-y-1 active:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] transition-all duration-200 ease-in-out text-lg"
          >
            Supprimer mon compte
          </button>
        </div>
      </div>
      <Footer />

      {showConfirmDelete && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-sm w-full text-center">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Confirmation de suppression</h3>
            <p className="text-gray-700 mb-6">Voulez-vous vraiment supprimer votre compte ? Cette action est irréversible.</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowConfirmDelete(false)}
                className="bg-gray-300 text-gray-800 font-bold px-5 py-2 rounded-full hover:bg-gray-400 transition duration-200"
              >
                Annuler
              </button>
              <button
                onClick={confirmDeleteAccount}
                className="bg-red-600 text-white font-bold px-5 py-2 rounded-full hover:bg-red-700 transition duration-200"
              >
                Confirmer la suppression
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
