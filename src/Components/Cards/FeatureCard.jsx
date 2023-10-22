import React from "react";

const FeatureCard = ({ title, icon }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-gray-300 w-[50px] h-[50px] text-accentDark text-[24px] grid place-items-center rounded-full ">
        {icon}
      </div>
      <div>
        <h3 className="text-accent text-xl font-medium">{title}</h3>
        <p className="text-gray-500 text-[14px]">Your Text</p>
      </div>
    </div>
  );
};

export default FeatureCard;
