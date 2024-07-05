import React from "react";
import "../../index.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import OurServiceSection from "../../components/OurServiceSection";
import WhyUsSection from "../../components/WhyUsSection";
import TestimonialSection from "../../components/TestimonialSection";
import SewaMobilSection from "../../components/SewaMobilSection";
import FAQSection from "../../components/FAQSection";

const LandingPage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <main>
        <OurServiceSection />
        <WhyUsSection />
        <TestimonialSection />
        <SewaMobilSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
