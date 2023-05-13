import logoImage from "../assets/img/logo-nobg.png"

export function IntroductionSection() {

  return (
    <div className="introduction-section">
      <img src={logoImage} className="logo-image animate__animated animate__zoomIn " alt=""/>
      <h2 className="intro-text">Find out more about the project</h2>
      <a href="/about"><button className="intro-button">Discover now!</button></a>
    </div>
  )
}
