import React from 'react'

const Brandmss = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
        <div>
            <img src="img1.jpg" alt="img" className="absolute top-0 left-0 w-full h-full object-cover"/>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-2xl m-1 md:m-50 md:text-4xl font-bold p-5 rounded-3xl bg-black/50 ">
          We make candles for the in-between moments — the Sunday morning before anyone else wakes up, the bath you finally drew, the evening you decided to just stay home.
Hand-poured. Natural. Made with care.
        </h1>
      </div>
    </div>
  )
}

export default Brandmss