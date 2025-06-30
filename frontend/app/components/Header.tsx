import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-pink-50 flex flex-row justify-between items-center p-10">
      <div className="flex items-center"> {/* Usamos flex para que el icono y el texto estén alineados */}
        <span className="text-3xl font-bold">🐾</span>
        <span className="text-gray-900 text-3xl font-bold">Ada</span><span className="text-orange-400 text-3xl font-bold">opte</span>
      </div>

<div className="flex text-lg font-bold text-gray-700"> {/* Añadimos space-x-4 y quitamos justify-between de este div interno */}
  <Link
    href="#Accueil"
    className="pr-4 hover:text-orange-500 transition duration-300 ease-in-out"
  >
    🏠Accueil
  </Link>
  <Link
    href="/html/rechercher.html"
    className="pr-4 hover:text-orange-500 transition duration-300 ease-in-out"
  >
    🦴J'adopte
  </Link>
  <Link
    href="#Guide-de-ladoption"
    className="pr-4 hover:text-orange-500 transition duration-300 ease-in-out"
  >
    🐟Guide de l'adoption
  </Link>
  <Link
    href="/html/benevole.html"
    className="hover:text-orange-500 transition duration-300 ease-in-out"
  >
    🐿️Devenir bénévole
  </Link>
</div>

      <div>
        <Link
          href="#Faire-un-don"
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out"
        >
          Faire un don 💖
        </Link>
      </div>
    </nav>
  );
}