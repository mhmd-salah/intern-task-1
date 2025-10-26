import { useTranslation } from "react-i18next";
import Head from "../head/Head";
import Section from "../section/Section";
import "./suggested.css";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../../api";
import Slider from "react-slick";
import Product from "../product/Product";
import type { TSimpleProduct } from "../../../store/cart/cartSlice";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Suggested = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useQuery({
    queryKey: ["suggestedProducts"],
    queryFn: async () => {
      const res = await api.get("products/category/groceries?limit=6");
      return res?.data;
    },
  });

  const products = data?.products ?? [];
  // const settings = {
  //   dots: false,
  //   adaptiveHeight: true,
  //   infinite: true,
  //   speed: 800,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   arrows: false,
  //   pauseOnHover: true,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <Section className="suggested">
      <Head title={t("suggestedTitle")} />
      {isLoading ? (
        "Products Loading.."
      ) : (
        // <Slider {...settings}>

        //   {products.map((p: TSimpleProduct) => (
        //     <Product
        //       id={p.id}
        //       title={p.title}
        //       img={p.thumbnail}
        //       price={p.price}
        //       category={p.category}
        //     />
        //   ))}
        // </Slider>

        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          breakpoints={{
            1024: { slidesPerView: 5 },
            768: { slidesPerView: 3 },
            480: { slidesPerView: 1 },
          }}
          autoplay={{ delay: 3000 }}
        >
          {products.map((p: TSimpleProduct) => (
            <SwiperSlide key={p.id}>
              <Product
                id={p.id}
                title={p.title}
                img={p.thumbnail}
                price={p.price}
                category={p.category}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Section>
  );
};

export default Suggested;
