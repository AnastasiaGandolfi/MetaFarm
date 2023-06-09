import { TbDiscountCheckFilled } from "react-icons/tb";
import { AiOutlineStar } from "react-icons/ai";
import Filter from '../components/Filter';
import { Card } from '../components/Card';
import esempioImage from "../assets/images/esempio-image-card.avif";
import smallImage from "../assets/images/small-image.avif";
import { BestCollectionItems } from "../components/BestCollectionItems";


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


export default function CreatorPage({ image, icon, name, collectibles, owners, floorprice, volumetraded, description }:
    { image: string; icon: string, name: string; collectibles: number; owners: number, floorprice: string; volumetraded: string; description: string }): JSX.Element {
    return (
        <div className="container-page-creator">
            <div className="container-background-picture-creator">
                <img className="image-creator" src={image} />
            </div>
            <div className="container-icon-creator">
                <img className="icon-creator" src={icon} />
            </div>
            <div className="container-name-creator">
                <h1 className="verified-creator"><TbDiscountCheckFilled /></h1>   <h1>{name}</h1>
            </div>
            <div className="container-sub-icon">
                <button className="price-allert">
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.9357 5.51327C12.9415 5.44976 12.9445 5.38528 12.9445 5.32C12.9445 4.31484 12.2412 3.5 11.3736 3.5C10.5061 3.5 9.80281 4.31484 9.80281 5.32C9.80281 5.38539 9.80579 5.44998 9.81159 5.5136C7.05571 6.21025 5.01621 8.70683 5.01621 11.6791V15.4001C5.01621 16.6282 4.21669 17.8564 3.78662 18.4282C3.62073 18.6487 3.51349 18.9106 3.50121 19.1863C3.47079 19.8695 4.01649 20.4401 4.70039 20.4401H12.4833C12.1083 19.5948 11.9 18.6592 11.9 17.6749C11.9 14.2579 14.411 11.4274 17.6885 10.9281C17.3784 8.2927 15.4566 6.14996 12.9357 5.51327ZM13.2645 21.7699C13.3976 21.9472 13.5392 22.1177 13.6886 22.281C13.4821 23.5445 12.5242 24.4999 11.3736 24.4999C10.0723 24.4999 9.01739 23.2776 9.01739 21.7699H13.2645Z"
                            fill="#0B1426"
                        ></path>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M18.7252 23.4498C21.9146 23.4498 24.5001 20.8643 24.5001 17.6749C24.5001 14.4854 21.9146 11.8999 18.7252 11.8999C15.5357 11.8999 12.9502 14.4854 12.9502 17.6749C12.9502 20.8643 15.5357 23.4498 18.7252 23.4498ZM18.7263 14.1306C19.2786 14.1306 19.7263 14.5783 19.7263 15.1306V16.6743H21.272C21.8243 16.6743 22.272 17.122 22.272 17.6743C22.272 18.2266 21.8243 18.6743 21.272 18.6743H19.7263V20.2179C19.7263 20.7702 19.2786 21.2179 18.7263 21.2179C18.174 21.2179 17.7263 20.7702 17.7263 20.2179V18.6743H16.1813C15.629 18.6743 15.1813 18.2266 15.1813 17.6743C15.1813 17.122 15.629 16.6743 16.1813 16.6743H17.7263V15.1306C17.7263 14.5783 18.174 14.1306 18.7263 14.1306Z"
                            fill="green"
                        ></path>
                    </svg>
                </button>
                <button><AiOutlineStar className="watchlist-icon-creator" /></button>
            </div>
            <div className="container-stats-creator">
                <div className="collectibles-stats-contaiiner"><p> Collectibles</p> <h2> {collectibles}</h2>  </div>
                <div className="owners-stats-container"><p> Owners</p> <h2>{owners} </h2>        </div>
                <div className="floor-price-stats-container"><p className="floor-price-p"> Floor Price</p> <h2> {floorprice}</h2> <p className="buy-now-p">BUY NOW</p>   </div>
                <div className="volume-traded-stats-container"> <p>Volume Traded</p> <h2>{volumetraded}</h2> </div>
            </div>
            <div className="container-description-creator"> {description}</div>
            <hr />
            <div className='filter-bc-section-container'>
                <div>
                    <Filter />
                </div>
                <div className='bc-container'>
                    <BestCollectionItems />
                </div>
            </div>
        </div>
    )
}
