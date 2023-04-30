import React from "react";
export function BuyEdition({ link }: { link: string }) {
  return (
    <div className="buy-Edition-container">
      <div className="asset-container">
        <div className="asset-image">
          <img src={link} />
        </div>
        <div className="asset-information">
          <div className="css-10a3ax5">
            <div className="css-ligk6yf">Carota Club #8756</div>
          </div>
        </div>
      </div>
      <div className="css-41sbbu">
        <div className="css-kkow03">
          <div className="css-1dr203x">
            <div className="css-dgr9ig">
              <div className="css-178q20">
                <button className="css-aeet0h">Add to Cart</button>
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
