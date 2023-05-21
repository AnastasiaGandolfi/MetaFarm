import { useLocation } from "react-router-dom";
import smallImage from "../src/assets/images/small-image.avif";

type CardImage = {
  image: string;
  smallImage?: string;
  paragraph?: string;
};
// @ts-ignore

export function CardCollection({ image, smallImage, paragraph }: CardImage) {
  const location = useLocation();
  return (
    <div className="card-collection-wrapper" style={{ margin: "10px" }}>
      <img className="image-card-collection" src={image} alt="" />
      <div className="small-image-container">
        <img className="small-image-collection" src={smallImage} alt="" />
        {!location.pathname.startsWith("/single-nft-page/") && (
          <div className="card-collection-title-container">
            <span>
              {" "}
              <p className="card-collection-title">{paragraph}</p>{" "}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
