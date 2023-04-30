import React, { useState } from "react";

export function OptionDropdown({
  classe,
  icon,
  iconArray,
  shareTextArray,
}: {
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
      </div>
      {flag && (
        <div className="css-sgtua3">
          <div className="css-19fff7r">
            {iconArray.map((item, index) => (
              <button onClick={handleShow}>
                {item}
                <span className="text-small">{shareTextArray.at(index)}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
