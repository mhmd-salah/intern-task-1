import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { Cart, Home } from "../pages";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route element={<Home />} path="/" />
      <Route element={<Cart />} path="/cart" />
    </Route>
  )
);

const AppRouter = () => {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
  return (
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      <RouterProvider router={router} />
    </div>
  );
};

export default AppRouter;
