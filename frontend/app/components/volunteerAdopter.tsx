"use client";
import { useState } from "react";
import Link from "next/link";

export default function VolunteerAdopter() {
  const [door, openDoor] = useState(false);
  return (
    <section className=" p-20 bg-blue-100 flex justify-center">
      <div className="p-40  bg-blue-200 width: 1rem rounded-3xl  ">
        <div className="  width: 1rem  flex  flex-col md:flex-row items-center justify-center gap-32  w-1/2  gap-6 md:gap-8 w-full max-w-4xl mx-auto">
          
          
          <Link href="/comptevolunteer">
          <button className="px-22 py-6 text-lg font-bold text-white bg-[#324960] rounded-lg shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:bg-[#6da2b5] hover:shadow-[0_6px_12px_rgba(6,182,212,0.4)] active:translate-y-1 active:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] transition-all duration-200 ease-in-out whitespace-nowrap cursor-pointer">
            Benevole
          </button>
          </Link>


          <Link href="/adopting">
            <button className=" px-22 py-6 text-lg font-bold text-white bg-[#324960] rounded-lg shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:bg-[#6da2b5] hover:shadow-[0_6px_12px_rgba(6,182,212,0.4)] active:translate-y-1 active:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] transition-all duration-200 ease-in-out whitespace-nowrap cursor-pointer">
              Adoptant
            </button>
          </Link>
        </div>
        <div
          onClick={() => openDoor(!door)}
          className="  mt-10 text-center text-2xl cursor-pointer"
        >
          Je n'ai pas encore de compte?
        </div>
        {door && (
          <div className="  mt-6 text-center text-2xl flex flex-row items-center justify-center gap-32">
            <Link href="/benevole">
              <div className="cursor-pointer">Bénévole</div>
            </Link>
            <Link href="/adopting">
              <div className="cursor-pointer">Adoptant</div>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
