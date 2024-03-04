import React from "react";
import { useRouter } from "next/navigation";

const ChallengesGrid = () => {
  const router = useRouter();
  const URL = "challenges/";
  const items = [
    "addition",
    "subtraction",
    "multiplication",
    "division",
    "modulus",
  ];

  const handleClick = (destination: string) => {
    router.push(destination);
  };

  // Custom style mappings for background colors
  const bgColorClasses = [
    "bg-[#91b89e]",
    "bg-[#91a0b8]",
    "bg-[#ebe4de]",
    "bg-[#ecd768]",
    "bg-[#ffb885]",
    "bg-[#b89191]",
  ];

  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-2 w-2/5 mt-[30px] ml-2">
      {items.map((item, index) => (
        <div
          key={item}
          className={`flex items-center justify-center font-semibold cursor-pointer  transition-all duration-300 relative ${
            bgColorClasses[index % bgColorClasses.length]
          } hover:border-transparent hover:bg-opacity-50`}
          onClick={() => handleClick(`${URL}${item}`)}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
          <div className="absolute  transition-all duration-300 hover:border-transparent"></div>
        </div>
      ))}
      <div
        className={`flex items-center justify-center font-semibold cursor-pointer  transition-all duration-300 relative bg-[#b89191] hover:border-transparent hover:bg-opacity-50`}
        onClick={() => handleClick(`${URL}order-of-operations`)}
      >
        Order Of Operations
        <div className="absolute  transition-all duration-300 hover:border-transparent"></div>
      </div>
    </div>
  );
};

export default ChallengesGrid;
