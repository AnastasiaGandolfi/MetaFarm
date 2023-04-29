import React, { useState } from "react";
import { UserInfo } from "./UserInfo";
function TabPanel({
  value,
  index,
  imageLink,
}: {
  value: number;
  index: number;
  imageLink: string;
}) {
  return (
    <div>
      {value === index && (
        <div className="owner-list">
          <div className="owner-tab-container">
            <div className="user-profile-container">
              <a href="#" className="user-profile-link">
                <div className="css-wpyvqd">
                  <div className="css-12pdu1u">
                    <img src={imageLink} className="owner-image" />
                  </div>
                </div>
              </a>
              <div className="user-profile">
                <span className="user-profile-title">Owner</span>
                <div className="wallet-container">
                  <div className="user-name-container">
                    <a href="#" className="user-profile-link">
                      <span className="user-profile-name">starrylicius</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {index === 0 ? (
              <div className="css-1tfcze1">
                <div className="css-1wiov8">
                  cro1xqtcujfezynneytgchdped2n9tkxftl92nkr6v
                </div>
                <div className="css-84wpv7">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-test-id="listing-owner-wallet-address-copy-button"
                  >
                    <path
                      d="M2 2V12H5.5V11H3V3H9V3.5H10V2H2ZM6 4V14H14V4H6ZM7 5H13V13H7V5Z"
                      fill="#626973"
                    ></path>
                  </svg>
                </div>
              </div>
            ) : null}
            {index === 1 ? (
              <div className="css-1tfcze1">
                <div className="css-1wiov8">
                  <a href="#">Show Details</a>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
export function NftInfo({ elementArray }: { elementArray: Array<string> }) {
  const [value, setValue] = useState(0);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: number
  ) => {
    setValue(newValue);
  };

  function toggleActiveStyles(indexActtive: Number) {
    if (value === indexActtive) {
      return "nft-details-tab-active";
    } else {
      return "nft-details-tab";
    }
  }
  return (
    <div>
      <div className="css-1xm42rb">
        <div className="tabs-tabs">
          {elementArray.map((element, index) => (
            <div
              className={toggleActiveStyles(index)}
              onClick={(event) => handleChange(event, index)}
            >
              <div className="css-15clvx7" key={index}>
                {element}
              </div>
            </div>
          ))}
        </div>
      </div>
      <TabPanel
        value={value}
        index={0}
        imageLink="https://media.nft.crypto.com/7c4ad46f-0678-4e39-b9c7-941f447944af/original.png?d=sm-logo"
      />
      <TabPanel
        value={value}
        index={1}
        imageLink="https://media.nft.crypto.com/facc5d94-91a1-4252-9c81-43bb3bcc2ab7/original.jpg?d=sm-logo"
      />
      <TabPanel
        value={value}
        index={1}
        imageLink="https://media.nft.crypto.com/75a220ef-769e-455d-ab38-47272ef398a3/original.jpeg?d=sm-logo"
      />
    </div>
  );
}
