import { Banner } from "../components";
import { Categories } from "../components/home";
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
      </div>
    </>
  );
};

export default Home;
