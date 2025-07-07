"use client";
import React from "react";

type AnimalStepProps = {
  onSubmit: () => void;
};

export default function AnimalStep({ onSubmit }: AnimalStepProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 py-12">
      <div className="w-full max-w-xl bg-gray-100 rounded-xl shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Étape 2 : Informations sur l’animal
        </h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="animalName" className="block mb-1 text-gray-700">
              Nom de l’animal
            </label>
            <input
              type="text"
              id="animalName"
              name="animalName"
              className="w-full p-3 rounded border border-gray-300 text-black"
            />
          </div>

          <div>
            <label htmlFor="animalAge" className="block mb-1 text-gray-700">
              Âge
            </label>
            <input
              type="text"
              id="animalAge"
              name="animalAge"
              className="w-full p-3 rounded border border-gray-300 text-black"
            />
          </div>

          <div>
            <label htmlFor="animalBreed" className="block mb-1 text-gray-700">
              Race
            </label>
            <input
              type="text"
              id="animalBreed"
              name="animalBreed"
              className="w-full p-3 rounded border border-gray-300 text-black"
            />
          </div>

          <div>
            <label htmlFor="reason" className="block mb-1 text-gray-700">
              Raison de l’abandon
            </label>
            <textarea
              id="reason"
              name="reason"
              rows={4}
              className="w-full p-3 rounded border border-gray-300 text-black"
            />
          </div>
        </form>

        <div className="text-center">
          <button
            type="button"
            onClick={onSubmit}
            className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded"
          >
            Envoyer ✉️
          </button>
        </div>
      </div>
    </section>
  );
}
