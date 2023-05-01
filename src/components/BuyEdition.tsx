import React, { useState } from "react";
import { useContext } from "react";
import CartContext from "../CartContext";

export function BuyEdition({
  link,
  nftName,
  collection,
  nftSerialNumber,
  cost,
}: {
  link: string;
  nftName: string;
  collection: string;
  nftSerialNumber: number;
  cost: number;
}) {
  const { addToCart, aviableButton, flag } = useContext(CartContext);
  const { removeToCart } = useContext(CartContext);
  const { items } = useContext(CartContext);
  const nftNameAndNumber = `${nftName}${nftSerialNumber}`;

  function handleFlag(flag: boolean) {
    if (!flag) {
      addToCart(nftNameAndNumber, link, collection, nftSerialNumber, cost);
    } else {
      removeToCart(items, nftSerialNumber, cost);
    }
  }

  return (
    <div className="buy-Edition-container">
      <div className="asset-container">
        <div className="asset-image">
          <img src={link} />
        </div>
        <div className="asset-information">
          <div className="css-10a3ax5">
            <div className="css-ligk6yf">
              {nftName}
              {nftSerialNumber}
            </div>
          </div>
        </div>
      </div>
      <div className="css-41sbbu">
        <div className="css-kkow03">
          <div className="css-1dr203x">
            <div className="css-dgr9ig">
              <div className="css-178q20">
                <button
                  className={String(aviableButton())}
                  onClick={() => handleFlag(flag)}
                >
                  {!flag ? <div>Add To Cart</div> : <div>Remove From Cart</div>}
                </button>
              </div>
            </div>
            <div className="css-178q20">
              <button className="css-v5o7gi">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
