import { Navbar } from "../components/Navbar";
import { Carousel } from "../components/Carousel";
import { CardCollection } from "../components/CardCollection";
import esempioImage from "../assets/images/esempio-image-card.avif";
import smallImage from "../assets/images/small-image.avif";
import { BestCollectionItems } from "../components/BestCollectionItems";
import { BsDiscord, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { Footer } from "../components/Footer";
import Filter from "../components/Filter";

const cardsCollection: JSX.Element[] = [
  <CardCollection
    image={esempioImage}
    smallImage={smallImage}
    paragraph="Otherdeed for Otherside"
  />,
  <CardCollection
    image={esempioImage}
    smallImage={smallImage}
    paragraph="Otherdeed for Otherside"
  />,
  <CardCollection
    image={esempioImage}
    smallImage={smallImage}
    paragraph="Otherdeed for Otherside"
  />,
  <CardCollection
    image={esempioImage}
    smallImage={smallImage}
    paragraph="Otherdeed for Otherside"
  />,
  <CardCollection
    image={esempioImage}
    smallImage={smallImage}
    paragraph="Otherdeed for Otherside"
  />,
  <CardCollection
    image={esempioImage}
    smallImage={smallImage}
    paragraph="Otherdeed for Otherside"
  />,
  <CardCollection
    image={esempioImage}
    smallImage={smallImage}
    paragraph="Otherdeed for Otherside"
  />,
];

export default function Marketplace() {
  return (
    <div>
      <div className="header">
        <Navbar />
      </div>
      <div className="main-content">
        <div className="feature-section">
          <div>
            <div className="text-collection-name">Top Collection</div>
          </div>
          <Carousel elements={cardsCollection} display={4} />
        </div>
      </div>
      <div className="text-collection-name">Explore</div>
      <div className="filter-bc-section-container">
        <div>
          <Filter />
        </div>
        <div className="bc-container">
          <BestCollectionItems />
        </div>
      </div>
      <div className="footer-home">
        <Footer
          text="Copyright © 2023 Metafarm.com All rights reserved."
          icons={[
            <BsInstagram />,
            <BsTwitter />,
            <BsDiscord />,
            <FaTelegramPlane />,
          ]}
          elements={[
            "Help Center",
            "Blog",
            "T&C",
            "Privacy Notice",
            "Cookies Preference",
          ]}
        />
      </div>
    </div>
  );
}
