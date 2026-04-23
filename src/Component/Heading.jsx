import React from "react";

const Heading = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/v1.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Light changes everything.
        </h1>
        <h1 className="mt-4 text-lg md:text-xl text-white/80">
          Premium candles for every mood
        </h1>
      </div>

    </div>
  );
};

export default Heading;
