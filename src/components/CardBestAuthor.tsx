import CardBrandLogo from "./CardBrandLogo";
export default function CardBestAuthor({paragraph}:{paragraph:string}) {
return(
    <div className="container-card-best-author">
    <div className="container-card-author-logo-name">
    <CardBrandLogo name=" Aston Martin F1 " src="https://www.laminam.com/wp-content/uploads/2020/08/Collection-Bianco-Assoluto.jpg" />
      </div>
     <p className="card-best-author-title">{paragraph}</p>
    </div>
)
}