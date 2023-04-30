import React from "react";
import { UserInfo } from "./UserInfo";

export function SummaryCollection({
  creator,
  collection,
}: {
  creator: string;
  collection: string;
}) {
  return (
    <div className="nft-summary-collection-container">
      <div className="css-1m1tg02">
        <div className="user-profile">
          <a className="rounded-image" href="#">
            <UserInfo
              imglink={
                "https://media.nft.crypto.com/40a3c83c-f048-44af-b9db-a65edbc519b2/original.jpeg?d=sm-logo"
              }
            />
          </a>
          <div className="user-info-container">
            <span className="user-info-title">Creator</span>
            <div className="name-user">
              <a href="#" className="name-user-link">
                <span className="name-user-span">{creator}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="css-117j5e">
        <div className="css-17kuy89">
          <div className="css-148glow">
            <a href="#" className="collection-detail-container">
              <UserInfo
                imglink={
                  "https://media.nft.crypto.com/3b55fd06-9bbb-42a9-94ba-4c4b8f47dd6f/original.gif"
                }
              />
            </a>
            <div className="user-info-container">
              <span className="user-info-title">Collection</span>
              <div className="name-user">
                <a href="#" className="name-user-link">
                  <span className="name-user-span">{collection}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
