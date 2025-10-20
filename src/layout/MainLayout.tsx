import { Outlet } from "react-router-dom";
import TopBar from "../components/shared/topBar/TopBar";
import { Header } from "../components";
const MainLayout = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;
