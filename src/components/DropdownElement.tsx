import React, { useState } from "react";

interface DropdownElementProps {
  type: string;
  text: string | JSX.Element;
  handle?: () => void;
}

export function DropdownElement({
  type,
  text,
  handle,
}: DropdownElementProps) {
  return (
    <div className={type} onClick={handle}>
      {text}
    </div>
  );
}