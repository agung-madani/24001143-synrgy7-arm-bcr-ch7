import "../../index.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import FilterCarsSection from "../../components/FilterCarsSection";

const FindCarPage = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <FilterCarsSection />
      <Footer />
    </div>
  );
};

export default FindCarPage;
