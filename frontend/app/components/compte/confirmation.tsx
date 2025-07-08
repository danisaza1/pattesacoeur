

import Link from "next/link";
interface Adopter {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  location: string;
}
export default async function ReturnAdopter() {
  const res = await fetch("http://localhost:8000/api/lastone", {
    cache: "no-store",
  });

  const lastAdopter = (await res.json()) as Adopter
  return (
     <section className="p-20 flex justify-center">
      <div className="p-10 bg-blue-200 flex flex-col items-center justify-center gap-8 rounded-3xl w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">Merci pour votre inscription</h2>
        <p className="text-2xl font-semibold mb-4 ">Voici les informations de votre compte:</p>
        <div className="flex flex-row justify-center gap-8 border rounded-md p-4 m-2 w-[30rem] bg-[#324960]">

          <div className="flex flex-col ">
            <p className="text-white text-lg">Prenom:  {lastAdopter.firstname}</p>
            <p className="text-white text-lg">Nom:  {lastAdopter.lastname}</p>
            <p className="text-white text-lg">Email:  {lastAdopter.email}</p>
            <p className="text-white text-lg">Adresse:  {lastAdopter.location}</p>
          </div>
        </div>
        <Link href="/">
          <button className="px-8 py-4 text-lg font-bold text-white bg-[#324960] rounded-lg shadow hover:bg-[#6DA2B5] hover:shadow-lg active:translate-y-1 transition-all duration-200">
            retour à l'accueil
          </button>
        </Link>
      </div>
    </section>
  );
}






