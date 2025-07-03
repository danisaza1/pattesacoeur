

import OwnerForm from "../components/rehoming/OwnerForm";
import AnimalForm from "../components/rehoming/AnimalForm";

export default function RehomingPage() {
  return (
    <section className="flex flex-col items-center bg-[#324960] text-white py-6 mt-16">
      <div className="text-center mb-8">
        <p>
          Pour mieux vous connaître et connaître l'animal, veuillez remplir le formulaire en deux étapes.
        </p>
      </div>

      <div className="w-full max-w-2xl space-y-12">
        <OwnerForm />
        <AnimalForm />
      </div>
    </section>
  );
}

