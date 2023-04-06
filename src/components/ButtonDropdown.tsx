import React, { useEffect, useState, useRef } from "react";
import { BiCaretDownCircle } from "react-icons/bi";
import { DropdownElement } from "./DropdownElement";

export function ButtonDropdown({
  type,
  text,
}: {
  type: string;
  text: string | JSX.Element;
}) {
  const [show, setShow] =
    useState(
      false
    ); /*show viene usato per mostrare o nascondere gli elementi presenti nel Dropdown, setShow per settare semplicemente show  */
  const [textReform, setText] =
    useState(
      text
    ); /*TesxtReform viene usato per copiare il testo che gli viene passato come props, non viene usato direttamente "text" perchè successivamente sarà necessario cambiarne il valore tramite setText */
  let menuRef =
    useRef<HTMLInputElement>(
      null
    ); /* menuRef viene usato per tenere conto dello scope per gestire i click all'interno o all'esterno della finestra di interesse*/

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
    /*Gestisce la visibilità della lista dal bottone attraverso un flag */
    setShow((flag) => !flag);
  }

  const handleClick = (textToChange: string) => {
    /*gestisce la visibilità della lista attraverlo l'elemento Dropdown sempre attraverso il flag, e cambiando anche la scritta del bottone */
    setText(textToChange);
    setShow((flag) => !flag);
  };
  return (
    <div>
      <button className={type} onClick={handleVisibility}>
        {textReform}
        <BiCaretDownCircle className="dropdown-icon" />
      </button>
      {show === false ? null : (
        <div className="dropdown-cornice" ref={menuRef}>
          <div className="dropdown-window">
            <DropdownElement
              type="dropdown-element"
              text="Sales Volume"
              handleClick={handleClick}
            />
            <DropdownElement
              type="dropdown-element"
              text="Most Likes"
              handleClick={handleClick}
            />
            <DropdownElement
              type="dropdown-element"
              text="Most Views"
              handleClick={handleClick}
            />
          </div>
        </div>
      )}
    </div>
  );
}
