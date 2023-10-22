import React from "react";
import FeatureCard from "./Cards/FeatureCard";
import { data } from "../Mock/FeatureData";

const FeatureSection = () => {
  return (
    <div className="container pt-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((el) => (
          <FeatureCard key={el.title} title={el.title} icon={el.icon} />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
