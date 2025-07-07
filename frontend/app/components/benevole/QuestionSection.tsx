export default function QuestionsSection() {
  return (
    <>
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Des questions ?</h2>
          <p className="text-gray-600 mb-8">
            Vous avez besoin de plus d'informations avant de vous lancer ?{" "}
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            {" "}
            {/* Container for buttons */}
            {/* Button for Email */}
            <a
              href="mailto:contact@patteacoeur.fr" // This link opens the user's email client
              className="px-8 py-3 text-lg font-bold text-white bg-[#324960] rounded-lg shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:bg-[#6da2b5] hover:shadow-[0_6px_12px_rgba(6,182,212,0.4)] active:translate-y-1 active:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] transition-all duration-200 ease-in-out whitespace-nowrap"
            >
              Nous contacter
            </a>
            {/* Button for FAQ */}
            <a
              href="/faq" // Link to your FAQ page
              className="px-8 py-3 text-lg font-bold text-white bg-[#324960] rounded-lg shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:bg-[#6da2b5] hover:shadow-[0_6px_12px_rgba(6,182,212,0.4)] active:translate-y-1 active:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] transition-all duration-200 ease-in-out whitespace-nowrap"
            >
              Foire Aux Questions
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16  text-center">
        <h2 className="text-3xl font-bold mb-6">Notre mission</h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          Adaopte est une plateforme solidaire d’adoption d’animaux de
          compagnie, regroupant les annonces de refuges et associations. Notre
          mission : faciliter l’adoption responsable et offrir une seconde
          chance aux animaux abandonnés.
        </p>
      </section>
    </>
  );
}
