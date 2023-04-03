import "../assets/style/css/palette.css";
export function Palette() {
  return (
    <div class="container">
      <h1 class="title">Palette Colori</h1>
      <div class="palette-container">
        <div class="single-color-container">
          <div class="square dark-green"></div>
          <p class="rgb-code">#239C82</p>
          <p class="rgb-name">dark-green</p>
        </div>
        <div class="single-color-container">
          <div class="square mid-green"></div>
          <p class="rgb-code">#7AE19C</p>
          <p class="rgb-name">mid-green</p>
        </div>
        <div class="single-color-container">
          <div class="square light-green"></div>
          <p class="rgb-code">#ACE986</p>
          <p class="rgb-name">light-green</p>
        </div>
        <div class="single-color-container">
          <div class="square pastel-green"></div>
          <p class="rgb-code">#DBF0EC</p>
          <p class="rgb-name">pastel-green</p>
        </div>
        <div class="single-color-container">
          <div class="square white"></div>
          <p class="rgb-code">#FFFFFF</p>
          <p class="rgb-name">white</p>
        </div>
        <div class="single-color-container">
          <div class="square black"></div>
          <p class="rgb-code">#000000</p>
          <p class="rgb-name">black</p>
        </div>
      </div>
    </div>
  );
}
