import React, { useContext, useEffect } from "react";
import { MdVerified, MdClear } from "react-icons/md";
import CartContext from "../CartContext";
import { string } from "yargs";

export function CartItem() {
  const { items } = useContext(CartContext);
  const { removeToCart, addToCart } = useContext(CartContext);
  function handleRemove(nftName: string, price: number): void {
    removeToCart(items, nftName, price);
  }
  return (
    <div>
      {items.map((item) => (
        <div className="css-254xoi">
          <div className="css-84wpv7">
            <div className="css-1uzwutr">
              <img src={item.link} />
            </div>
          </div>
          <div className="css-1uteaqm">
            <div className="css-1ne6jb4">
              <div className="css-lgrjkx">{item.collection}</div>
              <div className="css-8whbca">
                <MdVerified />
              </div>
            </div>
            <div className="css.nrqnxi">
              <div className="css-1vhipj4">{item.name}</div>
            </div>
            <div className="css-awommn">$ {item.price}</div>
          </div>
          <div className="css-q1q1q7">
            <div
              className="css-17bbcc5"
              onClick={() => handleRemove(item.name, item.price)}
            >
              <MdClear />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
function addToCart(
  nftNameAndNumber: any,
  link: any,
  collection: any,
  nftSerialNumber: any,
  cost: any
) {
  throw new Error("Function not implemented.");
}
