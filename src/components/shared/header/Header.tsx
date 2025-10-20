import "./header.css";
import logo from "../../../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { useTranslation } from "react-i18next";
const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="search">
          <button className="catBtn">{t("searchBtn")}</button>
          <input type="text" placeholder={t("placeholderSearch")} />
          <button className="searchIcon">
            <CiSearch className="icon" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
