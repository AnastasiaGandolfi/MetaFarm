import logoImage from "../assets/img/logo-nobg.png";
import { useTranslation } from "react-i18next";

export function IntroductionSection() {
  const { t } = useTranslation();

  return (
    <div className="header">
      // Content before waves
    <div className="introduction-section">
      <img src={logoImage} className="logo-image " alt=""/>
      <h2 className="intro-text">{t("intro-text")}</h2>
      <a href="/about"><button className="intro-button"> {t("intro-button")}</button></a>
    </div>
<div>
<svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
<defs>
<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
</defs>
<g className="parallax">
<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(29, 45, 43,0.7)" />
<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(29, 45, 43,0.5)" />
<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(29, 45, 43,0.3)" />
<use xlinkHref="#gentle-wave" x="48" y="7" fill="#1d2d2b" />
</g>
</svg>
</div>
    </div>
  )
}
