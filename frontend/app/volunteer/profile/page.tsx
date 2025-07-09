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

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        router.push("/volunteer/login");
        return;
      }

      try {
        const res = await fetch("http://localhost:8000/api/volunteers/me/", {
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
        console.error("Erreur :", err);
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
    if (!token || !volunteer) return;

    if (form.password && form.password !== form.password_confirm) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    // Extraemos password_confirm y lo renombramos para evitar warning de variable no usada
    const { password_confirm: _password_confirm, ...dataToSend } = form;

    try {
      const res = await fetch(
        `http://localhost:8000/api/volunteers/?id=${volunteer.id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );

      if (res.ok) {
        alert("Profil mis à jour 🎉");
      } else {
        alert("Erreur lors de la mise à jour");
      }
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la mise à jour");
    }
  };

  const handleDelete = async () => {
    if (!token || !volunteer) return;
    const confirmDelete = window.confirm(
      "Voulez-vous vraiment supprimer votre compte ?"
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `http://localhost:8000/api/volunteers/?id=${volunteer.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.ok) {
        alert("Compte supprimé 😢");
        localStorage.removeItem("token");
        router.push("/");
      } else {
        alert("Erreur lors de la suppression");
      }
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la suppression");
    }
  };

  if (loading) return <div className="p-8">Chargement...</div>;

  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Mon Profil</h1>

        <div className="space-y-4">
          <label className="block">
            <span>Prénom</span>
            <input
              className="w-full border rounded px-3 py-2"
              name="first_name"
              value={form.first_name || ""}
              onChange={handleChange}
            />
          </label>

          <label className="block">
            <span>Nom</span>
            <input
              className="w-full border rounded px-3 py-2"
              name="last_name"
              value={form.last_name || ""}
              onChange={handleChange}
            />
          </label>

          <label className="block">
            <span>Email</span>
            <input
              className="w-full border rounded px-3 py-2"
              name="email"
              value={form.email || ""}
              onChange={handleChange}
            />
          </label>

          <label className="block">
            <span>Téléphone</span>
            <input
              className="w-full border rounded px-3 py-2"
              name="telephone"
              value={form.telephone || ""}
              onChange={handleChange}
            />
          </label>

          <label className="block">
            <span>Code postal</span>
            <input
              className="w-full border rounded px-3 py-2"
              name="zipcode"
              value={form.zipcode || ""}
              onChange={handleChange}
            />
          </label>

          <label className="block">
            <span>Adresse</span>
            <input
              className="w-full border rounded px-3 py-2"
              name="address"
              value={form.address || ""}
              onChange={handleChange}
            />
          </label>

          <label className="block">
            <span>Nouveau mot de passe</span>
            <input
              type="password"
              className="w-full border rounded px-3 py-2"
              name="password"
              value={form.password || ""}
              onChange={handleChange}
              placeholder="Si vide, pas de modification"
            />
          </label>

          <label className="block">
            <span>Confirmation du mot de passe</span>
            <input
              type="password"
              className="w-full border rounded px-3 py-2"
              name="password_confirm"
              value={form.password_confirm || ""}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="mt-6 flex gap-4">
          <button
            onClick={handleSubmit}
            className="flex-1 bg-[#324960] text-white font-bold px-4 py-3 rounded-full shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:bg-[#4682a9] hover:text-black hover:shadow-[0_6px_12px_rgba(6,182,212,0.4)] active:translate-y-1 active:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] transition-all duration-200 ease-in-out"
          >
            Mettre à jour
          </button>
          <button
            onClick={handleDelete}
            className="flex-1 bg-red-600 text-white font-bold px-4 py-3 rounded-full shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:bg-red-700 hover:shadow-md active:translate-y-1 active:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] transition-all duration-200 ease-in-out"
          >
            Supprimer mon compte
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
