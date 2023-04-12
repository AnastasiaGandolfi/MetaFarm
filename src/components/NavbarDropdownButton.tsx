import React, { useEffect, useRef, useState } from "react";
import { BiCaretDownCircle } from "react-icons/bi";

export function NavbarDropdownButton({
  type,
  text,
  elements,
}: {
  type: string;
  text: string | JSX.Element;
  elements: Array<string>;
}) {
  const [show, setShow] = useState(false);
  let menuRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    /*Uso useEffect per gestire il side effect sui componenti*/
    let handler = (e: { target: any }) => {
      /*sostanzialmente, se il il "click" arriva fuori dal componente con la ref chiudi la lista di DropDown */
      if (!menuRef.current?.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  function handleVisibility() {
    setShow((flag) => !flag);
  }
  return (
    <div>
      <div className={type} onClick={handleVisibility}>
        {text}
        <BiCaretDownCircle className="dropdown-icon" />
      </div>
      {show && (
        <div className="navbar-dropdown-cornice" ref={menuRef}>
          <div className="navbar-dropdown-window">
            {elements.map((item) => (
              <a
                href="#"
                onClick={handleVisibility}
                className="navbar-dropdown-element"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
