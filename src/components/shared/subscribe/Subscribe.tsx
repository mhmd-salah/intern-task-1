import { useTranslation } from "react-i18next";
import Section from "../section/Section";
import "./Subscribe.css";
import { MdOutlineEmail } from "react-icons/md";

const Subscribe = () => {
  const { t } = useTranslation();
  return (
    <Section className="subscribe" marginBlock="0">
      <div className="description-side">
        <MdOutlineEmail />
        <div className="text">
          <h4>{t("subscribe.subscribeHead")}</h4>
          <p>{t("subscribe.subscribeParagraph")}</p>
        </div>
      </div>
      <div className="email-subscribe-side">
        <input type="email" placeholder={t("subscribe.placeholder")} />
        <button>{t("subscribe.subscribeButton")}</button>
      </div>
    </Section>
  );
};

export default Subscribe;
