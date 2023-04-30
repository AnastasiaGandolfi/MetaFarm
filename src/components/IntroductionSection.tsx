import logoImage from "../assets/img/logo-nobg.png"

export function IntroductionSection() {

  return (
    <div className="introduction-section">
      <img src={logoImage} className="logo-image animate__animated animate__zoomIn " />
      <h2 className="intro-text">Find out more about the project</h2>
      <button className="intro-button">Check out</button>
    </div>
  )
}
