import smallImage from "../assets/images/small-image.avif";
import CardBrandLogo from "./CardBestCollection";
import { Button } from "./Button";
import { ButtonDropdown } from "./ButtonDropdown";
import { DropdownElement } from "./DropdownElement";
import useSWR from "swr";
import { useEffect, useState } from "react";

const fetcher = (url) => fetch(url).then((result) => result.json());

function useTopCollections() {
  const { data, error, isLoading } = useSWR(
    `http://localhost:3001/api/getNFTData`,
    fetcher
  );
  const [topCollections, setTopCollections] = useState([]);
  return [data, error, isLoading, topCollections, setTopCollections];
}


const collectionCard = [
  
];

const collectionCardToday = [];
const collectionCardLast7Days = [];
const collectionCardLast30Days = [];

export function ComponentBestCollection(){
  const [collections, setCards] = useState(collectionCard);

  const [dataTopCollections, errorTopCollections, isLoadingTopCollections, topCollections, setTopCollections] = useTopCollections();
  useEffect(() => {
    if (!isLoadingTopCollections) {
      let k = 0;
      console.log(dataTopCollections)
      for (const collection of dataTopCollections) {
        if(k < 6){
          collectionCardToday.push(<CardBrandLogo
            position={collection.id}
            smallImage={collection.src}
            title={collection.name}
            floorPrice={collection.floor}
            floorPercentage={collection.floorpercentage}
            volumePrice={collection.volume}
            volumePercentage={collection.volumepercentage}
          />);
        }else if(k < 10){
          collectionCardLast7Days.push(<CardBrandLogo
            position={collection.id}
            smallImage={collection.src}
            title={collection.name}
            floorPrice={collection.floor}
            floorPercentage={collection.floorpercentage}
            volumePrice={collection.volume}
            volumePercentage={collection.volumepercentage}
          />)
        }else{
          collectionCardLast30Days.push(<CardBrandLogo
            position={collection.id}
            smallImage={collection.src}
            title={collection.name}
            floorPrice={collection.floor}
            floorPercentage={collection.floorpercentage}
            volumePrice={collection.volume}
            volumePercentage={collection.volumepercentage}
          />)
        }
        k++;
      }
    }
    setCards(collectionCardToday);
  }, [isLoadingTopCollections]);

  function handleFilterClick(index) {
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
        break;
    }
  }
    return(
        <div className="container-top-collection" style={{color:"white"}}>

      <div className="button-container-top-collection">
        <div className="sort-by">
          <p style={{ color: "white", fontSize: "24px" }}>Sort by</p>
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
          <div>{collection}</div>
        ))}
      </div>
      <div className="container-button-see-all-best-collection">
        {/* <Button type="rectangle" text="See all" /> */}
      </div>
    </div>
  );
}
