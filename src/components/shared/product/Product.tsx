import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";

import "./product.css";
import type { AppDispatch } from "../../../store";
import { addToCart } from "../../../store/cart/cartSlice";
import { Link } from "react-router-dom";

const Product = (product: {
  id: number;
  img: string;
  title: string;
  price: number;
  category: string;
}) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Link to={`/product/${product.id}`}>
      <div className="product-card">
        <div className="add-fiv">
          <FaHeart />
        </div>
        <img src={product.img} alt="" />
        <div className="info">
          <h3 className="title">{product.title}</h3>
          <p className="price">{product.price} $</p>
          <button
            onClick={() =>
              dispatch(
                addToCart({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  thumbnail: product.img,
                  category: product.category,
                })
              )
            }
          >
            Add To Cart - {product.id}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Product;
