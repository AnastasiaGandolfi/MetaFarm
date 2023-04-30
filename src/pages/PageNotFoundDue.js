import React from 'react';
import pompelmoImage from "../assets/img/Pompelmo.jpg";
import fourOrangeImage from "../assets/img/fourorange (1).jpg";
import { Link } from 'react-router-dom';


function PageNotFound() {
  return (
    <div>
    <div className="page-not-found-due">
      <img className="four-image" src={fourOrangeImage} />
      <img className="pompelmo-image" src={pompelmoImage} />
      <img className="four-image" src={fourOrangeImage} />
      </div>
      <div className="page-not-found-wrapper">
        <h1><em>Oops!This is a shady page!</em></h1>
      <h1 className="page-not-found-title"> Pompelmo has taken over. You know what to do...</h1>
      <h2 className="page-not-found-title-due"> Go back to our Home Page to avoid the citrusy consequences!</h2>
      <button className="go-back-button">
          <Link to="/home" className="page-not-found-link">&#8592; Go Back</Link>
        </button>
  
      </div>
      </div>
  )
}

export default PageNotFound;