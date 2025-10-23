import { Outlet } from "react-router-dom";
import TopBar from "../components/shared/topBar/TopBar";
import { Footer, Header, Navbar, Subscribe } from "../components";
const MainLayout = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <Outlet />
      <Subscribe />
      <Footer />
    </>
  );
};

export default MainLayout;
