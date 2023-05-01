import { Navbar } from "../components/Navbar";
import HeroCard from "../components/HeroCard";
import { FormField } from "../components/FormField";
import { CheckboxFormField } from "../components/CheckboxFormField";
import CardBestAuthor from "../components/CardBestAuthor";
import CardBrandLogo from "../components/CardBrandLogo";
import { CardCollection } from "../components/CardCollection";
import { IntroductionSection } from "../components/IntroductionSection";
import esempioImage from "../assets/images/esempio-image-card.avif";
import smallImage from "../assets/images/small-image.avif";
import { Carousel } from "../components/Carousel";
import { BestCollectionItems } from "../components/BestCollectionItems";
import { Footer } from "../components/Footer"; 
import { BsDiscord, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { ComponentBestCollection } from "../components/ComponentBestCollection";

const cardArray = [
  <CardBrandLogo name="azienda 1" src="" />,
  <CardBrandLogo name="azienda 2" src="" />,
  <CardBrandLogo name="azienda 3" src="" />,
  <CardBrandLogo name="azienda 4" src="" />,
  <CardBrandLogo name="azienda 5" src="" />,
  <CardBrandLogo name="azienda 6" src="" />,
];

const cardsBestAutor = [
  <CardBestAuthor paragraph=" $2,000,000+ " />,
  <CardBestAuthor paragraph=" $2,000,000+ " />,
  <CardBestAuthor paragraph=" $2,000,000+ " />,
  <CardBestAuthor paragraph=" $2,000,000+ " />,
  <CardBestAuthor paragraph=" $2,000,000+ " />,
  <CardBestAuthor paragraph=" $2,000,000+ " />,
  <CardBestAuthor paragraph=" $2,000,000+ " />,
];

const cardsCollection = [
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
export function HomePage() {
  return (
    <div>
      <div className="header">
        <Navbar />
      </div>
      <div className="main-content">
        <IntroductionSection />
        <div className="hero-card-home-wrapper">
          <h1 className="hero-title">Buy, sell, and showcase NFTS</h1>
          <h4 className="sub-title-home">from leading creators and brands</h4>
          <HeroCard />
        </div>

        <div className="form-field-container">
          <div className="form-field-img"></div>
          <div className="form-field-wrapper">
            <h1 className="written-content">Never miss a drop</h1>
            <h3 className="sub-title-home written-content">
              {" "}
              Subscribe for the latest news, drops & collectibles
            </h3>
            <FormField />
            <small className="written-content">
              After reading the Privacy Notice, you may subscribe for our
              newsletter to get special offers and occasional surveys delivered
              to your inbox. Unsubscribe at any time by clicking on the link in
              the email.
            </small>
          
            <span className="written-content">
              By entering my email and subscribing I confirm and agree to the
              above.
            </span>
          </div>
        </div>

        <div className="brand-section">
          <div>
            <h1 className="brands-title">Brands</h1>

            <Carousel elements={cardArray} display={4} />
          </div>
        </div>

        <div className="feature-section">
          <div className="feature-title">
            <h1 className="feature-title">Feature</h1>
          </div>
          <Carousel elements={cardsCollection} display={2} />
        </div>

        <div className="top-collection-section">
          <h1 className="top-collection-title"> Top Collection</h1>
          <ComponentBestCollection />
        </div>

        <div className="top-creators-section">
          <div className="top-creator-title">
            <h1 className="top-creator-title">Top Creators</h1>
            <Carousel elements={cardsBestAutor} display={3} />
          </div>
        </div>
        <div className="best-collection-section">
          <div className="best-collection-title">
            <h1 className="best-collection-title"></h1>
            
          </div>
          < BestCollectionItems />
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
        ]} />
        </div>
      </div>
    </div>
  );
}
