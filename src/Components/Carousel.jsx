// Carousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img1 from "../assets/cccadcdf-c2b7-403a-9fbe-34c62edc24ea.jpg"
import img2 from "../assets/7900709.jpg"


import img3 from "../assets/Gemini_Generated_Image_vgayhvvgayhvvgay.png"

import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css/navigation";
function Carousel() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1600px",
        height: "400px",
        margin: "50px auto",
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Custom styles for Swiper navigation buttons */}
      <style>
        {`
          .swiper-button-next, .swiper-button-prev {
            background: rgba(30, 41, 59, 0.7);
            border-radius: 50%;
            width: 48px;
            height: 48px;
            color: #fff;
            box-shadow: 0 2px 8px rgba(0,0,0,0.15);
            transition: background 0.2s, transform 0.2s;
            top: 50%;
            transform: translateY(-50%);
          }
          .swiper-button-next:hover, .swiper-button-prev:hover {
            background: #2563eb;
            color: #fff;
            transform: translateY(-50%) scale(1.08);
          }
          .swiper-button-next::after, .swiper-button-prev::after {
            font-size: 1.5rem;
            font-weight: bold;
          }
        `}
      </style>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        style={{ width: "100%", height: "100%" }}
      >
        <SwiperSlide>
          <img
            src={img1}
            alt="Slide 1"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img2}
            alt="Slide 2"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img3}
            alt="Slide 3"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
