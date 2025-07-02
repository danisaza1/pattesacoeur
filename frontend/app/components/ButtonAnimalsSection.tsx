import React from "react";

const ButtonAnimalsSection: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex justify-center h-full w-full mx-auto">
      <button
        style={{ width: "25vw" }}
        className="rounded-[20px] bg-[#69A197] text-white cursor-pointer text-center font-bold transition-transform duration-200 p-2 text-base mt-6 mb-8 transform hover:scale-105 border-none"
      >
        Voir tous les animaux
      </button>
    </div>
  );
};

export default ButtonAnimalsSection;
