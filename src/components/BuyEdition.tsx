import React, { useEffect, useState } from "react";
import { useContext } from "react";
import CartContext from "../CartContext";
import Cookies from "js-cookie";
export function BuyEdition({
  link,
  nftName,
  collection,
  cost,
}: {
  link: string;
  nftName: string;
  collection: string;
  cost: number;
}) {
  const { addToCart, aviableButton, flag } = useContext(CartContext);
  const { removeToCart } = useContext(CartContext);
  const { items } = useContext(CartContext);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  function handleFlag() {
    if (!items.some((item) => item.name === nftName)) {
      addToCart(nftName, link, collection, cost);
    } else {
      removeToCart(items, nftName, cost);
    }
  }
  function classAvaiable() {
    if (!items.some((item) => item.name === nftName)) {
      return "css-aeet0h-available";
    } else {
      return "css-aeet0h-not-available";
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
            <div className="css-ligk6yf">{nftName}</div>
          </div>
        </div>
      </div>
      <div className="css-41sbbu">
        <div className="css-kkow03">
          <div className="css-1dr203x">
            <div className="css-dgr9ig">
              <div className="css-178q20">
                <button
                  className={classAvaiable()}
                  onClick={() => handleFlag()}
                >
                  {!items.some((item: any) => item.name === nftName) ? (
                    <div>Add To Cart</div>
                  ) : (
                    <div>Remove From Cart</div>
                  )}
                </button>
              </div>
            </div>
            <div className="css-178q20">
              <a href="/signup">
                <button className="css-v5o7gi">Buy Now</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
