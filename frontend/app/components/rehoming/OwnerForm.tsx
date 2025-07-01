
export default function OwnerForm() {
  return (
    <section className="flex flex-col items-center bg-[#324960] text-white py-6 mt-16">

      <form action="/search" className="w-full max-w-md space-y-4">
        {/* Étape 1 : Propriétaire */}
        <h2 className="text-lg font-bold">Informations sur le propriétaire</h2>

        <div>
          <label htmlFor="ownerName" className="block mb-1">Nom</label>
          <input type="text" id="ownerName" name="ownerName" className="w-full p-2 text-black" />
        </div>

        <div>
          <label htmlFor="ownerFirstName" className="block mb-1">Prénom</label>
          <input type="text" id="ownerFirstName" name="ownerFirstName" className="w-full p-2 text-black" />
        </div>

        <div>
          <label htmlFor="phone" className="block mb-1">Téléphone</label>
          <input type="tel" id="phone" name="phone" className="w-full p-2 text-black" />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input type="email" id="email" name="email" className="w-full p-2 text-black" />
        </div>

        <div>
          <label htmlFor="address" className="block mb-1">Adresse / Ville / Région</label>
          <input type="text" id="address" name="address" className="w-full p-2 text-black" />
        </div>

        <div>
          <label htmlFor="ownershipDuration" className="block mb-1">Depuis combien de temps avez-vous l’animal ?</label>
          <input type="text" id="ownershipDuration" name="ownershipDuration" className="w-full p-2 text-black" />
        </div>

        {/* Étape 2 : Animal */}
        <h2 className="text-lg font-bold mt-6">Informations sur l'animal</h2>

        <div>
          <label htmlFor="animalName" className="block mb-1">Nom de l'animal</label>
          <input type="text" id="animalName" name="animalName" className="w-full p-2 text-black" />
        </div>

        <div>
          <label htmlFor="animalAge" className="block mb-1">Âge de l'animal</label>
          <input type="text" id="animalAge" name="animalAge" className="w-full p-2 text-black" />
        </div>

        <div>
          <label htmlFor="animalBreed" className="block mb-1">Race</label>
          <input type="text" id="animalBreed" name="animalBreed" className="w-full p-2 text-black" />
        </div>

        <div>
          <label htmlFor="reason" className="block mb-1">Raison de l'abandon</label>
          <textarea id="reason" name="reason" rows={4} className="w-full p-2 text-black" />
        </div>

        <button type="submit" className="hw-32 relative inline-flex items-center justify-center px-6 py-2 text-lg font-bold text-white bg-cyan-600 rounded-lg shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:bg-cyan-700 hover:shadow-[0_6px_12px_rgba(6,182,212,0.4)] active:translate-y-1 active:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] transition-all duration-200 ease-in-out mt-4">
          Envoyer
        </button>
      </form>
    </section>
  );
}
