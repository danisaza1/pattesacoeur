"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import OwnerStep from "../components/readoption/OwnerStep";
import AnimalStep from "../components/readoption/AnimalStep";

export default function RehomingPage() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/volunteers/me/", {
      credentials: "include",
    })
      .then((res) => {
        if (res.status === 401) {
          // Pas de session : on redirige
          router.push("/volunteer");
        } else {
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
        router.push("/volunteer");
      });
  }, []);

  if (isLoading) return null;

  return (
    <section className="flex flex-col items-center bg-white py-10 min-h-screen px-4">
      <div className="text-center mb-8 max-w-xl">
        <h1 className="text-2xl font-bold text-[#324960] mb-2">
          Formulaire de remise
        </h1>
        <p className="text-[#324960]">
          Pour mieux vous connaître et connaître l’animal, veuillez remplir ce
          formulaire en deux étapes.
        </p>
      </div>

      <div className="w-full max-w-2xl bg-gray-100 rounded-xl shadow-md p-6">
        {step === 1 && <OwnerStep onNext={() => setStep(2)} />}
        {step === 2 && (
          <AnimalStep onSubmit={() => router.push("/merci")} />
        )}{" "}
      </div>
    </section>
  );
}
