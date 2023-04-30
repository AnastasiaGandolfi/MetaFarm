import React from 'react';
import orangeImage from "../assets/img/Drunkorange.jpg";
import fourImage from "../assets/img/Four.jpg";


function PageNotFound() {
  return (
    <div>
    <div className="page-not-found">
      <img className="four-image" src={fourImage} />
      <img className="orange-image" src={orangeImage} />
      <img className="four-image" src={fourImage} />
      </div>
      <div className="page-not-found-wrapper">
      <h1 className="page-not-found-title"> "Oops, It seems like you're getting lost. It's time to back home."</h1>
      </div>
      </div>
  )
}

export default PageNotFound;
