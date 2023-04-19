import React, { useRef, useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import HeroCard, {CardProps} from "./HeroCard";

interface CarouselProps {
  cards: CardProps[];
}

const CarouselS: React.FC<CarouselProps> = ({ cards }) => {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = new Swiper(swiperRef.current, {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
      });

      return () => {
        swiper.destroy(true, true);
      };
    }
  }, [swiperRef]);

  return (
    <div className="swiper-container" ref={swiperRef}>
      <div className="swiper-wrapper">
        {cards.map((card, index) => (
          <div className="swiper-slide" key={index}>
            <HeroCard {...card} />
          </div>
        ))}
      </div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default CarouselS;
