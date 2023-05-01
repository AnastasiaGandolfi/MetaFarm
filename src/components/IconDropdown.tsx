import React, { useState } from "react";

export function IconDropdown({
  text,
  classe,
  icon,
  iconArray,
}: {
  text?: string;
  classe: string;
  icon: JSX.Element;
  iconArray: Array<JSX.Element>;
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
              <div className="css-20ggg8s" onClick={handleShow}>
                {item}{" "}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
