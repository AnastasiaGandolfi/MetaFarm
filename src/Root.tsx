import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";
import { Test } from "./Test";
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
import { BrandCarousel } from "./components/BrandCarousel";
import { CardCollection } from "./components/CardCollection";
import CardBestAuthor from "./components/CardBestAuthor";
import { icons } from "react-icons/lib";
import  SelectLanguage  from "./components/SelectLanguage";
import { CartModal } from "./components/CartModal";
import SwitchButton from "./components/SwitchButton";
import { NavbarDropdownButton } from "./components/NavbarDropdownButton";

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
  { element: <CheckboxFormField />, title: "CheckboxFormField" },
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
  { element: <BrandCarousel />, title: "BrandCarousel" },
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
  { element: <InputSearch />, title: "InputSearch" },
  {
    element: (
      <ButtonDropdown type="pill-dropdown" text={<span>Sales Volume</span>} />
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
      <NavbarDropdownButton
        type="navbar-dropdown text-button"
        text="Top Collection"
        elements={[
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
];

export function Root() {
  return (
    <BrowserRouter>
      <Nav variant="tabs" defaultActiveKey="link-1">
        <Nav.Item>
          <Nav.Link href="/home">App</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Components</Nav.Link>
        </Nav.Item>
      </Nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route
          path="/components"
          element={<Components elements={ComponentElements} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
