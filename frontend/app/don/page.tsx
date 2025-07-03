"use client";
import { useState } from "react";
import { Calendar, CreditCard, Lock } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DonationPage() {
  const [donType, setDonType] = useState<"unique" | "mensuel">("mensuel");
  const [amount, setAmount] = useState<number | null>(25);
  const amounts = [20, 25, 30];

  return (
    <>
      <Header></Header>
      <div className="bg-[url('/images/main.jpg')] bg-cover bg-no-repeat min-h-screen flex items-start justify-center py-20 ">
        <div className="flex flex-col m-4 md:flex-row bg-[#4682a9] rounded-4xl p-4 w-full max-w-4xl gap-10 items-center md:m-10">
          {/* Texte gauche */}
          <div className="text-white flex flex-col items-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
              Leur tendrez-vous la patte ?
            </h1>
            <p className="text-lg sm:text-xl max-w-md">
              Vos dons généreux nous aident à offrir des soins qui changent des
              vies et à trouver des foyers pour toujours à plus de 13 000 de nos
              amis à fourrure.{" "}
            </p>
          </div>

          {/* Formulaire droite */}
          <div className="bg-[#fdf8ed] rounded-2xl shadow-xl p-6 md:p-6 w-full max-w-md mx-auto">
            {/* Tabs */}
            <div className="flex rounded-xl overflow-hidden bg-[#f0e9da] mb-6">
              <button
                onClick={() => setDonType("unique")}
                className={`flex-1 py-3 font-semibold flex items-center justify-center gap-2 transition ${
                  donType === "unique" ? "bg-[#324960] text-white" : ""
                }`}
              >
                <CreditCard className="w-5 h-5" /> Don unique
              </button>
              <button
                onClick={() => setDonType("mensuel")}
                className={`flex-1 py-3 font-semibold flex items-center justify-center gap-2 transition ${
                  donType === "mensuel" ? "bg-[#324960] text-white" : ""
                }`}
              >
                <Calendar className="w-5 h-5" /> Don mensuel
              </button>
            </div>

            {/* Titre */}
            <h2 className="text-xl font-bold text-center mb-4">
              Fais un don {donType} à tous nos animaux ! 🌟
            </h2>

            {/* Montants */}
            <div className="flex justify-center gap-4 mb-4 flex-wrap">
              {amounts.map((a) => (
                <button
                  key={a}
                  onClick={() => setAmount(a)}
                  className={`px-5 py-3 rounded-lg shadow text-lg font-semibold transition ${
                    amount === a
                      ? "bg-[#324960] text-white"
                      : "bg-white text-[#202020]"
                  }`}
                >
                  €{a}
                </button>
              ))}
            </div>

            {/* Custom input */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-xl font-semibold">€</span>
              <input
                type="number"
                placeholder="Enter amount"
                className="border rounded-lg px-3 py-2 w-32 text-center text-lg"
                value={amount || ""}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
            </div>

            {/* Bouton */}
            <button
              className="w-full  bg-[#324960]  text-white shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:bg-[#4682a9] hover:text-black hover:shadow-[0_6px_12px_rgba(6,182,212,0.4)] active:translate-y-1 active:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] transition-all duration-200 ease-in-out font-bold py-3 
            rounded-full flex items-center justify-center gap-2 text-lg "
            >
              <Lock className="w-5 h-5" /> Suivant
            </button>

            <p className="text-sm text-gray-600 text-center mt-4">
              (Pas de paiement – démonstration uniquement){" "}
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
