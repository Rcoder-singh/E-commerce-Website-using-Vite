import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Category from "./Components/Category";
import FeatureSectionFruits from "./Components/FeatureSectionFruits";
import FeatureSectionBreakFast from "./Components/FeatureSectionBreakFast";
import Banner from "./Components/Banner";
import BlogSection from "./Components/BlogSection";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Category />
      <FeatureSectionFruits />
      <FeatureSectionBreakFast />
      <Banner />
      <BlogSection />
    </main>
  );
};

export default App;
