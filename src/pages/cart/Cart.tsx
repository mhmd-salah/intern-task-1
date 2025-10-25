import Section from "../../components/shared/section/Section";
import "./cart.css";
import { useAppSelector } from "../../store/hooks";
import { CheckoutAside, ProductCart } from "../../components/cart";
import { ScrollToTopButton } from "../../components";
import emptyImg from "../../assets/Empty-rafiki.png"


const Cart = () => {
  const { items } = useAppSelector((state) => state.cart);
  return (
    <Section className="cart">
      <ScrollToTopButton />
      <div className="section-title">Shopping Cart</div>
      {items.length ? (
        <section className="cart-items">
          <div className="products-list">
            <div className="cart-items-length">
              <h3>Shopping Cart</h3>
              <p>{items.length}</p>
            </div>

            {items.map((i) => (
              <ProductCart
                id={i.id}
                thumbnail={i.thumbnail}
                category={i.category}
                price={i.price}
                title={i.title}
                quantity={i.quantity}
              />
            ))}
          </div>
          <CheckoutAside />
        </section>
      ) : (
        <div className="empty-cart">
          <h3>Empty Cart</h3>
          <img src={emptyImg} alt="" />
        </div>
      )}
    </Section>
  );
};

export default Cart;
