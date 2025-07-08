// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";

// type Adopter = {
//   firstname: string;
//   lastname: string;
//   email: string;
//   location: string;
// };

// type Animal = {
//   id: number;
//   name: string;
//   species: string;
//   imageUrl: string;
// };

// type Rencontre = {
//   id: number;
//   date: string;
//   animalName: string;
// };

// export default function AdoptantDashboard() {
//   const [adopter, setAdopter] = useState<Adopter | null>(null);
//   const [favorites, setFavorites] = useState<Animal[]>([]);
//   const [rencontres, setRencontres] = useState<Rencontre[]>([]);

//   useEffect(() => {
//     // TODO : Remplace les endpoints par tes vraies routes backend
//     const fetchData = async () => {
//       const adopterRes = await fetch("http://localhost:8000/api/adoptant/me");
//       const favsRes = await fetch("http://localhost:8000/api/adoptant/favorites");
//       const rencontRes = await fetch("http://localhost:8000/api/adoptant/rencontres");

//       const adopterData = await adopterRes.json();
//       const favsData = await favsRes.json();
//       const rencontresData = await rencontRes.json();

//       setAdopter(adopterData);
//       setFavorites(favsData);
//       setRencontres(rencontresData);
//     };

//     fetchData();
//   }, []);

//   if (!adopter) {
//     return <div className="p-10 text-center">Chargement du tableau de bord...</div>;
//   }

//   return (
//     <div className="p-10 bg-gray-100 min-h-screen">
//       <div className="max-w-5xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6">Bonjour, {adopter.firstname} 👋</h1>

//         {/* Infos personnelles */}
//         <section className="bg-white rounded-xl shadow-md p-6 mb-8">
//           <h2 className="text-xl font-semibold mb-2">Mes informations</h2>
//           <p>📍 Adresse : {adopter.location}</p>
//           <p>📧 Email : {adopter.email}</p>
//           <div className="mt-4">
//             <Link
//               href="/adoptant/edit-profile"
//               className="text-blue-600 underline hover:text-blue-800"
//             >
//               Modifier mes informations
//             </Link>
//           </div>
//         </section>

//         {/* Rencontres */}
//         <section className="bg-white rounded-xl shadow-md p-6 mb-8">
//           <h2 className="text-xl font-semibold mb-4">Mes rencontres passées</h2>
//           {rencontres.length === 0 ? (
//             <p>Aucune rencontre pour le moment.</p>
//           ) : (
//             <ul className="space-y-2">
//               {rencontres.map((r) => (
//                 <li key={r.id} className="border p-4 rounded-lg">
//                   🐾 {r.animalName} — 📅 {new Date(r.date).toLocaleDateString()}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </section>

//         {/* Favoris */}
//         <section className="bg-white rounded-xl shadow-md p-6">
//           <h2 className="text-xl font-semibold mb-4">Mes animaux favoris ❤️</h2>
//           {favorites.length === 0 ? (
//             <p>Vous n'avez pas encore ajouté d'animaux à vos favoris.</p>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//               {favorites.map((animal) => (
//                 <div
//                   key={animal.id}
//                   className="border rounded-lg overflow-hidden shadow hover:shadow-md transition"
//                 >
//                   <img
//                     src={animal.imageUrl}
//                     alt={animal.name}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="p-4">
//                     <h3 className="text-lg font-semibold">{animal.name}</h3>
//                     <p className="text-sm text-gray-600">{animal.species}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </section>
//       </div>
//     </div>
//   );
// }
