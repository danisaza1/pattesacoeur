// components/AdoptionGuide.tsx
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function AdoptionGuide() {
  return (
    <>
      <Header></Header>
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
            Guide pour une Adoption Réussie
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
            {/* Section: Critères d'Adoption */}
            <div className="bg-[#4682a9] text-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <h2 className="text-2xl font-bold mb-4">
                Prérequis pour l&apos;Adoption
              </h2>
              <p className="leading-relaxed mb-4">
                Chez Adaopte, nous encourageons une démarche d&apos;adoption
                réfléchie et engagée. Pour cela, il est nécessaire d&apos;être majeur
                et de s&apos;inscrire dans une volonté sincère d&apos;offrir un foyer
                aimant et stable.
              </p>
              <p className="leading-relaxed">
                Une **participation financière** vous sera demandée. Son montant
                varie en fonction de l&apos;espèce et de la situation spécifique de
                l&apos;animal, contribuant ainsi aux frais de soins, d&apos;identification
                et de vaccination.
              </p>
            </div>

            {/* Section: Notre Engagement pour l'Adoption Responsable */}
            <div className="bg-[#4682a9] text-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <h2 className="text-2xl font-bold  mb-4">
                L&apos;Adoption Responsable : Notre Priorité
              </h2>
              <p className=" leading-relaxed">
                Adaopte s&apos;assure que chaque adoption est une décision bien
                mûrie. Nous veillons à ce que l&apos;animal rejoigne une famille qui
                correspond parfaitement à ses besoins et à son mode de vie.
                Notre objectif est de créer des correspondances durables et
                heureuses.
              </p>
            </div>

            {/* Section: Adopter pour Changer des Vies */}
            <div className=" p-8 bg-[#4682a9] text-white rounded-lg shadow-md flex flex-col items-center text-center">
              <h2 className="text-2xl font-bold  mb-4">
                Adoptez, Sauvez une Vie
              </h2>
              <p className=" leading-relaxed">
                En adoptant via Adaopte, vous offrez une chance précieuse.
                Certains animaux, malheureusement moins sollicités, comme ceux
                ayant connu des échecs d&apos;adoption, les animaux plus âgés, ou
                ceux nécessitant des soins spécifiques suite à des pathologies,
                attendent avec impatience la chaleur et la sécurité d&apos;un foyer
                aimant. Votre adoption peut transformer leur destin.
              </p>
            </div>

            {/* Section: Le Parcours d'Adoption */}
            <div className="bg-[#4682a9] text-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <h2 className="text-2xl font-bold  mb-4">
                Votre Parcours d&apos;Adoption

              </h2>
              <p className=" leading-relaxed mb-6">
                Pour initier votre adoption chez Adaopte, nous vous invitons à
                nous décrire votre style de vie et vos attentes envers votre
                futur compagnon. Notre formulaire d&apos;adoption est conçu pour
                cela.
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
