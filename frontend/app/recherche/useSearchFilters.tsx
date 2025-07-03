import { useState } from "react";

export type AnimalType = "Chien" | "Lapin" | "Chat" | "Cochon d'inde";

export const animalOptions: AnimalType[] = ["Chien", "Lapin", "Chat", "Cochon d'inde"];

export function useSearchFilters() {
  const [animal, setAnimal] = useState<AnimalType>("Chien");
  const [city, setCity] = useState<string>("Votre ville");

  return { animal, setAnimal, city, setCity };
}
