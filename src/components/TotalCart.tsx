import React, { useContext } from "react";
import { BiInfoCircle } from "react-icons/bi";
import CartContext from "../CartContext";

export function TotalCart() {
  const { totalPrice } = useContext(CartContext);
  return (
    <div className="css-1w0xktf">
      <div className="css-1wa71j8">
        <div className="css-nrqnxi">
          <div className="css-1udpzby">Total</div>
          <div className="css-fvr380">
            <div className="css-17bbcc5">
              <BiInfoCircle />
            </div>
          </div>
        </div>
        <div className="css-j8ju1b">{totalPrice}</div>
      </div>
      <div className="css-xyr7jv">
        <a href="/signup">
          <div className="css-ty9yqy">Check Out</div>
        </a>
      </div>
    </div>
  );
}
