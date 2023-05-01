import React from "react";
import { Carousel } from "react-bootstrap";
import HeroCard from "./HeroCard";

const cardData = [
  {
    date: "May 10, 2023",
    title: "Event Title 1",
    subtitle: "Event Subtitle 1",
  },
  {
    date: "May 15, 2023",
    title: "Event Title 2",
    subtitle: "Event Subtitle 2",
  },
  {
    date: "May 20, 2023",
    title: "Event Title 3",
    subtitle: "Event Subtitle 3",
  },
  {
    date: "May 30, 2023",
    title: "Event Title 4",
    subtitle: "Event Subtitle 4",
  },
];

function HeroCarousel() {
  return (
    <Carousel className="hero-card-container" slide>
      {cardData.map((card, index) => (
        <Carousel.Item key={index} interval={6000}>
          <HeroCard date={card.date} title={card.title} subtitle={card.subtitle} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HeroCarousel;
