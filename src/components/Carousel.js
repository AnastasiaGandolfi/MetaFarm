// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";

export function Carousel({elements, display}) {
  return (
    <>
      <Swiper
        slidesPerView={display}
        pagination={{
          type:"fraction"
        }}
        navigation={true}
        breakpoints={{
          300:{
            slidesPerView: 1,
            spaceBetween:1
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: Math.floor(display/2),
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: display,
            spaceBetween: 0,
          },
        }}
        className="mySwiper"
        modules={[Navigation]}
      >
        {elements.map((el, i) => {
            return <SwiperSlide key={i}>{el}</SwiperSlide>;
          })}
        
     
      </Swiper>
    </>
  );
}
