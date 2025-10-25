import { selectTotalPrice } from "../../../store/cart/selectores/selectTotalPrice";
import { useAppSelector } from "../../../store/hooks";
import "./checkoutAside.css";

const CheckoutAside = () => {
  const totalPrice = useAppSelector(selectTotalPrice);

  const items = useAppSelector((state) => state.cart.items);
  return (
    <aside className="checkout-sidebar">
      <div className="checkout-card">
        <h3>Order Summary</h3>
        <span>Number Of Products</span>
        <span>{items.length}</span>
      </div>
      {/* <div className="summary-row">
        <span>Price</span>
        <span>EGP 356</span>
      </div> */}

      <form action="" className="checkout-form">
        <label htmlFor="discount-code">
          Enter Discount Code
          <input type="text" placeholder="" />
        </label>
        <button>Apply</button>
        <div className="summary-row-total">
          <span>Total Price</span>
          <span>{totalPrice.toFixed(2)}</span>
        </div>

        <button type="submit">Checkout </button>
      </form>
    </aside>
  );
};

export default CheckoutAside;
