import React from "react";
import data from "../assets/products.json";
import Card from "./Card";

const Product = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 rounded-3xl bg-white/90 ">
        {data.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            tagline={item.tagline}
            price={item.price}
            url={item.image_url}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
