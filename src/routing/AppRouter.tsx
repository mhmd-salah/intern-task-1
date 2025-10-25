import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { Cart, Home, ProductDetails } from "../pages";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import NotFound from "../pages/notfound/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route element={<Home />} path="/" />
      <Route element={<ProductDetails />} path="/product/:id" />
      <Route element={<Cart />} path="/cart" />
      <Route element={<NotFound />} path="/*" />
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
