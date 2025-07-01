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

    const res = await fetch("http://localhost:8000/api/adopter/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log("Réponse du serveur :", data);
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
        <h2 className="text-2xl font-semibold mb-4">Formulaire d'inscription</h2>
        <p className="mb-6 text-gray-600">
          Remplissez ce formulaire pour joindre notre réseau de bénévoles.
        </p>
        <form onSubmit={handleSubmit}  className="space-y-4">

     <label>Nom :</label>
         <input
          type="text"
          placeholder="Entrez votre nom"
          value={formData.lastname}
          onChange={handleChange}
          name="lastname"
        />

     <label>Prénom :</label>
         <input
          type="text"
          placeholder="Entrez votre prénom"
          value={formData.firstname}
          onChange={handleChange}
          name="firstname"
        />

 <label>Adresse :</label>
     <input
          type="text"
          placeholder="Entrez votre adresse"
          value={formData.location}
          onChange={handleChange}
          name="location"
        />

        <label>Email :</label>
        <input
          type="email"
          placeholder="Entrez votre email"
          value={formData.email}
          onChange={handleChange}
          name="email"
        />

        <label>Mot de passe :</label>
        <input
          type="password"
          placeholder="Entrez un mot de passe"
          value={formData.password}
          onChange={handleChange}
          name="password"
        />

        <button type="submit">Envoyer</button>

        </form>
      </div>
    </section>
  );
}
    // <div className="Style.form">
    //   <form onSubmit={handleSubmit}>
    //     <label>Nom :</label>
    //     <input
    //       type="text"
    //       placeholder="Entrez votre nom"
    //       value={formData.lastname}
    //       onChange={handleChange}
    //       name="lastname"
    //     />

    //     <label>Prénom :</label>
    //     <input
    //       type="text"
    //       placeholder="Entrez votre prénom"
    //       value={formData.firstname}
    //       onChange={handleChange}
    //       name="firstname"
    //     />

    //     <label>Adresse :</label>
    //     <input
    //       type="text"
    //       placeholder="Entrez votre adresse"
    //       value={formData.location}
    //       onChange={handleChange}
    //       name="location"
    //     />

    //     <label>Email :</label>
    //     <input
    //       type="email"
    //       placeholder="Entrez votre email"
    //       value={formData.email}
    //       onChange={handleChange}
    //       name="email"
    //     />

    //     <label>Mot de passe :</label>
    //     <input
    //       type="password"
    //       placeholder="Entrez un mot de passe"
    //       value={formData.password}
    //       onChange={handleChange}
    //       name="password"
    //     />

    //     <button type="submit">Envoyer</button>
    //   </form>
    // </div>