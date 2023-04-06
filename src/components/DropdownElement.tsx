import React, { useState } from "react";

export function DropdownElement({
  type,
  text,
  handleClick,
}: {
  type: string;
  text: string | JSX.Element;
  handleClick: Function;
}) {
  const [passText] = useState(`${text}`);
  return (
    <div className={type} onClick={(event) => handleClick(passText)}>
      {text}
    </div>
  );
}
