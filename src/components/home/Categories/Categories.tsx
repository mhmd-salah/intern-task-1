import { useTranslation } from "react-i18next";
import Heading from "../../shared/heading/Heading";
import "./categories.css";
import {
  cat1,
  cat2,
  cat3,
  cat4,
  cat5,
  cat6,
  cat7,
  cat8,
  cat9,
} from "../../../assets/categories";
import Category from "./Category/Category";

const categoriesData = [
  { title: "yamishRamadan", imgSrc: cat1 },
  { title: "coffee", imgSrc: cat2 },
  { title: "spices", imgSrc: cat3 },
  { title: "oils", imgSrc: cat4 },
  { title: "herbs", imgSrc: cat5 },
  { title: "nuts", imgSrc: cat6 },
  { title: "nutsButter", imgSrc: cat7 },
  { title: "seet&cerals", imgSrc: cat8 },
  { title: "flours", imgSrc: cat9 },
];

const Categories = () => {
  const { t } = useTranslation();
  return (
    <div className="categories">
      <div className="container">
        <Heading>{t("categories")}</Heading>
        <div className="categories-list">
          {categoriesData.map((cat) => (
            <Category
              title={t(`categoriesList.${cat.title}`)}
              imgSrc={cat.imgSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
