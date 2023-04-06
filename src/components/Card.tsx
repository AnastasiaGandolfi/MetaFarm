import smallImage from "../src/assets/images/small-image.avif";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { MdOutlineCopyright } from "react-icons/md";



type CardInterface = {
    image: string;
    smallImage: string
    mainTitle: string; 
    subtitle: string;
    body: string;
    paragraph: string; 
    price: string;
    venditeTotali: string;
};

export function Card({ image, smallImage, mainTitle, subtitle, body, paragraph, price, venditeTotali }: CardInterface) {
  return (
    <div className="card-container">
      <div className="card-wrapper">
    <div className="card-vendite-totali">
      {venditeTotali}
    </div>
    <img className="image-card"src={image} alt={mainTitle} />
    </div>
    <div className="title-container-card">
      <img className="small-image-card" src={smallImage} />
      <h6 className="main-title-card">{mainTitle} <span className="icon-card">< BsFillPatchCheckFill /></span></h6>
      </div>
      <h5 className="subtitle-card">{subtitle} <span className="icon-card-uno"><MdOutlineCopyright /></span></h5>
      <p className="main-content-card">{body}</p>
      <p className="price-title-card">{paragraph}<span className="price-tag-card">{price}</span>
     </p>
     <div className="btn-wrapper-card">
      <button className="btn-card">Add</button><span><button className="btn-card">Offer</button> </span>
      </div>
    </div>
  );
}

