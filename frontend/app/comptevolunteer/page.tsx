'use client'

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const [amount, setAmount] = useState("");
  const [frequency, setFrequency] = useState("unique");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Merci ${name} pour votre don de ${amount}€ (${frequency}) !`);
    // Ici tu peux ajouter la logique d'appel API ou redirection
  };

  return (
    <>
       <Header></Header>
    <div className="min-h-screen flex flex-col">

      <main className="flex-grow flex items-center justify-center p-6 ">
<div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full border-2 border-gray-100">
          <h2 className="text-xl font-semibold mb-6 text-center">
            Je me connecte
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
          

            <div>
              <label className="block mb-1 font-medium" htmlFor="name">
                Nom complet
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jean Dupont"
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jean@example.com"
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

          <div className="flex justify-center mt-4">

            <button
              type="submit"
            className="px-6 py-2 text-lg font-bold text-white bg-[#324960] rounded-lg shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:bg-[#4682a9] hover:shadow-[0_6px_12px_rgba(6,182,212,0.4)] active:translate-y-1 active:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] transition-all duration-200 ease-in-out mt-4"
            >
             Je me connecte
            </button>
            </div>
          </form>
        </div>
      </main>

     <Footer></Footer>
    </div>
    </>
  );
}
