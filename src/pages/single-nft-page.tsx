import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import {
  BsInstagram,
  BsTwitter,
  BsDiscord,
  BsCaretDownFill,
} from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import esempioImage from "../assets/images/esempio-image-card.avif";
import { CardCollection } from "../components/CardCollection";
import { Details } from "../components/Details";
import { BiLinkExternal } from "react-icons/bi";
import { DetailsElement } from "../components/DetailsElement";
import { UserInfo } from "../components/UserInfo";
import { TagTable } from "../components/TagTable";
import { NftInfo } from "../components/NftInfo";
import { BuyEdition } from "../components/BuyEdition";
import { BackButton } from "../components/BackButton";
import { IconSocialAndOption } from "../components/IconSocialAndOption";
import { SummaryCollection } from "../components/SummaryCollection";

export function NftPage() {
  return (
    <div className="css-1xifris">
      <Navbar />
      <div className="all-container">
        <div className="page-container">
          <div className="section-container">
            <div className="information-container">
              <div className="image-container">
                <CardCollection image={esempioImage} />
              </div>
              <Details
                text="Properties"
                classe="details-container"
                icon={<BsCaretDownFill />}
                elementsDetails={[
                  <DetailsElement
                    title="Bacground"
                    description="Teal"
                    subtitle="10% have this trait"
                  />,
                  <DetailsElement
                    title="Body"
                    description="Black"
                    subtitle="9% have this trait"
                  />,
                  <DetailsElement
                    title="Earrings"
                    description="Nothing"
                    subtitle="55% have this trait"
                  />,
                  <DetailsElement
                    title="Eyes"
                    description="Pirate"
                    subtitle="11% have this trait"
                  />,
                  <DetailsElement
                    title="Face"
                    description="Big Smile"
                    subtitle="13% have this trait"
                  />,
                  <DetailsElement
                    title="HEAD"
                    description="Brown Summer..."
                    subtitle="10% have this trait"
                  />,
                  <DetailsElement
                    title="outfit"
                    description="Black Tee"
                    subtitle="10% have this trait"
                  />,
                ]}
              />
              <Details
                text="Properties"
                classe="details-container"
                icon={<BiLinkExternal />}
                link="#"
              />
              <Details
                text="Properties"
                classe="details-container"
                icon={<BiLinkExternal />}
                link="#"
              />
            </div>
            <div className="statistic-container">
              <div className="top-statistic-container">
                <div className="icon-container">
                  <BackButton />
                  <IconSocialAndOption />
                </div>
                <div className="css-1j9aoqx">
                  <div className="css-84wpv7">
                    <div className="css-18oip3">Chain:</div>
                  </div>
                  <div className="css-84wpv7">
                    <div className="css-11r4quq">Cronos</div>
                  </div>
                  <svg
                    width="22"
                    height="19"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="center-icon"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.33203 4.16761L1.33323 4.16692V4.16512L7.99723 0.333087V0.335294L8.00121 0.333008L8.00138 0.333108V0.333008L14.6654 4.16761V11.8343L8.00138 15.6663V15.6662L8.00121 15.6663L7.99723 15.664V15.6664L5.15363 14.0301L1.33203 11.8343V4.16761ZM7.99723 13.3918V13.392L8.00121 13.3943L12.6908 10.6983V5.3035L8.00138 2.60755V2.60509L8.00121 2.60499L3.30904 5.30103V10.6966L7.99723 13.3918ZM7.9985 11.5798L11.1111 9.79099L9.81549 9.04309L7.9985 10.0891L6.18152 9.04309V6.95616L7.9985 5.91012L9.81549 6.95616L11.1111 6.21083L7.9985 4.41946L4.8833 6.21083V9.79099L7.9985 11.5798Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
                <SummaryCollection
                  creator={"Crypto.com"}
                  collection={"Lions"}
                />
                <div className="css-xmzy0r">
                  <div className="css-v0b2st">
                    <button className="button-ratio">
                      <div className="css-dhk0gj">
                        <svg
                          width="14"
                          height="16"
                          viewBox="0 0 14 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.14506 8.10976L8.70492 6.61621H5.30762L5.8798 8.10976L5.70492 9.78522H7.00011L8.30762 9.77877L8.14506 8.10976Z"
                            fill="white"
                          ></path>
                          <path
                            d="M10.2595 7.11621L8.72312 8.11621V9.89379L7.54883 11.02V11.5499L8.68087 12.5927H9.62629L12.0124 8.43546L10.2595 7.11621Z"
                            fill="white"
                          ></path>
                          <path
                            d="M9.61481 3.53711H4.36833L3.75977 6.21199H10.2474L9.61481 3.53711Z"
                            fill="white"
                          ></path>
                          <path
                            d="M5.30166 8.11619L3.74708 7.12793L1.98828 8.43544L4.38558 12.6045H5.34392L6.47596 11.5499V11.0199L5.30166 9.89377V8.11619Z"
                            fill="white"
                          ></path>
                          <path
                            d="M7.00016 0.299805L0.333496 4.1484V11.8468L7.00016 15.6959L13.6668 11.8468V4.1484L7.00016 0.299805ZM4.36812 3.53689H9.6146L10.2472 6.21178H3.75955L4.36812 3.53689ZM6.4761 11.5498L5.34406 12.6044H4.38631L1.98843 8.43537L3.74723 7.12786L5.30122 8.11553V9.89311L6.47552 11.0199V11.5498H6.4761ZM5.70498 9.78455L5.87986 8.10966L5.30767 6.61553H8.70497L8.14512 8.10966L8.30768 9.77868L7.00075 9.78455H5.70556H5.70498ZM9.62634 12.5921H8.68091L7.54887 11.5498V11.0199L8.72317 9.89311V8.11553L10.2596 7.11553L12.0125 8.43478L9.62634 12.5921V12.5921Z"
                            fill="#003688"
                          ></path>
                          <path
                            d="M7 0.299805V3.53689H9.61444L10.2471 6.21178H7V6.61553H8.70481L8.14495 8.10966L8.30751 9.77868L7.00059 9.78455V15.6959L13.6673 11.8468V4.1484L7 0.299805ZM9.62617 12.5926H8.68075L7.54871 11.5504V11.0205L8.72301 9.8937V8.11612L10.2594 7.11612L12.0123 8.43537L9.62617 12.5926V12.5926Z"
                            fill="url(#paint0_linear_2891_48366)"
                          ></path>
                          <path
                            d="M5.70498 9.78513L5.87986 8.11025L5.30767 6.61612H7.00016V6.21236H3.75955L4.36812 3.53748H7.00016V0.299805L0.333496 4.1484V11.8468L7.00016 15.6959V9.78455H5.70498V9.78513ZM6.4761 11.5504L5.34406 12.605H4.38631L1.98843 8.43537L3.74723 7.12786L5.30122 8.11553V9.89311L6.47552 11.0199V11.5498L6.4761 11.5504Z"
                            fill="url(#paint1_linear_2891_48366)"
                          ></path>
                          <defs>
                            <linearGradient
                              id="paint0_linear_2891_48366"
                              x1="10.3333"
                              y1="15.6959"
                              x2="10.3333"
                              y2="0.371402"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#111C4E"></stop>
                              <stop
                                offset="1"
                                stop-color="#111C4E"
                                stop-opacity="0"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_2891_48366"
                              x1="3.66683"
                              y1="0.319758"
                              x2="3.66683"
                              y2="14.2176"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#111C4E"></stop>
                              <stop
                                offset="1"
                                stop-color="#111C4E"
                                stop-opacity="0"
                              ></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      6,809
                    </button>
                  </div>
                </div>
                <div className="css-1xkdge7">
                  <div className="nft-summary">Carota Club #8756</div>
                  <div className="css-9h7yvd">
                    <div className="css-1cufir3">Marketplace</div>
                  </div>
                </div>
                <div className="css-j9au5h">
                  <div className="css-17kuy89">
                    <div className="css-14xuj6k">
                      <span className="css-1otewz">
                        <div className="css-15o39v9">$</div>
                      </span>
                      <span className="css-1otewz">
                        <div className="css-4z733i">175</div>
                      </span>
                    </div>
                  </div>
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
                </div>
                <div className="css-et2jx0">
                  <div className="nft-detail-container">
                    <div className="css-1ropvg2">
                      <p>Carota Club #8756</p>
                    </div>
                  </div>
                  <div className="nft-detail-container-tags">
                    <TagTable text={"Art"} />
                    <TagTable text={"Crypto"} />
                    <TagTable text={"Cross Chain"} />
                  </div>
                </div>
              </div>
              <div className="css-znm2i9">
                <NftInfo elementArray={["Ownership", "History", "Offers"]} />
              </div>
            </div>
          </div>
          <BuyEdition
            link={
              "https://media.nft.crypto.com/be061a51-c0fd-4a4d-872b-9f3fccd3e719/original.jpeg?d=lg-logo"
            }
            nftName="Carota Club #"
            collection="Carota Club"
            nftSerialNumber={8756}
            cost={175}
          />
        </div>
      </div>
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
  );
}
