import React from "react";
export function DetailsElement({
  title,
  description,
  subtitle,
}: {
  title: string;
  description: string;
  subtitle: string;
}) {
  return (
    <div className="section-container">
      <p className="title-section">{title}</p>
      <p className="description-section">{description}</p>
      <p className="sub-title-section">{subtitle}</p>
    </div>
  );
}
