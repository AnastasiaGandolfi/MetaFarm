import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export function BackButton() {
  return (
    <div className="back-container">
      <Link to="/">
        <div className="css-nrqnxi">
          <div className="back-section">
            <IoChevronBackOutline />
          </div>
          <div className="back-section-text">
            Back
          </div>
        </div>
      </Link>
    </div>
  );
}
