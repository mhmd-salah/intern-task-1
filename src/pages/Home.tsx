import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="text-lg">{t("title")}</h1>
      <p>{t("description")}</p>
    </>
  );
};

export default Home;
