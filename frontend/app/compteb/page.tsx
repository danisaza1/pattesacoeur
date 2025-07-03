import { useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState("");
  const [frequency, setFrequency] = useState("unique");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Merci ${name} pour votre don de ${amount}€ (${frequency}) !`);
    // Ici tu peux ajouter la logique d'appel API ou redirection
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-white flex flex-col">
      <header className="bg-indigo-700 text-white p-6 flex items-center justify-center">
        <img
          src="/logo-spa.svg"
          alt="Logo SPA"
          className="h-10 mr-4"
          // Met un vrai logo dans /public/logo-spa.svg ou remplace par texte
          onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
        />
        <h1 className="text-2xl font-bold">Soutenez la SPA - Faites un don</h1>
      </header>

      <main className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <h2 className="text-xl font-semibold mb-6 text-center">
            Faire un don pour protéger les animaux
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 font-medium" htmlFor="amount">
                Montant du don (€)
              </label>
              <input
                id="amount"
                type="number"
                min="1"
                step="1"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Ex: 20"
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Fréquence</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="frequency"
                    value="unique"
                    checked={frequency === "unique"}
                    onChange={() => setFrequency("unique")}
                    className="form-radio text-indigo-600"
                  />
                  <span className="ml-2">Don unique</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="frequency"
                    value="mensuel"
                    checked={frequency === "mensuel"}
                    onChange={() => setFrequency("mensuel")}
                    className="form-radio text-indigo-600"
                  />
                  <span className="ml-2">Don mensuel</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="name">
                Nom complet
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jean Dupont"
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jean@example.com"
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-700 text-white py-3 rounded font-semibold hover:bg-indigo-800 transition"
            >
              Faire un don
            </button>
          </form>
        </div>
      </main>

      <footer className="bg-indigo-100 text-indigo-700 text-center p-4 text-sm">
        SPA &copy; 2025 - Tous droits réservés
      </footer>
    </div>
  );
}
