import React, { useRef, useEffect } from "react";
import pompelmoImage from "../assets/img/Pompelmo.png";
import fourOrangeImage from "../assets/img/fourorange (1).png";
import { Link } from "react-router-dom";
import "animate.css";

function PageNotFound() {
  const lineOneRef = useRef(null);
  const lineTwoRef = useRef(null);
  const lineThreeRef = useRef(null);

  useEffect(() => {
    lineThreeRef.current.classList.add("animate");
    return () => {
      lineThreeRef.current.classList.remove("animate");
    };
  }, [lineThreeRef]);

  const handleLineOneAnimationEnd = () => {
    lineTwoRef.current.style.opacity = "1";
    lineTwoRef.current.classList.add("animate");
    lineTwoRef.current.addEventListener("animationend", () => {
      lineThreeRef.current.style.opacity = "1";
      lineThreeRef.current.classList.add("animate");
    });
  };
  return (
    <div className="page-not-found-due" style={{marginTop:"20px"}}>
      <div className="text-container">
        <div className="terminal">
          <h1 className="error animate__animated animate__flash">
            Oops!{" "}
            <span className="errorcode">
              This is a shady page!
            </span>
          </h1>
          <p
            className="output typing-demo line-one"
            onAnimationEnd={handleLineOneAnimationEnd}
            ref={lineOneRef}
          >
            Pompelmo has taken over. You know what to do...
          </p>
          <p
            className="output typing-demo line-two"
            ref={lineTwoRef}
          >
            {" "}
            Go back to our Home Page to avoid the citrusy consequences!{" "}
            <Link to="/">go back</Link>
          </p>
          <p className="output typing-demo line-three" ref={lineThreeRef}>
            Good luck.
          </p>
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

