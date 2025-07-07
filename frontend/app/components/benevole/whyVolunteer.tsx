export default function WhyVolunteer() {
  return (
    <section className="bg-white py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">POURQUOI DEVENIR BÉNÉVOLE ?</h2>
      <p className="text-xl mx-auto text-gray-600 mb-10">
        Votre implication change des vies. Chaque mission, chaque geste, chaque
        minute compte. Rejoignez un réseau bienveillant et actif, où votre
        contribution fait une vraie différence.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="p-6 bg-[#b8e0d2] rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-bold text-[#1c567d] mb-2">
            {" "}
            💟Impact direct
          </h3>
          <p className="text-lg text-gray-700">
            Vous participez concrètement au bien-être des animaux et à leur
            adoption.
          </p>
        </div>
        <div className="p-6 bg-[#b8e0d2] rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-bold text-[#1c567d]  mb-2">
            🌱 Développement personnel
          </h3>
          <p className="text-lg text-gray-700">
            Gagnez en expérience, en empathie et en compétences humaines et
            pratiques.
          </p>
        </div>
        <div className="p-6 bg-[#b8e0d2] rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-bold text-[#1c567d]   mb-2">
            🤝 Communauté
          </h3>
          <p className="text-lg text-gray-700">
            Intégrez une équipe engagée et passionnée, dans une ambiance
            solidaire.
          </p>
        </div>
      </div>
    </section>
  );
}
