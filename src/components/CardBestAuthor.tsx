import { TbDiscountCheckFilled } from "react-icons/tb"
import { TbCircle1Filled } from "react-icons/tb"
import CardBrandLogo from "./CardBrandLogo";
export default function CardBestAuthor({paragraph, name,src}:{paragraph:string;name:string,src:string}) {
return(
    <div className="container-card-best-author" style={{margin:"10px"}}>
      <div className="container-name-e-logo">
    <div className="container-card-author-logo-name">
    <CardBrandLogo name={name} src={src} />
    <div className="verified-logo-card-best-author"> <TbDiscountCheckFilled/></div>
    </div>
      </div>
     <p className="card-best-author-title"> <TbCircle1Filled/> {paragraph}</p>
    </div>
)
}