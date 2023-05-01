import React, { useContext } from "react";
import { MdVerified, MdClear } from "react-icons/md";
import CartContext from "../CartContext";

export function CartItem() {
  const { items } = useContext(CartContext);
  const { removeToCart } = useContext(CartContext);
  function handleRemove(nftSerialNumber: number, price: number): void {
    removeToCart(items, nftSerialNumber, price);
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
              onClick={() => handleRemove(item.serialNumber, item.price)}
            >
              <MdClear />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
