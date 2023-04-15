import React, { useState } from "react";

export function DropdownElement({
  type,
  text,
}: {
  type: string;
  text: string | JSX.Element;
}) {
  return <div className={type}>{text}</div>;
}
