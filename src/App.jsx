import React from "react";
import Navbar from "./Component/Navbar";
import Heading from "./Component/Heading";
import Product from "./Component/Product";
import Brandmss from "./Component/Brandmss";
import Shortmss from "./Component/Shortmss";
import NewsLetter from "./Component/NewsLetter";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <div className="bg-black/95">
      <div className="min-h-screen flex flex-col">
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        <div>
          <Heading />
        </div>
        <div className="m-10">
          <Product />
        </div>
        <div>
          <Brandmss />
        </div>
        <div className="m-10">
          <Shortmss />
        </div>
        <div className="my-10">
          <NewsLetter />
        </div>
        <div className="my-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
