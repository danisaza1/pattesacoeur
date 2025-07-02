// components/AdoptionGuide.tsx
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function AdoptionGuide() {
  return (
<>
    <Header></Header>
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Guide pour une Adoption Réussie
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Section: Critères d'Adoption */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Prérequis pour l'Adoption
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chez Adaopte, nous encourageons une démarche d'adoption réfléchie et engagée. Pour cela,
              il est nécessaire d'être majeur et de s'inscrire dans une volonté sincère d'offrir un foyer aimant et stable.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Une **participation financière** vous sera demandée. Son montant varie en fonction de l'espèce et de la situation spécifique de l'animal,
              contribuant ainsi aux frais de soins, d'identification et de vaccination.
            </p>
          </div>

          {/* Section: Notre Engagement pour l'Adoption Responsable */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              L'Adoption Responsable : Notre Priorité
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Adaopte s'assure que chaque adoption est une décision bien mûrie. Nous veillons à ce que l'animal rejoigne une famille qui correspond
              parfaitement à ses besoins et à son mode de vie. Notre objectif est de créer des correspondances durables et heureuses.
            </p>
          </div>

          {/* Section: Adopter pour Changer des Vies */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Adoptez, Sauvez une Vie
            </h2>
            <p className="text-gray-700 leading-relaxed">
              En adoptant via Adaopte, vous offrez une chance précieuse. Certains animaux, malheureusement moins sollicités,
              comme ceux ayant connu des échecs d'adoption, les animaux plus âgés, ou ceux nécessitant des soins spécifiques
              suite à des pathologies, attendent avec impatience la chaleur et la sécurité d'un foyer aimant.
              Votre adoption peut transformer leur destin.
            </p>
          </div>

          {/* Section: Le Parcours d'Adoption */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Votre Parcours d'Adoption
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Pour initier votre adoption chez Adaopte, nous vous invitons à nous décrire votre style de vie et vos attentes envers votre futur compagnon.
              Notre formulaire d'adoption est conçu pour cela.
            </p>
            <a
              href="/benevole" // Assuming the form is on the /benevole page or adjust to /adoption-form if separate
              className="px-8 py-3 text-lg font-bold text-white bg-[#324960] rounded-lg shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:bg-[#6da2b5] hover:shadow-[0_6px_12px_rgba(6,182,212,0.4)] active:translate-y-1 active:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] transition-all duration-200 ease-in-out whitespace-nowrap"
            >
              Creer une compte adoptant !
            </a>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
    </>
  );
}