import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";

export function BackButton() {
  return (
    <div className="back-container">
      <div className="css-nrqnxi">
        <div className="back-section">
          <IoChevronBackOutline />
        </div>
        <div className="back-section-text">Back</div>
      </div>
    </div>
  );
}
