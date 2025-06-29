// import React from "react";

export type CardProps = {
  image: string;
  name?: string;
};

export default function Card({ image, name }: CardProps) {
  return (
    <div className=" h-full relative rounded shadow overflow-hidden shadow transition transform hover:scale-105 group">
      <img
        src={image}
        alt={name || "Image"}
        className="w-full h-full object-cover"
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
