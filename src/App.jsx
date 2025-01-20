import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
