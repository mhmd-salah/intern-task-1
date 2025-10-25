import Product from "../../shared/product/Product";
import "./newlyArrivedProducts.css";
import GridList from "../../shared/gridList/GridList";
import type { TSimpleProduct } from "../../../store/cart/cartSlice";
import Section from "../../shared/section/Section";
import Head from "../../shared/head/Head";
import { useGetProductsByCategory } from "../../../hooks/useProductsByCategory ";

const NewlyArrivedProducts = () => {
  const { data, isLoading, error } = useGetProductsByCategory("groceries", 5);

  if (isLoading) return <p className="container">Loading...</p>;
  if (error) return <p>Something went wrong </p>;
  const products = data;
  return (
    <Section className="newlyProducts" marginBlockEnd="0" paddingBlock="1rem">
      <Head title="Newly Products" />
      {/* <div className="products-list">
          {data.products.map((product: TProduct) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              img={product.thumbnail}
              price={product.price}
              category={product.category}
            />
          ))}
        </div> */}
      <GridList<TSimpleProduct>
        records={products ?? []}
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

export default NewlyArrivedProducts;
