import smallImage from "../assets/images/small-image.avif";
import CardBrandLogo from "./CardBestCollection";
import { useState } from "react";
import { Button } from "./Button";
import { ButtonDropdown } from "./ButtonDropdown";
import { DropdownElement } from "./DropdownElement";
import React from "react";

type CollectionData = {
  position: number;
  title: string;
  floorPrice: string;
  volumePrice: string;
  volumePercentage: string;
  floorPercentage: string;
  smallImage: string;
};

const collectionCard: CollectionData[] = [
  {
    position: 1,
    smallImage: smallImage,
    title: "Otherdeed for Otherside",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 2,
    smallImage: smallImage,
    title: "Otherdeed for Otherside",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 3,
    smallImage: smallImage,
    title: "Otherdeed for Otherside",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 4,
    smallImage: smallImage,
    title: "Otherdeed for Otherside",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 5,
    smallImage: smallImage,
    title: "Otherdeed for Otherside ",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 6,
    smallImage: smallImage,
    title: "Otherdeed for Otherside ",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 7,
    smallImage: smallImage,
    title: "Otherdeed for Otherside ",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 8,
    smallImage: smallImage,
    title: "Otherdeed for Otherside ",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 9,
    smallImage: smallImage,
    title: "Otherdeed for Otherside ",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 10,
    smallImage: smallImage,
    title: "Otherdeed for Otherside ",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 11,
    smallImage: smallImage,
    title: "Otherdeed for Otherside ",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 12,
    smallImage: smallImage,
    title: "Otherdeed for Otherside ",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 13,
    smallImage: smallImage,
    title: "Otherdeed for Otherside ",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 14,
    smallImage: smallImage,
    title: "Otherdeed for Otherside ",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 15,
    smallImage: smallImage,
    title: "Otherdeed for Otherside ",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
];

const collectionCardToday: CollectionData[] = [
  {
    position: 1,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 2,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 3,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 4,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 5,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 6,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 7,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 8,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 9,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 10,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 11,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 12,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 13,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 14,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 15,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
];
const collectionCardLast7Days: CollectionData[] = [
  {
    position: 1,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Last 7 Days",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 2,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today Last 7 Days",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 3,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today Last 7 Days",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 4,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today Last 7 Days",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 5,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today Last 7 Days",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 6,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today Last 7 Days",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 7,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today Last 7 Days",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 8,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today Last 7 Days",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 9,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today Last 7 Days",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 10,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today Last 7 Days",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 11,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today Last 7 Days",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 12,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today Last 7 Days",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 13,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today Last 7 Days",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 14,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today Last 7 Days",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 15,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today Last 7 Days",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
];
const collectionCardLast30Days: CollectionData[] = [
  {
    position: 1,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Last 30 Days",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 2,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today Last 30 Days",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 3,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today Last 30 Days",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 4,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today Last 30 Days",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 5,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today Last 30 Days",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 6,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today Last 30 Days",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 7,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today Last 30 Days",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 8,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today Last 30 Days",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 9,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today Last 30 Days",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 10,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today Last 30 Days",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 11,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today Last 30 Days",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 12,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today Last 30 Days",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 13,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today Last 30 Days",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 14,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today Last 30 Days",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
  {
    position: 15,
    smallImage: smallImage,
    title: "Otherdeed for Otherside Today Last 30 Days",
    floorPrice: "$2.7K",
    floorPercentage: "+23.03%",
    volumePrice: "$7.6M",
    volumePercentage: "-41.27%",
  },
];

export function ComponentBestCollection(): JSX.Element {
  const [collections, setCards] = useState(collectionCard);
  function handleFilterClick(index: number) {
    switch (index) {
      case 1:
        setCards(collectionCardToday);
        break;
      case 2:
        setCards(collectionCardLast7Days);
        break;
      case 3:
        setCards(collectionCardLast30Days);
        break;
      default:
        setCards(collectionCard);
        console.log(index);
        break;
    }
  }
  return (
    <div className="container-top-collection">
      <h1 className="top-collection-title">Top Collection</h1>
      <div className="button-container-top-collection">
        <div className="sort-by">
          <p style={{ color: "black", fontSize: "24px" }}>Sort by</p>
          <ButtonDropdown
            type="pill-dropdown"
            text={<span>Sales Volume</span>}
            dropdownElement={[
              <DropdownElement type="dropdown-element" text="Sales Volume" />,
              <DropdownElement type="dropdown-element" text="Sales Volume %" />,
              <DropdownElement type="dropdown-element" text="Floor Price" />,
              <DropdownElement type="dropdown-element" text="Floor Price %" />,
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
        </div>
      </div>
      <div className="container-card-best-collection">
        {collections.map((collection) => (
          <CardBrandLogo
            position={collection.position}
            smallImage={collection.smallImage}
            title={collection.title}
            floorPrice={collection.floorPrice}
            floorPercentage={collection.floorPercentage}
            volumePrice={collection.volumePrice}
            volumePercentage={collection.volumePercentage}
          />
        ))}
      </div>
      <div className="container-button-see-all-best-collection">
        <Button type="rectangle" text="See all" />
      </div>
    </div>
  );
}
