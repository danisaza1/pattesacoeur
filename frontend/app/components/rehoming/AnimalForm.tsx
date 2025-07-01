

export default function OwnerForm() {
  return (
    <section className="flex flex-col items-center bg-[#324960] text-white py-6 mt-16">

      <form action="/search" className="w-full max-w-md space-y-4">
        
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

        <button type="submit" className="mt-4 bg-white text-[#324960] px-4 py-2 rounded">
          Envoyer
        </button>
      </form>
    </section>
  );
}
