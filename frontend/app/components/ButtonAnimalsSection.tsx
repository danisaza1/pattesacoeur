import React from "react";

const ButtonAnimalsSection: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex justify-center h-full w-full mx-auto">
      <button
        style={{ width: "25vw" }}
            className="px-6 py-2 text-lg font-bold text-white bg-[#324960] rounded-lg shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:bg-[#4682a9] hover:shadow-[0_6px_12px_rgba(6,182,212,0.4)] active:translate-y-1 active:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] transition-all duration-200 ease-in-out mt-4"
      >
        Voir tous les animaux
      </button>
    </div>
  );
};

export default ButtonAnimalsSection;
