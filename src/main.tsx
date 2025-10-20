import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./routing/AppRouter";
import "./i18n"
const root = document.getElementById("root");

createRoot(root!).render(<AppRouter />);
