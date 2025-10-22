import { useTranslation } from "react-i18next";
import "./banner.css";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-side">
          <div className="banner-img">
            <div className="text-banner">
              <p>{t("banner.imgText")}</p>
              <button>{t("banner.textButton")}</button>
            </div>
          </div>
        </div>
        <div className="left-side">
          <h3>{t("bannerLeftSide.title")}</h3>
          <p>{t("bannerLeftSide.paragraph")}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
