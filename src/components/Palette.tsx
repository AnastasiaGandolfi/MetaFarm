
export function Palette() {
  return (
    <div className="container">
      <h1 className="title">Palette Colori</h1>
      <div className="palette-container">
        <div className="single-color-container">
          <div className="square dark-green"></div>
          <p className="rgb-code">$darkgreen</p>
          <p className="rgb-name">dark-green</p>
        </div>
        <div className="single-color-container">
          <div className="square mid-green"></div>
          <p className="rgb-code">$mid-green</p>
          <p className="rgb-name">mid-green</p>
        </div>
        <div className="single-color-container">
          <div className="square light-green"></div>
          <p className="rgb-code">$light-green</p>
          <p className="rgb-name">light-green</p>
        </div>
        <div className="single-color-container">
          <div className="square pastel-green"></div>
          <p className="rgb-code">$pastel-green</p>
          <p className="rgb-name">pastel-green</p>
        </div>
        <div className="single-color-container">
          <div className="square white"></div>
          <p className="rgb-code">$white</p>
          <p className="rgb-name">white</p>
        </div>
        <div className="single-color-container">
          <div className="square black"></div>
          <p className="rgb-code">$black</p>
          <p className="rgb-name">black</p>
        </div>
      </div>
    </div>
  );
}
