'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";


type FormData = {
  firstname: string;
  lastname: string;
  location: string;
  email: string;
  password: string;
};

export default function AdoptingForm() {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    location: "",
    email: "",
    password: "",
  });

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:8000/api/adopters/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log("Réponse du serveur :", data);

    if (res.ok) {
      setFormData({
        firstname: "",
        lastname: "",
        location: "",
        email: "",
        password: "",
      });
      // ✅ Redirection après succès :
      router.push("/confirmation-formulaire");
    } else {
      console.error("Erreur HTTP :", res.status);
      console.error("Détails :", data);
    }
  } catch (error) {
    console.error("Erreur de réseau ou JS :", error);
  }
};


  

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
   <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow ">
        <h2 className="text-2xl font-semibold mb-4">Formulaire d'adoption</h2>
        <p className="mb-6 text-gray-600">
          Remplissez ce formulaire pour rencontrer un animal.
        </p>
        <form onSubmit={handleSubmit}  className="space-y-4 "  >

     <label>Nom :</label>
     <div className="flex flex-col md:flex-row gap-4">
         <input
          type="text"
          placeholder="Entrez votre nom"
          value={formData.lastname}
          onChange={handleChange}
          name="lastname"
          />
      </div>

     <label>Prénom :</label>
     <div className="flex flex-col md:flex-row gap-4">
         <input
          type="text"
          placeholder="Entrez votre prénom"
          value={formData.firstname}
          onChange={handleChange}
          name="firstname"
        />
      </div>

    <label>Adresse :</label>
    <div className="flex flex-col md:flex-row gap-4">
     <input
          type="text"
          placeholder="Entrez votre adresse"
          value={formData.location}
          onChange={handleChange}
          name="location"
        />
    </div>Envoyer

    <div className="flex flex-col md:flex-row gap-4">
        <label>Email :</label>
        <input
          type="email"
          placeholder="Entrez votre email"
          value={formData.email}
          onChange={handleChange}
          name="email"
        />
    </div>

        <label>Mot de passe :</label>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="password"
            placeholder="Entrez un mot de passe"
            value={formData.password}
            onChange={handleChange}
            name="password"
          />
        </div>
       <button
  type="submit"
  className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
>
  Envoyer
</button>
        </form>
      </div>
    </section>
  );
}
  

