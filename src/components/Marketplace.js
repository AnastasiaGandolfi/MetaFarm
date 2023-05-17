import { Navbar } from './Navbar'
import { Carousel } from './Carousel'
import { CardCollection } from './CardCollection';
import esempioImage from "../assets/images/esempio-image-card.avif";
import smallImage from "../assets/images/small-image.avif";
import { BestCollectionItems } from './BestCollectionItems';
import { BsDiscord, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { Footer } from './Footer';
import Filter from './Filter';
import useSWR from "swr";
import { useEffect, useState } from "react";
import FilterContext from "./FilterContext"

const fetcher = (url) => fetch(url).then((result) => result.json());

function useFeaturedCollections() {
  const { data, error, isLoading } = useSWR(
    `https://metafarm.me/api/getFeaturedCollections`,
    fetcher
  );
  const [featuredCollections, setFeaturedCollections] = useState([]);
  return [data, error, isLoading, featuredCollections, setFeaturedCollections];
}

export default function Marketplace() {
  const [
    dataFeaturedCollections,
    errorFeaturedCollections,
    isLoadingFeatured,
    featuredCollections,
    setFeaturedCollections,
  ] = useFeaturedCollections();
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

  const [filterCollections, setFilterCollections] = useState([]);


  return (
    <div>
      <div className="header">
        <Navbar />
      </div>
      <div className="main-content">
        <div className="feature-section">
          <div>
            <div className='text-collection-name'>Top Collection</div>
          </div>
          <Carousel elements={featuredCollections} display={5} />
        </div>
      </div>
      <div className="text-collection-name">Explore</div>
      <FilterContext.Provider value={{filterCollections: filterCollections, setFilterCollections}}>
        <div className="filter-bc-section-container">
          <div>
            <Filter />
          </div>
          <div className="bc-container">
            <BestCollectionItems />
          </div>
        </div>
      </FilterContext.Provider>
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
  )
}


