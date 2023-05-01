import { Button } from "./Button";
import { ButtonDropdown } from "./ButtonDropdown";
import { Card } from "./Card";
import SwitchButton from "./SwitchButton";
import esempioImage from "../assets/images/esempio-image-card.avif";
import smallImage from "../assets/images/small-image.avif";
import { useState } from "react";
import { DropdownElement } from "./DropdownElement";

type CardData = {
  image: string;
  smallImage: string;
  mainTitle: string;
  subtitle: string;
  body: string;
  paragraph: string;
  price: string;
  venditeTotali: string;
};

const cardData: CardData[] = [
  {
    image: esempioImage,
    smallImage: smallImage,
    mainTitle: "Loaded Lions",
    subtitle: "Loaded Lion #289",
    body: "1 minted",
    paragraph: "Last Sale",
    price: "3,456",
    venditeTotali: "Total Sales: $4.2K",
  },
  {
    image: esempioImage,
    smallImage: smallImage,
    mainTitle: "Another Card",
    subtitle: "Subtitle",
    body: "Some text",
    paragraph: "Some paragraph",
    price: "$9.99",
    venditeTotali: "Total Sales: $10K",
  },
  {
    image: esempioImage,
    smallImage: smallImage,
    mainTitle: "Another Card",
    subtitle: "Subtitle",
    body: "Some text",
    paragraph: "Some paragraph",
    price: "$9.99",
    venditeTotali: "Total Sales: $10K",
  },
];
const cardDataMostLikes: CardData[] = [
  {
    image: esempioImage,
    smallImage: smallImage,
    mainTitle: "Most Likes Card 1",
    subtitle: "Subtitle",
    body: "Some text",
    paragraph: "Some paragraph",
    price: "$9.99",
    venditeTotali: "Total Sales: $10K",
  },
  {
    image: esempioImage,
    smallImage: smallImage,
    mainTitle: "Most Likes Card 1",
    subtitle: "Subtitle",
    body: "Some text",
    paragraph: "Some paragraph",
    price: "$9.99",
    venditeTotali: "Total Sales: $10K",
  },
  {
    image: esempioImage,
    smallImage: smallImage,
    mainTitle: "Most Likes Card 1",
    subtitle: "Subtitle",
    body: "Some text",
    paragraph: "Some paragraph",
    price: "$9.99",
    venditeTotali: "Total Sales: $10K",
  },
]
const cardDataMostViews: CardData[] = [
  {
    image: esempioImage,
    smallImage: smallImage,
    mainTitle: "Most Views Card 1",
    subtitle: "Subtitle",
    body: "Some text",
    paragraph: "Some paragraph",
    price: "$9.99",
    venditeTotali: "Total Sales: $10K",
  },
  {
    image: esempioImage,
    smallImage: smallImage,
    mainTitle: "Most Views Card 1",
    subtitle: "Subtitle",
    body: "Some text",
    paragraph: "Some paragraph",
    price: "$9.99",
    venditeTotali: "Total Sales: $10K",
  },
  {
    image: esempioImage,
    smallImage: smallImage,
    mainTitle: "Most Views Card 1",
    subtitle: "Subtitle",
    body: "Some text",
    paragraph: "Some paragraph",
    price: "$9.99",
    venditeTotali: "Total Sales: $10K",
  },
]
const cardDataSalesVolume: CardData[] = [
  {
    image: esempioImage,
    smallImage: smallImage,
    mainTitle: "Sales Volume",
    subtitle: "Subtitle",
    body: "Some text",
    paragraph: "Some paragraph",
    price: "$9.99",
    venditeTotali: "Total Sales: $10K",
  },
  {
    image: esempioImage,
    smallImage: smallImage,
    mainTitle: "Sales Volume",
    subtitle: "Subtitle",
    body: "Some text",
    paragraph: "Some paragraph",
    price: "$9.99",
    venditeTotali: "Total Sales: $10K",
  },
  {
    image: esempioImage,
    smallImage: smallImage,
    mainTitle: "Sales Volume",
    subtitle: "Subtitle",
    body: "Some text",
    paragraph: "Some paragraph",
    price: "$9.99",
    venditeTotali: "Total Sales: $10K",
  },
]

const cardDataToday: CardData[] = [
  {
    image: esempioImage,
    smallImage: smallImage,
    mainTitle: "Today Card 1",
    subtitle: "Subtitle",
    body: "Some text",
    paragraph: "Some paragraph",
    price: "$9.99",
    venditeTotali: "Total Sales: $10K",
  },
  {
    image: esempioImage,
    smallImage: smallImage,
    mainTitle: "Today Card 2",
    subtitle: "Subtitle",
    body: "Some text",
    paragraph: "Some paragraph",
    price: "$9.99",
    venditeTotali: "Total Sales: $10K",
  },
  {
    image: esempioImage,
    smallImage: smallImage,
    mainTitle: "Today Card 3",
    subtitle: "Subtitle",
    body: "Some text",
    paragraph: "Some paragraph",
    price: "$9.99",
    venditeTotali: "Total Sales: $10K",
  },
];

const cardDataLast7Days: CardData[] = [
  {
    image: esempioImage,
    smallImage: smallImage,
    mainTitle: "Last 7 Days Card 1",
    subtitle: "Subtitle",
    body: "Some text",
    paragraph: "Some paragraph",
    price: "$9.99",
    venditeTotali: "Total Sales: $10K",
  },
  {
    image: esempioImage,
    smallImage: smallImage,
    mainTitle: "Last 7 Days Card 2",
    subtitle: "Subtitle",
    body: "Some text",
    paragraph: "Some paragraph",
    price: "$9.99",
    venditeTotali: "Total Sales: $10K",
  },
  {
    image: esempioImage,
    smallImage: smallImage,
    mainTitle: "Last 7 Days Card 3",
    subtitle: "Subtitle",
    body: "Some text",
    paragraph: "Some paragraph",
    price: "$9.99",
    venditeTotali: "Total Sales: $10K",
  },
];

const cardDataLast30Days: CardData[] = [
  {
    image: esempioImage,
    smallImage: smallImage,
    mainTitle: "Last 30 Days Card 1",
    subtitle: "Subtitle",
    body: "Some text",
    paragraph: "Some paragraph",
    price: "$9.99",
    venditeTotali: "Total Sales: $10K",
  },
  {
    image: esempioImage,
    smallImage: smallImage,
    mainTitle: "Last 30 Days Card 2",
    subtitle: "Subtitle",
    body: "Some text",
    paragraph: "Some paragraph",
    price: "$9.99",
    venditeTotali: "Total Sales: $10K",
  },
  {
    image: esempioImage,
    smallImage: smallImage,
    mainTitle: "Last 30 Days Card 3",
    subtitle: "Subtitle",
    body: "Some text",
    paragraph: "Some paragraph",
    price: "$9.99",
    venditeTotali: "Total Sales: $10K",
  },
  {
    image: esempioImage,
    smallImage: smallImage,
    mainTitle: "Last 30 Days Card 1",
    subtitle: "Subtitle",
    body: "Some text",
    paragraph: "Some paragraph",
    price: "$9.99",
    venditeTotali: "Total Sales: $10K",
  },
  {
    image: esempioImage,
    smallImage: smallImage,
    mainTitle: "Last 30 Days Card 2",
    subtitle: "Subtitle",
    body: "Some text",
    paragraph: "Some paragraph",
    price: "$9.99",
    venditeTotali: "Total Sales: $10K",
  },
  {
    image: esempioImage,
    smallImage: smallImage,
    mainTitle: "Last 30 Days Card 3",
    subtitle: "Subtitle",
    body: "Some text",
    paragraph: "Some paragraph",
    price: "$9.99",
    venditeTotali: "Total Sales: $10K",
  },
];

export function BestCollectionItems(): JSX.Element {
  const [cards, setCards] = useState(cardData);

  function handleFilterClick(index: number) {
    switch (index) {
      case 1:
        setCards(cardDataToday);
        break;
      case 2:
        setCards(cardDataLast7Days);
        break;
      case 3:
        setCards(cardDataLast30Days);
        break;
      case 4:
        setCards(cardDataMostLikes);
        break;
      case 5:
        setCards(cardDataMostViews);
        break;
        case 6:
          setCards(cardDataSalesVolume);
          break;
      default:
        setCards(cardData);
        break;
    }
  }

  return (
    <div>
      <h1 className="best-collection-title">Top Collectibles</h1>
      <div className="button-container-collection">
        <div className="sort-by">
          <p style={{ color: "white", fontSize: "24px" }}>Sort by</p>
          <ButtonDropdown
            type="pill-dropdown"
            text={<span>Sales Volume</span>}
            dropdownElement={[
              <DropdownElement type="dropdown-element" text="Sales Volume" handle={() => handleFilterClick(6)} />,
              <DropdownElement type="dropdown-element" text="Most Likes"  handle={() => handleFilterClick(4)} />,
              <DropdownElement type="dropdown-element" text="Most Views" handle={() => handleFilterClick(5)}/>,
            ]}
          />
        </div>
        <div className="date-filters">
          <Button
            type="pill-one"
            text="Today"
            handle={() => handleFilterClick(1)}
          />
          <Button
            type="pill-one"
            text="Last 7 Days"
            handle={() => handleFilterClick(2)}
          />
          <Button
            type="pill-one"
            text="Last 30 Days"
            handle={() => handleFilterClick(3)}
          />
          {/* <div className="switch-button-collection">
            <SwitchButton />
          </div> */}
        </div>
      </div>
      <div className="card-container-collection" >
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            smallImage={card.smallImage}
            mainTitle={card.mainTitle}
            subtitle={card.subtitle}
            body={card.body}
            paragraph={card.paragraph}
            price={card.price}
            venditeTotali={card.venditeTotali}
          />
        ))}
      </div>
    </div>
  );
}
