export type Animal = {
  id: number;
  name: string;
  image: string;
  colSpan?: number;
  rowSpan?: number;
};

export const animals: Animal[] = [
  {
    id: 1,
  name: "Simba",
  image: "/images/simba_maine_coon.webp",
  rowSpan: 2,
  colSpan: 2
},
  {
    id: 2,
    name: "Coco",
    image: "/images/coco_cochon_dinde.webp"

  },
  {
    id: 10,
    name: "Snow",
    image: "/images/snow_husky.webp"

  },
   {
    id: 6,
    name: "Oscar",
    image: "/images/oscar_teckel.webp",
     colSpan: 2, 
  },

   {
    id: 7,
    name: "Rocky",
    image: "/images/rocky_border_collie.webp",
    rowSpan: 2
  },
  {
    id: 3,
    name: "Milo",
    image: "/images/milo_siamois.webp"
    
  },
  
  {
    id: 4,
    name: "Bella",
    image: "/images/bella_golden_retriever.webp",
 rowSpan: 2
  },

  {
    id: 5,
    name: "Luna",
    image: "/images/luna_lapin_nain.webp"
  },
 
  {
    id: 8,
    name: "Max",
    image: "/images/max_berger_allemand.webp"
  },
  {
    id: 9,
    name: "Nala",
    image: "/images/nala_bengal.webp",
   
  },
  
];
