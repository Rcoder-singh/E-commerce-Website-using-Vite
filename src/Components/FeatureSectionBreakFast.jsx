import React from "react";
import ProductCard from "./ProductCard";
const data = [
    {
      id: 0,
      name: "Fresh Tomato",
      price: "$50",
      image: "product__5.webp",
    },
    {
      id: 1,
      name: "Dried Mango",
      price: "$20",
      image: "product__2.webp",
    },
    {
      id: 2,
      name: "Banana Bits",
      price: "$30",
      image: "product__3.webp",
    },
    {
      id: 3,
      name: "Crunchy Chips",
      price: "$10",
      image: "product__4.webp",
    },
  ];

const FeatureSectionBreakFast = () => {
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">Breakfast & Dairy</h3>
          <p className="text-gray-600 mt-2">
            Buy best quality breakfast online from big-basket store near you.
          </p>
        </div>

        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="feature_btn">Eggs & Dairy</button>
          <button className="text-gray-600 hover:text-accent">Pizza</button>
          <button className="text-gray-600 hover:text-accent">Snacks</button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div>
          <img
            className="w-full h-full object-cover"
            src="feature__2.webp"
            alt="banner"
          />
        </div>

        {data.map((el) => (
          <ProductCard
            key={el.id}
            image={el.image}
            name={el.name}
            price={el.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSectionBreakFast;
