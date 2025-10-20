import { Outlet } from "react-router-dom";
import TopBar from "../components/shared/TopBar";
const MainLayout = () => {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
};

export default MainLayout;
