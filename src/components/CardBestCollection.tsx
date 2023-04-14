export default function CardBrandLogo({position,title,floorPrice,volumePrice,volumePercentage,floorPercentage,smallImage}:
    {position:number,title:string,floorPrice:string,volumePrice:string,volumePercentage:string,floorPercentage:string,smallImage:string}) {
    return(
        
            
        <div className="container-card-brand-logo">
            <span className="title-card-brand-logo">{title}</span>
    
        
             
            <div className="container-icon-card-brand-logo">
                 <b> {position}</b>  <img className="small-image-collection" src={smallImage}/>
             </div> 
            
            
            
            <div className="container-stats-card-brand-logo">

              <div className="container-name-value">
              <b>Floor:</b> <span  className="text-volume">Volume:</span>
               </div>

               <div className="container-stats-value">
                <b>{floorPrice}</b>   <span className="text-volume">  { volumePrice} </span> 
                </div>
               
                <div className="container-percentage-value">
                   <b>{floorPercentage}</b> <p>{volumePercentage}</p>
                </div>
            </div>

        </div>
    )
}