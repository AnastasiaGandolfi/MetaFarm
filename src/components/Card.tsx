import React, { useContext, useEffect } from "react";
import smallImage from "../src/assets/images/small-image.avif";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { MdOutlineCopyright } from "react-icons/md";
import CartContext from "../CartContext";

type CardInterface = {
  chiave: number;
  image: string;
  smallImage: string;
  mainTitle: string;
  subtitle: string;
  body: string;
  paragraph: string;
  price: string;
  venditeTotali: string;
};

export function Card({
  chiave,
  image,
  smallImage,
  mainTitle,
  subtitle,
  body,
  paragraph,
  price,
  venditeTotali,
}: CardInterface) {
  console.log(chiave);
  const { items, addToCart, removeToCart } = useContext(CartContext);
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  function addItem() {
    if (!items.some((item: any) => item.name === subtitle)) {
      addToCart(subtitle, image, mainTitle, Number(price));
    } else {
      removeToCart(items, subtitle, Number(price));
    }
  }
  function changeClass() {
    if (!items.some((item: any) => item.name === subtitle)) {
      return "btn-card";
    } else {
      return "btn-card-remove";
    }
  }
  return (
    <div className="card-container">
      <a href={"/single-nft-page/" + chiave}>
        <div className="card-wrapper">
          <div className="card-vendite-totali">{venditeTotali}</div>
          <img className="image-card" src={image} alt={mainTitle} />
        </div>

        <div className="title-container-card">
          <img className="small-image-card" src={smallImage} />
          <h6 className="main-title-card">
            {mainTitle}{" "}
            <span className="icon-card">
              <BsFillPatchCheckFill />
            </span>
          </h6>
        </div>
        <h5 className="subtitle-card">
          {subtitle}{" "}
          <span className="icon-card-uno">
            <MdOutlineCopyright />
          </span>
        </h5>
        <p className="main-content-card">{body}</p>
        <p className="price-title-card">
          {paragraph}
          <span className="price-tag-card">{price}</span>
        </p>
      </a>
      <div className="btn-wrapper-card">
        <button className={changeClass()} onClick={addItem}>
          {" "}
          {!items.some((item: any) => item.name === subtitle) ? (
            <div>Add</div>
          ) : (
            <div>Remove</div>
          )}
        </button>
        <span>
          <button className="btn-card">Offer</button>{" "}
        </span>
      </div>
    </div>
  );
}
