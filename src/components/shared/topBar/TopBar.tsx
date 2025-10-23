import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./topBar.css";

const TopBar = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="top-bar ">
      <div className="container">
        <div className="top-bar-links">
          <NavLink to="/">{t("privacyPolicy")}</NavLink>
          <NavLink to="/">{t("returnPolicy")}</NavLink>
          <NavLink to="/">{t("contactUs")}</NavLink>
        </div>

        <div className="top-bar-free-shipping">⚡ {t("freeShipping")}</div>

        <div className="top-bar-language">
          <select
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="ar">العربية</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
