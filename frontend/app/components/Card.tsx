// import React from "react";
import Image from 'next/image';

export type CardProps = {
  image: string;
  name?: string;
};

export default function Card({ image, name }: CardProps) {
  return (
    <div className=" h-full relative rounded shadow overflow-hidden transition transform hover:scale-105 group">
    <Image
  src={image}
  alt={name || "Image"}
  fill
  sizes="(max-width: 768px) 100vw, 25vw"
  priority={false}
  className="object-cover"
/>
  
 {/* OVERLAY */}
     {name && (
        <div className="absolute bottom-0 left-0 w-full bg-black/20 text-white p-1 opacity-0 group-hover:opacity-100 transition">
          <h4 className="text-xl font-bold">{name}</h4>
        </div>
      )}
    </div>
  );
}

