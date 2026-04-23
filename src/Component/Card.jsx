import React from "react";
import { IndianRupee } from "lucide-react";

const Card = ({ name, tagline, price, url }) => {
  return (
    <div className=" bg-white/80 card w-full p-4 flex flex-col justify-between  border-2 border-white/80 hover:border-black rounded-3xl ">

      <div className="w-full h-100 overflow-hidden rounded-xl">
        <img
          src={url}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-3 flex flex-col gap-1">
        <h2 className="text-lg font-semibold ">{name}</h2>
        <p className="text-sm text-black/60 ">{tagline}</p>
      </div>

      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center text-lg font-bold">
          <IndianRupee size={16} />
          {price}
        </div>
      </div>
      <div className="flex gap-2 mt-3">
        <button className="flex-1  text-[22px] font-bold py-2 bg-black text-white ">
          Buy
        </button>
        <button className="flex-1  py-2 text-[22px] font-bold bg-black text-white ">
          Add
        </button>
      </div>
    </div>
  );
};

export default Card;