export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        ILS EN PARLENT MIEUX QUE NOUS
      </h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {[
          {
            name: "Sarah",
            text: "Être bénévole chez Adaopte m’a permis de me sentir utile. J’ai rencontré des personnes formidables et des animaux incroyables.",
            image: "/images/photo.avif",
          },
          {
            name: "Nicolas",
            text: "Chaque moment passé à aider ces animaux me remplit de joie. C’est une aventure humaine extraordinaire.",
            image: "/images/photo1.avif",
          },
        ].map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition flex gap-4 items-center"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <p className="text-lg text-gray-800 italic">"{t.text}"</p>
              <p className="mt-2 font-extrabold text-[#4682a9]">– {t.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
