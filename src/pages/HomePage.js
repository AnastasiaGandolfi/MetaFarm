import { Navbar } from "../components/Navbar";
import HeroCarousel from "../components/HeroCarousel";
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
import useSWR from "swr";
import { useEffect, useState } from "react";
import English from "../languages/en.json"
import Spanish from "../languages/es.json";
import Italian from "../languages/it.json";
import { useTranslation } from "react-i18next"; 


const fetcher = (url) => fetch(url).then((result) => result.json());

function useBrands() {
  const { data, error, isLoading } = useSWR(
    `https://metafarm.me/api/getBrands`,
    fetcher
  );
  const [brands, setBrands] = useState([]);
  return [data, error, isLoading, brands, setBrands];
}

function useFeaturedCollections() {
  const { data, error, isLoading } = useSWR(
    `https://metafarm.me/api/getFeaturedCollections`,
    fetcher
  );
  const [featuredCollections, setFeaturedCollections] = useState([]);
  return [data, error, isLoading, featuredCollections, setFeaturedCollections];
}

function useCreators() {
  const { data, error, isLoading } = useSWR(
    `https://metafarm.me/api/getTopCreators`,
    fetcher
  );
  const [topCreators, setTopCreators] = useState([]);
  return [data, error, isLoading, topCreators, setTopCreators];
}

export function HomePage() {
  const { t, i18n } = useTranslation(); // Initialize the translation hook
  
  const [dataBrands, errorBrands, isLoadingBrands, brands, setBrands] = useBrands();
  const [
    dataFeaturedCollections,
    errorFeaturedCollections,
    isLoadingFeatured,
    featuredCollections,
    setFeaturedCollections,
  ] = useFeaturedCollections();

  const [
    dataTopCreators,
    errorTopCreators,
    isLoadingTopCreators,
    topCreators,
    setTopCreators,
  ] = useCreators();

  useEffect(() => {
    const newBrands = [];
    if (!isLoadingBrands) {
      for (const brand of dataBrands) {
        newBrands.push(<CardBrandLogo name={brand.name} src={brand.src} />);
      }
    }
    setBrands(newBrands);
  }, [isLoadingBrands]);

  useEffect(() => {
    const newCreators = [];
    if (!isLoadingTopCreators) {
      console.log(dataTopCreators)
      for (const creator of dataTopCreators) {
        newCreators.push(<a href="/creatorPage" style={{textDecoration:"none"}}><CardBestAuthor name={creator.name} src={creator.src} paragraph={creator.volume} /></a>);
      }
    }
    setTopCreators(newCreators);
  }, [isLoadingTopCreators]);

  useEffect(() => {
    const newCollections = [];
    if (!isLoadingFeatured) {
      for (const collection of dataFeaturedCollections) {
        newCollections.push(
          <CardCollection
            image={collection.src}
            smallImage={collection.small_src}
            paragraph={collection.name}
          />
        );
      }
    }
    setFeaturedCollections(newCollections);
  }, [isLoadingFeatured]);

  return (
    <div>
      <div className="header">
        <Navbar />
      </div>
      <div className="main-content">
        <IntroductionSection />
        <div className="hero-card-home-wrapper">
          <h1 className="hero-title">{t("hero.title")}</h1>
          <h4 className="sub-title-home">{t("sub-title.home")}</h4>
          <HeroCarousel />
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

            <Carousel elements={brands} display={7} />
          </div>
        </div>

        <div className="feature-section">
          <div className="feature-title">
            <h1 className="feature-title">Featured collections</h1>
          </div>
          <Carousel elements={featuredCollections} display={5} />
        </div>

        <div className="top-collection-section">
          <h1 className="top-collection-title"> Top Collection</h1>
          <ComponentBestCollection />
        </div>

        <div className="top-creators-section">
          <div className="top-creator-title">
            <h1 className="top-creator-title">Top Creators</h1>
            <Carousel elements={topCreators} display={6} />
          </div>
        </div>
        <div className="best-collection-section">
          <div className="best-collection-title">
            <h1 className="best-collection-title">Top Collectibles</h1>
          </div>
          <BestCollectionItems />
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
    </div>
  );
}
