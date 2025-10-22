import { Banner } from "../components";
import { BestSellers, Categories } from "../components/home";
import HeroSection from "../components/home/HeroSection/HeroSection";
import NewlyArrivedProducts from "../components/home/newlyArrivedProducts/NewlyArrivedProducts";

const Home = () => {
  return (
    <>
      <div style={{ background: "#fafafa" }}>
        <HeroSection />
        <Categories />
        <NewlyArrivedProducts />
        <Banner />
        <BestSellers/>
      </div>
    </>
  );
};

export default Home;
