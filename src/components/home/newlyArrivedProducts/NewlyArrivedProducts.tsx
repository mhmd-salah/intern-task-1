import { useQuery } from "@tanstack/react-query";
import Heading from "../../shared/heading/Heading";
import Product from "../../shared/product/Product";
import "./newlyArrivedProducts.css";
import GridList from "../../shared/gridList/GridList";
import type { TSimpleProduct } from "../../../store/cart/cartSlice";

const NewlyArrivedProducts = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://dummyjson.com/products?limit=5");
      return res.json();
    },
  });

  if (isLoading) return <p className="container">Loading...</p>;
  if (error) return <p>Something went wrong </p>;

  return (
    <div className="newlyProducts">
      <div className="container">
        <div className="head">
          <Heading>Newly Arrived Products</Heading>
          <a href="/">more</a>
        </div>
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
      </div>
    </div>
  );
};

export default NewlyArrivedProducts;
