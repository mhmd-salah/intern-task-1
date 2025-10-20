import "./i18n";
import i18n from "./i18n";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./routing/AppRouter";
import { Suspense } from "react";
import { I18nextProvider } from "react-i18next";
const root = document.getElementById("root");

createRoot(root!).render(
  <Suspense fallback="loading . . . ">
    <I18nextProvider i18n={i18n}>
      <AppRouter />
    </I18nextProvider>
  </Suspense>
);
