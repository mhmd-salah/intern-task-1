import {
  heroImg1,
  heroImg2,
  heroImg3,
  heroImg4,
  heroImg5,
} from "../../../assets";
import "./heroSection.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
  };
  return (
    <div className="hero">
      <div className="container">
        <div className="carousel">
          <Slider {...settings}>
            {[heroImg3, heroImg4, heroImg5].map((image, index) => (
              <div key={index} className="slide">
                <img src={image} alt={`Slide ${index}`} className="carousel-img" />
              </div>
            ))}
          </Slider>
        </div>
        <div className="left-side">
          <img src={heroImg1} alt="" />
          <img src={heroImg2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
