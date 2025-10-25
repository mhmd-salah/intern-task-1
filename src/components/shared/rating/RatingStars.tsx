import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

type RatingProps = {
  rating: number; 
};

const RatingStars = ({ rating }: RatingProps) => {
  return (
    <div style={{ display: "flex", gap: "4px", color: "#ffc107" }}>
      {[...Array(5)].map((_, i) => {
        const starValue = i + 1;
        return (
          <span key={i}>
            {rating >= starValue ? (
              <FaStar />
            ) : rating >= starValue - 0.5 ? (
              <FaStarHalfAlt />
            ) : (
              <FaRegStar />
            )}
          </span>
        );
      })}
    </div>
  );
};

export default RatingStars;
