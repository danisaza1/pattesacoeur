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
  image: "/data/simba_maine_coon.webp",
  rowSpan: 2,
  colSpan: 2
},
  {
    id: 2,
    name: "Coco",
    image: "/data/coco_cochon_dinde.webp"

  },
  {
    id: 10,
    name: "Snow",
    image: "/data/snow_husky.webp"

  },
   {
    id: 6,
    name: "Oscar",
    image: "/data/oscar_teckel.webp",
     colSpan: 2, 
  },

   {
    id: 7,
    name: "Rocky",
    image: "/data/rocky_border_collie.webp",
    rowSpan: 2
  },
  {
    id: 3,
    name: "Milo",
    image: "/data/milo_siamois.webp"
    
  },
  
  {
    id: 4,
    name: "Bella",
    image: "/data/bella_golden_retriever.webp",
 rowSpan: 2
  },

  {
    id: 5,
    name: "Luna",
    image: "/data/luna_lapin_nain.webp"
  },
 
  {
    id: 8,
    name: "Max",
    image: "/data/max_berger_allemand.webp"
  },
  {
    id: 9,
    name: "Nala",
    image: "/data/nala_bengal.webp",
   
  },
  
];
