 import React from "react";
 import pompelmoImage from "../assets/img/Pompelmo.png";
 import fourOrangeImage from "../assets/img/fourorange (1).png";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
      <div className="page-not-found-due">
        <div className="text-container">
          <div className="terminal">
            <h1>Oops! <span className="errorcode">This is a shady page!</span></h1>
            <p className="output">Pompelmo has taken over. You know what to do...</p>
            <p className="output"> Go back to our Home Page to avoid the citrusy consequences! <Link to="/home">go back</Link></p>
            <p className="output">Good luck.</p>
          </div>
        <div className="image-container">
          <img className="four-image" src={fourOrangeImage} />
          <img className="pompelmo-image" src={pompelmoImage} />
          <img className="four-image" src={fourOrangeImage} />
        </div>
      <div className="noise"></div>
      <div className="overlay"></div>
      </div>
      </div>
  
  );
}


export default PageNotFound;

