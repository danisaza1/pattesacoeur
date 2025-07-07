"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";



const faqData = [
   {
    question: "Comment puis-je m'inscrire en tant que bénévole ?",
    answer: (
      <>
        Vous pouvez vous inscrire en remplissant notre formulaire d’inscription
        disponible sur la page bénévole.{" "}
        <a href="/benevole" className="text-blue-500 underline">
          Cliquez ici pour devenir bénévole
        </a>.
      </>
    ),
  },
  {
    question: "Quels sont les horaires d'ouverture ?",
    answer:
      "Nous sommes ouverts du lundi au vendredi de 9h à 18h.",
  },
  {
    question: "Puis-je annuler ma participation ?",
    answer:
      "Oui, vous pouvez annuler votre participation jusqu'à 48h avant l'événement.",
  },
  {
    question: "Comment contacter le support ?",
    answer: (
      <>
        Vous pouvez nous envoyer un email à{" "}
        <a href="mailto:contact@pattesacoeur.fr" className="text-blue-500 underline">
          contact@pattesacoeur.fr
        </a>.
      </>
    ),
  },
  {
    question: "Comment annuler un don ?",
    answer:
      "Si vous souhaitez nous aider, vous pouvez d'abord faire un don unique. Si vous le pouvez, envisagez également un don mensuel. Pour toute modification ou annulation, merci de nous contacter directement.",
  },
  {
    question: "Existe-t-il des locaux ?",
    answer:
      "Oui, nos locaux sont situés au 116 Rue du Faubourg Saint-Martin. Venez rencontrer nos animaux à poils, ils vous attendent avec impatience !",
  },
];


export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Header></Header>
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Foire aux questions (FAQ)
        </h1>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border rounded-lg shadow-sm">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center text-lg font-medium focus:outline-none"
                onClick={() => toggleIndex(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-panel-${index}`}
                id={`faq-header-${index}`}
              >
                {item.question}
                <span
                  className="ml-4 text-2xl transform transition-transform duration-300"
                  style={{
                    transform:
                      activeIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>
              {activeIndex === index && (
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-header-${index}`}
                  className="px-6 pb-6 text-gray-700"
                >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
