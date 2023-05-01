import React from "react";
import { Carousel } from "react-bootstrap";
import HeroCard from "./HeroCard";

const cardData = [
  {
    date: "May 10, 2023",
    title: "The Zoanthropic Lineage",
    subtitle: "Maximiliano Hache",
    src: 'url("https://media.nft.crypto.com/4f21e1eb-c29d-491c-8b4d-008352b1676b/original.png?d=lg-cover")'
  },
  {
    date: "May 15, 2023",
    title: "Spirits of The Lost",
    subtitle: "Vamuel",
    src: 'url("https://media.nft.crypto.com/149cc325-5c69-4c6a-80b0-753b47d81a55/original.jpg?d=lg-cover")'
  },
  {
    date: "May 20, 2023",
    title: "Santuario",
    subtitle: "Laprisamata",
    src: 'url("https://media.nft.crypto.com/22e61009-8b30-4cc8-84e4-601be0c9ce62/original.jpg?d=lg-cover")'
  },
  {
    date: "May 30, 2023",
    title: "Tenzai",
    subtitle: "Tenmen",
    src: 'url("https://media.nft.crypto.com/176129cf-125b-4c54-999b-c3e88444c1e6/original.png?d=lg-cover")'
  },
];

function HeroCarousel() {
  return (
    <Carousel className="hero-card-container" slide>
      {cardData.map((card, index) => (
        <Carousel.Item key={index} interval={6000}>
          <HeroCard date={card.date} title={card.title} subtitle={card.subtitle} src={card.src} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HeroCarousel;
