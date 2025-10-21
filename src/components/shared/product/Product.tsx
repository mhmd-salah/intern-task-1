import { FaHeart } from "react-icons/fa";
import "./product.css";

const Product = ({
  img,
  title,
  price,
}: {
  img: string;
  title: string;
  price: number;
}) => {
  return (
    <div className="product-card">
      <div className="add-fiv">
        <FaHeart />
      </div>
      <img src={img} alt="" />
      <div className="info">
        <h3 className="title">{title}</h3>
        <p className="price">{price}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
