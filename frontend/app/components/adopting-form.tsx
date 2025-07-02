import Link from "next/link";
import React, { useState } from "react";

type FormData = {
  firstname: string;
  lastname: string;
  location: string;
  email: string;
  password: string;
};

export default function AdoptingForm() {
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    location: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("http://127.0.0.1:8000/api/adopter/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),

      
    });

    const data = await res.json();
    console.log("Réponse du serveur :", data);

 if (res.ok) {
    // Réinitialiser le formulaire
    setFormData({
      firstname: "",
      lastname: "",
      location: "",
      email: "",
      password: "",
    });
  } else {
    console.error("Erreur lors de la soumission :", data);
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
      <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Formulaire d'adoption</h2>
        <p className="mb-6 text-gray-600">
          Remplissez ce formulaire pour rencontrer un animal.
        </p>
        <form onSubmit={handleSubmit}  className="space-y-4"  >

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
    </div>

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
        <Link  href="/html/benevole.html">
        <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700" >Envoyer</button>
        </Link>
        </form>
      </div>
    </section>
  );
}
  

