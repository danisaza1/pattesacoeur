// components/VolunteerForm.tsx

export default function VolunteerForm() {
  return (
    <section className="bg-gray-100 py-16 ">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow flex flex-col items-center ">
        <h2 className="text-2xl font-semibold mb-4">Formulaire d'inscription</h2>
        <p className="mb-6 text-gray-600">
          Remplissez ce formulaire pour joindre notre réseau de bénévoles.
        </p>
        <form
          action="https://formspree.io/f/mjkgrkqk"
          method="POST"
          className="space-y-4 flex flex-col justify-between"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input required name="firstname" placeholder="Prénom *" className="input" />
            <input required name="lastname" placeholder="Nom *" className="input" />
          </div>
          <input
            required
            name="email"
            placeholder="Adresse email *"
            type="email"
            className="input"
          />
          <div className="flex flex-col md:flex-row gap-4">
            <input required name="city" placeholder="Ville *" className="input" />
            <input required name="zipcode" placeholder="Code postal *" className="input" />
          </div>
          <input
            required
            name="availability"
            type="number"
            placeholder="Disponibilités (heures / semaine)"
            className="input"
          />
          <textarea
            required
            name="motivation"
            placeholder="Votre motivation *"
            className="input h-32"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Envoyer ma candidature
          </button>
        </form>
      </div>
    </section>
  );
}
