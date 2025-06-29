
import { animals } from "../data/animals";
import { useState, useEffect } from "react";
import Card from "./Card";


export default function Grid() {
  return (
    <div className="container mx-auto p-4 bg-zinc-50 rounded">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 auto-rows-[150px] gap-2">
      {animals.map((animal) => (
        <div
          key={animal.id}
          className={`
    ${animal.colSpan === 2 ? "col-span-2" : ""}
    ${animal.colSpan === 3 ? "col-span-3" : ""}
    ${animal.rowSpan === 2 ? "row-span-2" : ""}
    ${animal.rowSpan === 3 ? "row-span-3" : ""}
  `}
        >
          <Card image={animal.image} name={animal.name} />
        </div>
      ))}
      </div>
    </div>
  );
}
