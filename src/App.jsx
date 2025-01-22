import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./Components/landingPage/Header";
import HeroSection from "./Components/landingPage/HeroSection";
import ThemeProvider from "./theme";
import Routes from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
