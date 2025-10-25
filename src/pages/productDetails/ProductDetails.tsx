import Section from "../../components/shared/section/Section";
import "./productDetails.css";
import { RiStarSFill } from "react-icons/ri";
import productImg from "../../assets/products/prod1.jpg";
import { FaHeart, FaShareAlt } from "react-icons/fa";
import { useState } from "react";
import { ScrollToTopButton, Suggested } from "../../components";
import { useAppDispatch } from "../../store/hooks";

const ProductDetails = () => {
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState<"desc" | "eval">("desc");
  return (
    <Section className="product-details" background="#fafafa">
      <ScrollToTopButton />
      <div className="product-container">
        <div className="product-img-container">
          <img src={productImg} alt="" />
        </div>
        <div className="product-info">
          <div className="product-head">
            <h3 className="title">dark raw cocoa 250 gm</h3>
            <div className="icons">
              <FaHeart />
              <FaShareAlt />
            </div>
          </div>
          <p className="price">Price 323 $</p>
          <div className="product-rate">
            <div className="icons">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
            </div>
            <span>(Product Rate 3.5)</span>
          </div>
          <button>Add to cart</button>
        </div>
      </div>

      <div className="tab">
        <div className="tab-head">
          <button
            onClick={() => setActiveTab("desc")}
            className={`${activeTab == "desc" && "active"}`}
          >
            description
          </button>
          <button
            onClick={() => setActiveTab("eval")}
            className={`${activeTab == "eval" && "active"}`}
          >
            Evaluation
          </button>
        </div>
        <div className="tab-body">
          {activeTab == "desc" && (
            <div className={`tab desc `}>
              <h3>There are no products to display</h3>
            </div>
          )}
          {activeTab === "eval" && (
            <div className={`tab eval`}>
              <div className="eval-body">
                <div className="reviews">
                  <p>there are no reviews for this show</p>
                </div>
                <div className="form-side">
                  <p>Add Your Reviews</p>
                  <form>
                    <textarea name="reviews" id=""></textarea>
                    <button>Send</button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Suggested />
    </Section>
  );
};

export default ProductDetails;
