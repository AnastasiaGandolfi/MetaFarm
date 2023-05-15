import logoImage from "../assets/img/logo-nobg.png";
import { useTranslation } from "react-i18next";

export function IntroductionSection() {
  const { t } = useTranslation();

  return (
    <div className="introduction-section">
      <img src={logoImage} className="logo-image animate__animated animate__zoomIn " alt=""/>
      <h2 className="intro-text">{t("intro-text")}</h2>
      <a href="/about"><button className="intro-button"> {t("intro-button")}</button></a>
    </div>
  )
}
