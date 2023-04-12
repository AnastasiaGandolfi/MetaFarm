import React, { ReactElement } from "react";
import { JsxElement } from "typescript";

export function Footer({
  text,
  icons,
  elements,
}: {
  text: string;
  icons: Array<ReactElement>;
  elements: Array<string>;
}) {
  return (
    <div className="footer-container">
      <div className="icon-text-container">
        <div className="icon-container">
          {icons.map((icon) => (
            <a href="#" className="icon">
              {icon}
            </a>
          ))}
        </div>
        <div className="text-brand">{text}</div>
      </div>
      <div className="link-container">
        {elements.map((element) => (
          <a href="#">{element}</a>
        ))}
      </div>
    </div>
  );
}
