import React, { useState } from "react";

export function IconDropdown({
  text,
  classe,
  icon,
  iconArray,
  shareTextArray,
}: {
  text?: string;
  classe: string;
  icon: JSX.Element;
  iconArray: Array<JSX.Element>;
  shareTextArray: Array<string>;
}) {
  const [flag, setFlag] = useState(false);
  function handleShow() {
    setFlag(!flag);
  }
  return (
    <div>
      <div className={classe} onClick={handleShow}>
        {icon}
        <div className="css-uvoz8d">{text}</div>
      </div>

      {flag && (
        <div className="css-sgtua3">
          <div className="css-19fff7r">
            {iconArray.map((item, index) => (
              <a href="#" onClick={handleShow}>
                {item}{" "}
                <span className="text-small">{shareTextArray.at(index)}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
