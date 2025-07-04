'use client';
import React from 'react';

type OwnerStepProps = {
  onNext: () => void;
};

export default function OwnerStep({ onNext }: OwnerStepProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 py-12">
      <div className="w-full max-w-xl bg-gray-100 rounded-xl shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Étape 1 : Informations sur le propriétaire</h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="ownerLastName" className="block mb-1 text-gray-700">Nom</label>
            <input type="text" id="ownerLastName" name="ownerLastName" className="w-full p-3 rounded border border-gray-300 text-black" />
          </div>

          <div>
            <label htmlFor="ownerFirstName" className="block mb-1 text-gray-700">Prénom</label>
            <input type="text" id="ownerFirstName" name="ownerFirstName" className="w-full p-3 rounded border border-gray-300 text-black" />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="w-full p-3 rounded border border-gray-300 text-black" />
          </div>

          <div>
            <label htmlFor="telephone" className="block mb-1 text-gray-700">Téléphone</label>
            <input type="tel" id="telephone" name="telephone" className="w-full p-3 rounded border border-gray-300 text-black" />
          </div>

          <div>
            <label htmlFor="address" className="block mb-1 text-gray-700">Adresse</label>
            <input type="text" id="address" name="address" className="w-full p-3 rounded border border-gray-300 text-black" />
          </div>

          <div>
            <label htmlFor="ownershipDuration" className="block mb-1 text-gray-700">Durée de possession de l’animal</label>
            <input type="text" id="ownershipDuration" name="ownershipDuration" className="w-full p-3 rounded border border-gray-300 text-black" />
          </div>
        </form>

        <div className="text-center">
          <button
            type="button"
            onClick={onNext}
            className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded"
          >
            Suivant : Infos sur l’animal 🐾
          </button>
        </div>
      </div>
    </section>
  );
}
