import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner01 from "../../assets/images/home01.jpeg";
import banner02 from "../../assets/images/home02.jpeg";
import banner03 from "../../assets/images/home03.jpeg";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();
  const slides = [
    {
      id: 1,
      title: "Expert Chefs for Every Occasion",
      description:
        "Professional culinary masters bringing restaurant-quality dining to your events with personalized menus and flawless execution",
      image: banner02,
    },
    {
      id: 2,
      title: "Professional Service That Impresses",
      description:
        "Trained waitstaff delivering exceptional hospitality and seamless service to make your guests feel truly special",
      image: banner01,
    },
    {
      id: 3,
      title: "Craft Cocktails & Perfect Pours",
      description:
        "Skilled bartenders creating signature drinks and providing expert beverage service for unforgettable celebrations",
      image: banner03,
    },
  ];
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-[full]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div id="hero-box-container">
                <div id="hero-banner">
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                  <button
                    onClick={() => {
                      navigate("/contact");
                    }}
                  >
                    Get A Quotation
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Hero;
