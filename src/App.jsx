import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Category from "./Components/Category";
import FeatureSectionFruits from "./Components/FeatureSectionFruits";
import FeatureSectionBreakFast from "./Components/FeatureSectionBreakFast";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Category />
      <FeatureSectionFruits />
      <FeatureSectionBreakFast />
    </main>
  );
};

export default App;
