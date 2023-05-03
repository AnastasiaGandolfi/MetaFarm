import { Button } from "./Button";
import { ButtonDropdown } from "./ButtonDropdown";
import { Card } from "./Card";
import SwitchButton from "./SwitchButton";
import esempioImage from "../assets/images/esempio-image-card.avif";
import smallImage from "../assets/images/small-image.avif";
import { useState } from "react";
import { DropdownElement } from "./DropdownElement";
import useSWR from "swr";
import { useEffect } from "react";

const fetcher = (url) => fetch(url).then((result) => result.json());

function useTopCollections() {
  const { data, error, isLoading } = useSWR(
    `https://metafarm.me/api/getNFT`,
    fetcher
  );
  const [topCollections, setTopCollections] = useState([]);
  return [data, error, isLoading, topCollections, setTopCollections];
}


const cardData= [
  // {
  //   image: esempioImage,
  //   smallImage: smallImage,
  //   mainTitle: "Loaded Lions",
  //   subtitle: "Loaded Lion #289",
  //   body: "1 minted",
  //   paragraph: "Last Sale",
  //   price: "3,456",
  //   venditeTotali: "Total Sales: $4.2K",
  // },
];
const cardDataMostLikes = [
 
]
const cardDataMostViews = [
 
]
const cardDataSalesVolume = [
 
]

const cardDataToday = [
 
];

const cardDataLast7Days = [
  
];

const cardDataLast30Days = [
 
];

export function BestCollectionItems() {
  const [cards, setCards] = useState([]);

  const [dataTopCollections, errorTopCollections, isLoadingTopCollections, topCollections, setTopCollections] = useTopCollections();
  useEffect(() => {
    if (!isLoadingTopCollections) {
      let k = 0;
      console.log(dataTopCollections)
      for (const collection of dataTopCollections) {
        const{id, nname, src,cname,price,owner,creator} = collection;
        if(k < 12){
          cardDataToday.push(<Card
            key={id}
            image={src}
            smallImage="https://metafarm.me/static/media/leaves.8bf4943565b06723cb2b.png"
            mainTitle={cname}
            subtitle={nname}
            body={Math.ceil(Math.random()*10)+" Minted"}
            paragraph="Price"
            price={price}
            venditeTotali={"Total Sales "+ Math.ceil(Math.random()*30)+"k"}
          />
          );
        }else if(k < 24){
          cardDataLast7Days.push(<Card
            key={id}
            image={src}
            smallImage="https://metafarm.me/static/media/leaves.8bf4943565b06723cb2b.png"
            mainTitle={cname}
            subtitle={nname}
            body={Math.ceil(Math.random()*10)+" Minted"}
            paragraph="Price"
            price={price}
            venditeTotali={"Total Sales "+ Math.ceil(Math.random()*30)+"k"}
          />)
        }else if(k<36){
          cardDataLast30Days.push(<Card
            key={id}
            image={src}
            smallImage="https://metafarm.me/static/media/leaves.8bf4943565b06723cb2b.png"
            mainTitle={cname}
            subtitle={nname}
            body={Math.ceil(Math.random()*10)+" Minted"}
            paragraph="Price"
            price={price}
            venditeTotali={"Total Sales "+ Math.ceil(Math.random()*30)+"k"}
          />)
        }else if(k<48){
          cardDataMostLikes.push(<Card
            key={id}
            image={src}
            smallImage="https://metafarm.me/static/media/leaves.8bf4943565b06723cb2b.png"
            mainTitle={cname}
            subtitle={nname}
            body={Math.ceil(Math.random()*10)+" Minted"}
            paragraph="Price"
            price={price}
            venditeTotali={"Total Sales "+ Math.ceil(Math.random()*30)+"k"}
          />)
        }else if(k<60){
          cardDataMostViews.push(<Card
            key={id}
            image={src}
            smallImage="https://metafarm.me/static/media/leaves.8bf4943565b06723cb2b.png"
            mainTitle={cname}
            subtitle={nname}
            body={Math.ceil(Math.random()*10)+" Minted"}
            paragraph="Price"
            price={price}
            venditeTotali={"Total Sales "+ Math.ceil(Math.random()*30)+"k"}
          />)
        }else{
          cardDataSalesVolume.push(<Card
            key={id}
            image={src}
            smallImage="https://metafarm.me/static/media/leaves.8bf4943565b06723cb2b.png"
            mainTitle={cname}
            subtitle={nname}
            body={Math.ceil(Math.random()*10)+" Minted"}
            paragraph="Price"
            price={price}
            venditeTotali={"Total Sales "+ Math.ceil(Math.random()*30)+"k"}
          />)
        }
        k++;
      }
    }
    setCards(cardDataToday);
  }, [isLoadingTopCollections]);

  function handleFilterClick(index) {
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
          <a href={"/single-nft-page/"+card.key}>{card}</a>
        ))}
      </div>
    </div>
  );
}
