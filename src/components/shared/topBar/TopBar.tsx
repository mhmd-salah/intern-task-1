import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./style.css"; 

const TopBar = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="topBar">
      <div className="topBar-links">
        <NavLink to="/">{t("privacyPolicy")}</NavLink>
        <NavLink to="/">{t("returnPolicy")}</NavLink>
        <NavLink to="/">{t("contactUs")}</NavLink>
      </div>

      <div className="topBar-free-shipping">⚡ {t("freeShipping")}</div>

      <div className="topBar-language">
        <select
          value={i18n.language}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="ar">العربية</option>
        </select>
      </div>
    </div>
  );
};

export default TopBar;
