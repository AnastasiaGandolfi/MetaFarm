import React from 'react'
import { Navbar } from '../components/Navbar'
import { Carousel } from '../components/Carousel'
import { CardCollection } from '../components/CardCollection';
import esempioImage from "../assets/images/esempio-image-card.avif";
import smallImage from "../assets/images/small-image.avif";
import { BestCollectionItems } from '../components/BestCollectionItems';
import { BsDiscord, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { Footer } from '../components/Footer';
import Filter from '../components/Filter';
import { Card } from '../components/Card';

const cardsCollection: JSX.Element[] = [
    <CardCollection
        image={esempioImage}
        smallImage={smallImage}
        paragraph="Otherdeed for Otherside"
    />
    ,
    <CardCollection
        image={esempioImage}
        smallImage={smallImage}
        paragraph="Otherdeed for Otherside"
    />
    ,
    <CardCollection
        image={esempioImage}
        smallImage={smallImage}
        paragraph="Otherdeed for Otherside"
    />
    ,
    <CardCollection
        image={esempioImage}
        smallImage={smallImage}
        paragraph="Otherdeed for Otherside"
    />
    ,
    <CardCollection
        image={esempioImage}
        smallImage={smallImage}
        paragraph="Otherdeed for Otherside"
    />
    ,
    <CardCollection
        image={esempioImage}
        smallImage={smallImage}
        paragraph="Otherdeed for Otherside"
    />
    ,
    <CardCollection
        image={esempioImage}
        smallImage={smallImage}
        paragraph="Otherdeed for Otherside"
    />
    ,
];

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


export default function Marketplace() {
    return (
        <div>
            <div className="header">
                <Navbar />
            </div>
            <div className="main-content">
                <div className="feature-section">
                    <div className="feature-title">
                        <h1 className="feature-title">Top Collection</h1>
                    </div>
                    <Carousel elements={cardsCollection} display={2} />
                </div>
            </div>
            <div className='filter-bc-section-container'>
                <Filter />
                <div className="card-container-collection">
                    {cardData.map((card, index) => (
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


