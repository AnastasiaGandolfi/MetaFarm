import React, { useState } from "react";
export function Details({
  text,
  classe,
  icon,
  link,
  elementsDetails,
}: {
  text: string;
  classe: string;
  icon: JSX.Element;
  link?: string;
  elementsDetails?: Array<JSX.Element>;
}) {
  const [flag, setFlag] = useState(false);
  const [opacity, setOpacity] = useState(0);
  function handleShow(): void {
    setFlag(!flag);
    setOpacity(1);
  }

  return (
    <div>
      {!link ? (
        <div className={classe}>
          <div className="text-container" onClick={handleShow}>
            {text}
            {icon}
          </div>
          {!flag ? null : (
            <div className="show-container">
              <div className="grid-container">
                {elementsDetails?.map((item) => (
                  <div>{item}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className={classe}>
          <div className="text-container">
            <a href="#">{text}</a>
            <a href="#">{icon}</a>
          </div>
        </div>
      )}
    </div>
  );
}
