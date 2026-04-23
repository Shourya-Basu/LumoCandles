import React from "react";
import data from "../assets/shortmessange.json"
const Shortmss = () => {
  return (
        <div className="flex flex-col gap-8 px-4 md:px-10 py-6">

      {data.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-6 rounded-3xl p-6 bg-white/90 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full md:w-[300px] h-[220px] overflow-hidden rounded-3xl border border-black/20">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
            <p className="text-sm text-black/80 leading-relaxed">
              {item.desc}
            </p>
          </div>

        </div>
      ))}

    </div>
  );
};

export default Shortmss;
