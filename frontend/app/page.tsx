import { Component } from "react";
// import Image from "next/image";
import Grid from "./components/Grid";


export default function Home() {
  return (
    <main className="p-8 flex flex-col items-center w-full">
      <h1 className="text-3xl font-playfair font-bold mb-8">Nos animaux à adopter</h1>
        <div className="container mx-auto p-4 bg-zinc-50 rounded flex flex-col items-center ">
      <Grid />
  <button
  className="w-32 relative inline-flex items-center justify-center px-6 py-2 text-lg font-bold text-white bg-cyan-600 rounded-lg shadow-[0_4px_0_0_rgba(0,0,0,0.2)] active:translate-y-1 active:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] transition"
>Voir +
</button>
          </div>
    </main>
  );
}

