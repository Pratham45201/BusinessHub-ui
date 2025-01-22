import Companies from "../Components/landingPage/Companies";
import Header from "../Components/landingPage/Header";
import HeroSection from "../Components/landingPage/HeroSection";
import { Box } from "@mui/material";
import ProcessSection from "../Components/landingPage/ProcessSection";
import AfterProcessSection from "../Components/landingPage/AfterProcessSection";
import LawSection from "../Components/landingPage/LawSection";
import Footer from "../Components/landingPage/Footer";

const LandingPage = () => {
  return (
    <Box>
      <>
        <Header />
        <HeroSection />
        <Companies />
        <ProcessSection />
        <AfterProcessSection />
        <LawSection />
        <Footer />
      </>
    </Box>
  );
};

export default LandingPage;
