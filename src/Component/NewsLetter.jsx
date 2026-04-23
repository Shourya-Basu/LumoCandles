import React from "react";

const NewsLetter = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/V2.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <div>
          <h1 className="text-4xl bg-black/70 py-5 px-10 m-5 rounded-3xl md:text-6xl font-bold">
            Join our Newsletter
          </h1>
        </div>
        <div className="bg-amber-50/90 rounded-3xl my-10 p-3 flex items-center gap-3 max-w-xl mx-auto px-20 shadow-md">
          <input
            type="email"
            placeholder="example@mail.com"
            className="flex-1 text-black text-base font-bold md:text-lg px-4 py-3 rounded-2xl outline-none"
          />

          <button className="bg-black text-white px-6 py-3 rounded-2xl font-semibold hover:bg-gray-800 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
