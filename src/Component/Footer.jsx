import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="py-4 text-center text-sm text-white/50">
          <h3 className="font-semibold mb-3">Follow Us</h3>

          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition"
            >
              <FaTwitter size={18} />
            </a>
          </div>
        </div>
        <div className="py-4 text-center text-sm text-white/50">
          © 2026 LumoCandles. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
