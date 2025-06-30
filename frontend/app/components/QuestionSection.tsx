
export default function QuestionsSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Des questions ?</h2>
        <p className="text-gray-600">
          Vous avez besoin de plus d'informations avant de vous lancer ? Écrivez-nous à :{" "}
          <a
            href="mailto:contact@adaopte.fr"
            className="text-pink-600 underline hover:text-pink-700"
          >
            contact@adaopte.fr
          </a>
        </p>
      </div>
    </section>
  );
}
