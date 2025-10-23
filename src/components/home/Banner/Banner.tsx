import { useTranslation } from "react-i18next";
import "./banner.css";
import Section from "../../shared/section/Section";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <Section className="banner">
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
    </Section>
  );
};

export default Banner;
