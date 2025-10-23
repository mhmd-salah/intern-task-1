import { Banner } from "../components";
import { BestSellers, Categories } from "../components/home";
import HeroSection from "../components/home/HeroSection/HeroSection";
import NewlyArrivedProducts from "../components/home/newlyArrivedProducts/NewlyArrivedProducts";
import Suggested from "../components/shared/suggested/Suggested";

const Home = () => {
  return (
    <>
      <div style={{ background: "#fafafa" }}>
        <HeroSection />
        <Categories />
        <NewlyArrivedProducts />
        <Banner />
        <BestSellers />
        <Suggested />
      </div>
    </>
  );
};

export default Home;
