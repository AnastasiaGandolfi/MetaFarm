import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";
import { Test } from "./Test";
import { HomePage } from "./pages/HomePage";
import { Components } from "./pages/Components";

import Typography from "./components/Typography";
import { Palette } from "./components/Palette";
import { Button } from "./components/Button";
import { BsCalendarWeekFill } from "react-icons/bs";
import { CheckboxFormField } from "./components/CheckboxFormField";
import { FormField } from "./components/FormField";
import { Card } from "./components/Card";
import esempioImage from "../src/assets/images/esempio-image-card.avif";
import smallImage from "../src/assets/images/small-image.avif";
import Nav from "react-bootstrap/Nav";
import { InputSearch } from "./components/InputSearch";
import CardBrandLogo from "./components/CardBrandLogo";
import { ButtonDropdown } from "./components/ButtonDropdown";
// import { BrandCarousel } from "./components/BrandCarousel";
import { CardCollection } from "./components/CardCollection";
import CardBestAuthor from "./components/CardBestAuthor";
import { icons } from "react-icons/lib";
import SelectLanguage from "./components/SelectLanguage";
import { CartModal } from "./components/CartModal";
import SwitchButton from "./components/SwitchButton";
import { NavbarDropdownButton } from "./components/NavbarDropdownButton";
import { BestCollectionItems } from "./components/BestCollectionItems";
import { BsDiscord, BsInstagram, BsTwitter } from "react-icons/bs";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { FaTelegramPlane } from "react-icons/fa";
import { Carousel } from "./components/Carousel";
import CardBestCollection from "./components/CardBestCollection";
import { DropdownElement } from "./components/DropdownElement";
import HeroCard, { CardProps } from "./components/HeroCard";
import CarouselS from "./components/CarouselS";
import { ComponentBestCollection } from "./components/ComponentBestCollection";
import { NftPage } from "./pages/single-nft-page";
import { About } from "./pages/About";
import Filter from "./components/Filter";
import Marketplace from "./components/Marketplace";
import  Signup  from './pages/Signup'
import CreatorPage from "./pages/CreatorPage";
import original from "../src/assets/images/original.png";
import iconcreator from"../src/assets/images/icon-creator.jpeg";

const cardArray: JSX.Element[] = [
  <CardBrandLogo name="azienda 1" src="" />,
  <CardBrandLogo name="azienda 2" src="" />,
  <CardBrandLogo name="azienda 3" src="" />,
  <CardBrandLogo name="azienda 4" src="" />,
  <CardBrandLogo name="azienda 5" src="" />,
  <CardBrandLogo name="azienda 6" src="" />,
];

const cardsBestAutor: JSX.Element[] = [
  <CardBestAuthor paragraph=" $2,000,000+ " />,
  <CardBestAuthor paragraph=" $2,000,000+ " />,
  <CardBestAuthor paragraph=" $2,000,000+ " />,
  <CardBestAuthor paragraph=" $2,000,000+ " />,
  <CardBestAuthor paragraph=" $2,000,000+ " />,
  <CardBestAuthor paragraph=" $2,000,000+ " />,
  <CardBestAuthor paragraph=" $2,000,000+ " />,
];

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

const ComponentElements: { element: JSX.Element; title: string }[] = [
  { element: <Typography />, title: "Typography" },
  { element: <Palette />, title: "Palette" },
  { element: <Button type="rectangle" text="See all" />, title: "Button" },
  { element: <Button type="pill-one" text="Today" />, title: "Button" },
  { element: <Button type="pill-one" text="Last 7 Days" />, title: "Button" },
  { element: <Button type="pill-one" text="Last 30 Days" />, title: "Button" },
  {
    element: (
      <Button
        type="pill-icon"
        text={
          <span>
            <BsCalendarWeekFill /> Upcoming
          </span>
        }
      />
    ),
    title: "Button",
  },
  {
    element: (
      <CheckboxFormField text="Digitando la mia mail e iscrivendomi confermo e accetto quanto sopra" />
    ),
    title: "CheckboxFormField",
  },
  { element: <FormField />, title: "FormField" },
  { element: <InputSearch />, title: "InputSearch" },
  {
    element: (
      <CardBrandLogo
        name="Nome Azienda"
        src="https://www.laminam.com/wp-content/uploads/2020/08/Collection-Bianco-Assoluto.jpg"
      />
    ),
    title: "CardBrandLogo",
  },
  // { element: <BrandCarousel elements={cardArray} display={4}/>, title: "BrandCarousel" },
  // { element: <BrandCarousel elements={cardsBestAutor} display={4}/>, title: "BrandCarousel" },
  // { element: <BrandCarousel elements={cardsCollection} display={4}/>, title: "Carousel" },
  { element: <Carousel elements={cardArray} display={4} />, title: "Carousel" },
  {
    element: <Carousel elements={cardsBestAutor} display={3} />,
    title: "Carousel",
  },
  {
    element: <Carousel elements={cardsCollection} display={2} />,
    title: "Carousel",
  },
  { element: <SwitchButton />, title: "Switch-Button" },
  { element: <SelectLanguage />, title: "SelectLanguage" },
  {
    element: (
      <Card
        image={esempioImage}
        smallImage={smallImage}
        mainTitle="Loaded Lions"
        subtitle="Loaded Lion #289"
        body="1 minted"
        paragraph="Last Sale"
        price="3,456"
        venditeTotali="Total Sales: $4.2K"
      />
    ),
    title: "Card-Best-Collection-item",
  },
  {
    element: (
      <ButtonDropdown
        type="pill-dropdown"
        text={<span>Sales Volume</span>}
        dropdownElement={[
          <DropdownElement type="dropdown-element" text="Sales Volume" />,
          <DropdownElement type="dropdown-element" text="Most Likes" />,
          <DropdownElement type="dropdown-element" text="Most Views" />,
        ]}
      />
    ),
    title: "Dropdown Button",
  },
  {
    element: (
      <CardCollection
        image={esempioImage}
        smallImage={smallImage}
        paragraph="Otherdeed for Otherside"
      />
    ),
    title: "Card-Collection",
  },
  {
    element: <CardBestAuthor paragraph=" $2,000,000+ " />,
    title: "card-best-author",
  },
  { element: <CartModal />, title: "Cart Modal" },
  {
    element: (
      <ButtonDropdown
        type="navbar-dropdown text-button"
        text="Top Collection"
        dropdownElement={[
          "Bored Ape Yacht Club",
          "Otherdeed for Otherside",
          "Doodles",
          "Azuki",
          "CLONE X - X TAKASHI MURAKAMI",
        ]}
      />
    ),
    title: "NavBar Dropdown",
  },
  { element: <BestCollectionItems />, title: "Best Collection Items" },
  {
    element: (
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
    ),
    title: "Footer",
  },
  {
    element: <Navbar />,
    title: "Navbar",
  },
  {
    element: (
      <CardBestCollection
        position={1}
        smallImage={smallImage}
        title="Otherdeed for Otherside"
        floorPrice="$2.7K"
        floorPercentage="+23.03%"
        volumePrice="$7.6M"
        volumePercentage="-41.27%"
      />
    ),
    title: "Card Best Collection",
  },

  {
    element: (
      <CardBestCollection
        position={1}
        smallImage={smallImage}
        title="Otherdeed for Otherside"
        floorPrice="$2.7K"
        floorPercentage="+23.03%"
        volumePrice="$7.6M"
        volumePercentage="-41.27%"
      />
    ),
    title: "Card Best Collection",
  },
  {
    element: (
      <HeroCard date="Mon, April 17 " title="Card title" subtitle="Subtitle" />
    ),
    title: "HeroCard",
  },
  { element: <ComponentBestCollection />, title: "Best Collection" },
  { element: <Filter />, title: "Filter" },
];
const cards: CardProps[] = [
  { date: "Mon,April 17", title: "Card 1", subtitle: "Subtitle for card 1" },
  { date: "Mon,April 17", title: "Card 2", subtitle: "Subtitle for card 2" },
  { date: "Mon,April 17", title: "Card 3", subtitle: "Subtitle for card 3" },
  { date: "Mon,April 17", title: "Card 4", subtitle: "Subtitle for card 4" },
];

const carouselElement = {
  element: <CarouselS cards={cards} />,
  title: "CarouselS",
};

export function Root() {
  return (
    <BrowserRouter>
      {/* <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">App</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/components" eventKey="link-1">Components</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about" eventKey="link-2">About</Nav.Link>
        </Nav.Item>
      </Nav> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/test" element={<Test />} />

        <Route path="/home" element={<HomePage />} />

        <Route path="/about" element={<About />} />

        <Route
          path="/components"
          element={<Components elements={ComponentElements} />}
        />
        <Route path="/single-nft-page" element={<NftPage />} />
        
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/CreatorPage" element={<CreatorPage image={original} icon={iconcreator} name="Otherdeed for Otherside"
                                                         collectibles={29993} owners={8} floorprice="2.3K" volumetraded="1.1B"
                                                         description="this is the description of the creator" /> }/>

      </Routes>
    </BrowserRouter>
  );
}
