
'use client'

import { useState } from "react";
import OwnerStep from "../components/rehoming/OwnerStep";
import AnimalStep from "../components/rehoming/AnimalStep";

export default function RehomingPage() {
  const [step, setStep] = useState(1);

  return (
    <section className="flex flex-col items-center bg-white py-10 min-h-screen px-4">
      <div className="text-center mb-8 max-w-xl">
        <h1 className="text-2xl font-bold text-[#324960] mb-2">Formulaire de remise</h1>
        <p className="text-[#324960]">
          Pour mieux vous connaître et connaître l’animal, veuillez remplir ce formulaire en deux étapes.
        </p>
      </div>

      <div className="w-full max-w-2xl bg-gray-100 rounded-xl shadow-md p-6">
        {step === 1 && <OwnerStep onNext={() => setStep(2)} />}
        {step === 2 && <AnimalStep />}
      </div>
    </section>
  );
}

