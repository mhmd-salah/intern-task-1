import { Outlet } from "react-router-dom";
import TopBar from "../components/shared/topBar/TopBar";
import { Footer, Header, Navbar } from "../components";
const MainLayout = () => {
  return (
    <>
      <div style={{ background: "#fafafa" }}>
        <TopBar />
        <Header />
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
