import {
  increaseQuantity,
  decreaseQuantity,
  type TSimpleProduct,
  removeItem,
} from "../../../store/cart/cartSlice";
import { useAppDispatch } from "../../../store/hooks";
import "./productCart.css";
import { FaTrash } from "react-icons/fa";

type IProps = TSimpleProduct & {
  quantity: number;
};

const ProductCart = ({
  id,
  title,
  price,
  thumbnail,
  category,
  quantity,
}: IProps) => {
  const dispatch = useAppDispatch();

  const deleteHandler = (id: number) => {
    dispatch(removeItem(id));
  };
  const increaseQuantityHandler = (id: number) => {
    dispatch(increaseQuantity(id));
  };
  const decreaseQuantityHandler = (id: number) => {
    dispatch(decreaseQuantity(id));
  };
  const totalPriceForOneProduct = price * quantity;
  return (
    <article className="product-cart">
      <img src={thumbnail} alt="" className="item-thumb" />
      <div className="item-body">
        <div className="cart-item-head">
          <h3 className="item-title">{title}</h3>
          <button onClick={() => deleteHandler(id)} className="delete-btn">
            <FaTrash />
          </button>
        </div>
        <p className="item-meta">Category: {category}</p>
        <p className="price">{price.toFixed(2)} $</p>
        <div className="item-actions">
          <div>
            <span>Quantity</span>
            <button
              className="btn small"
              onClick={() => decreaseQuantityHandler(id)}
            >
              -
            </button>
            <span className="qty">{quantity}</span>
            <button
              className="btn small"
              onClick={() => increaseQuantityHandler(id)}
            >
              +
            </button>
          </div>
          <span className="total-price">
            Total {totalPriceForOneProduct.toFixed(2)}
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProductCart;
