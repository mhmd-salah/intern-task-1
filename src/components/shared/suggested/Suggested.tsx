import { useTranslation } from "react-i18next";
import Head from "../head/Head";
import Section from "../section/Section";
import "./suggested.css";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../../api";
import Slider from "react-slick";
import Product from "../product/Product";
import type { TSimpleProduct } from "../../../store/cart/cartSlice";

const Suggested = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useQuery({
    queryKey: ["suggestedProducts"],
    queryFn: async () => {
      const res = await api.get("products/category/groceries?limit=6");
      return res?.data;
    },
  });
  const products = data?.products;
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <Section className="suggested" marginBlock="0">
      <Head title={t("suggestedTitle")} />
      {isLoading ? (
        "Products Loading.."
      ) : (
        <Slider {...settings}>
          {products.map((p: TSimpleProduct) => (
            <Product
              id={p.id}
              title={p.title}
              img={p.thumbnail}
              price={p.price}
              category={p.category}
            />
          ))}
        </Slider>
      )}
    </Section>
  );
};

export default Suggested;
