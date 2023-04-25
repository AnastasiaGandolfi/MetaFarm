import React from "react";

export function TagTable({ text }: { text: string }) {
  return (
    <div className="single-tag-detail">
      <div className="single-tag">{text}</div>
    </div>
  );
}
