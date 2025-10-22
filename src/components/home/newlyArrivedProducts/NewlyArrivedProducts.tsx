import { useQuery } from "@tanstack/react-query";
import Heading from "../../shared/heading/Heading";
import Product from "../../shared/product/Product";
import "./newlyArrivedProducts.css";
import type { TProduct } from "../../../types/index";

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
        <div className="products-list">
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
        </div>
      </div>
    </div>
  );
};

export default NewlyArrivedProducts;
