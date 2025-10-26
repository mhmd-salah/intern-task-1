import Section from "../../components/shared/section/Section";
import "./productDetails.css";
import { FaHeart, FaShareAlt } from "react-icons/fa";
import { useState } from "react";
import {
  ScrollToTopButton,
  ScrollToTopWhenPathnameChange,
  Suggested,
} from "../../components";
import { useAppDispatch } from "../../store/hooks";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../api";
import { addToCart } from "../../store/cart/cartSlice";
import RatingStars from "../../components/shared/rating/RatingStars";
import type { TProduct } from "../../types/index";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState<"desc" | "eval">("desc");
  const { data } = useQuery({
    queryKey: ["product-details"],
    queryFn: async () => {
      const res = await api.get(`/products/${id}`);
      return res.data;
    },
    enabled: !!id,
  });
  if (!data) return <p>loading</p>;

  return (
    <Section className="product-details" background="#fafafa">
      <ScrollToTopButton />
      <ScrollToTopWhenPathnameChange />
      <div className="product-container">
        <div className="product-img-container">
          <img src={data.thumbnail} alt="" style={{ marginInline: "auto" }} />
        </div>
        <div className="product-info">
          <div className="product-head">
            <h3 className="title">{data.title}</h3>
            <div className="icons">
              <FaHeart />
              <FaShareAlt />
            </div>
          </div>
          <p className="price">Price {data.price} $</p>
          <div className="product-rate">
            <RatingStars rating={data.rating} />
            <span>(Product Rate {data.rating})</span>
          </div>
          <button onClick={() => dispatch(addToCart(data))}>Add to cart</button>
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
              {data.description ? (
                data.description
              ) : (
                <h3>There are no products to display</h3>
              )}
            </div>
          )}
          {activeTab === "eval" && (
            <div className={`tab eval`}>
              <div className="eval-body">
                <div className="reviews">
                  {data.reviews ? (
                    data.reviews.map((rev: TProduct) => (
                      <div className="review-item">
                        <div className="head">
                          <h4>{rev.reviewerName}</h4>
                          <RatingStars rating={rev.rating} />
                        </div>
                        <p>{rev.comment}</p>
                      </div>
                    ))
                  ) : (
                    <p>there are no reviews for this show</p>
                  )}
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
