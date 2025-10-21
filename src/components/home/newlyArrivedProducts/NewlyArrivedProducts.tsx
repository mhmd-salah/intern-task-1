import { useQuery } from "@tanstack/react-query";
import Heading from "../../shared/heading/Heading";
import Product from "../../shared/product/Product";
import "./newlyArrivedProducts.css";
interface TProduct {
  thumbnail: string;
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
}
const NewlyArrivedProducts = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://dummyjson.com/products?limit=5");
      return res.json();
    },
  });

  if (isLoading) return <p>Loading...</p>;
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
              title={product.title}
              img={product.thumbnail}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewlyArrivedProducts;
