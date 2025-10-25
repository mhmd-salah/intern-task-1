import Head from "../../shared/head/Head";
import Section from "../../shared/section/Section";
import GridList from "../../shared/gridList/GridList";
import type { TSimpleProduct } from "../../../store/cart/cartSlice";
import Product from "../../shared/product/Product";
import { useTranslation } from "react-i18next";
import { useGetProductsByCategory } from "../../../hooks/useProductsByCategory ";

const BestSellers = () => {
  const { t } = useTranslation();
  const { data, isLoading, isError } = useGetProductsByCategory(
    "groceries",
    10
  );

  if (isLoading) return <p>Best Sellers Products Loading . . .</p>;
  if (isError) return <p>Something went wrong</p>;

  return (
    <Section className="bestSeller" background="white" paddingBlock="3rem">
      <Head title={t("bestSellerTitle")} />
      <GridList<TSimpleProduct>
        records={data.products}
        keySelector={(p) => p.id}
        renderItem={(p) => (
          <Product
            id={p.id}
            title={p.title}
            img={p.thumbnail}
            category={p.category}
            price={p.price}
          />
        )}
      />
    </Section>
  );
};

export default BestSellers;
