import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-dark-700">
      
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-red-800 rounded-xl flex items-center justify-center text-white font-bold text-sm">
            L
          </div>
          <span className="text-white font-bold text-lg tracking-tight">
            LumoCandles
          </span>
        </div>

      
        <div className="hidden md:flex items-center gap-6 text-sm text-white/70">
          <a href="#" className="hover:bg-white hover:text-black px-4 py-2 rounded-3xl transition">Home</a>
          <a href="#" className="hover:bg-white hover:text-black px-4 py-2 rounded-3xl transition">Shop</a>
          <a href="#" className="hover:bg-white hover:text-black px-4 py-2 rounded-3xl transition">About</a>
        </div>

        
        <div className="flex items-center gap-2">

          
          <div className="hidden md:flex gap-2">
            <button className=" text-white/70 hover:bg-white hover:text-black px-4 py-2 rounded-3xl">
              Signup
            </button>
            <button className=" text-white/70 hover:bg-white hover:text-black px-4 py-2 rounded-3xl">
              Login
            </button>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
          
          <button className=" text-white/70 p-2 rounded-full hover:bg-white hover:text-black transition">
            <ShoppingCart size={28} stroke="currentColor" strokeWidth={2.25} />
          </button>


        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-black border-t border-dark-700">
          <div className="flex justify-between gap-2 pt-2">
          <a className="block text-white/80 hover:text-black hover:bg-white px-4 py-2 rounded-xl transition">
            Home
          </a>
          <a className="block text-white/80 hover:text-black hover:bg-white px-4 py-2 rounded-xl transition">
            Shop
          </a>
          <a className="block text-white/80 hover:text-black hover:bg-white px-4 py-2 rounded-xl transition">
            About
          </a>
          </div>
          <div className="flex gap-2 pt-2">
            <button className="flex-1 text-white/70 hover:bg-white hover:text-black py-2 rounded-xl">
              Signup
            </button>
            <button className="flex-1 text-white/70 hover:bg-white hover:text-black py-2 rounded-xl">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}