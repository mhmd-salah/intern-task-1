import { Outlet } from "react-router-dom";
import TopBar from "../components/shared/topBar/TopBar";
import { Footer, Header, Navbar } from "../components";
const MainLayout = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
