/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import firstImg from "../assets/img/piante_per_l_orto.jpg";
import secondImg from "../assets/img/orto-tramonto.jpg";
import thirdImg from "../assets/img/orto-grande.jpg";
import { Navbar } from "../components/Navbar";

const SEL = "custom-section";
const SECTION_SEL = `.${SEL}`;

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
const pluginWrapper = () => {
  /*
   * require('./fullpage.fadingEffect.min'); // Optional. Required when using the "fadingEffect" extension.
   */
};

const originalColors = ["#7AE19C", "#fff", "#7AE19C"];

export class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionsColor: [...originalColors],
      fullpages: [
        {
          text: "About the project",
          description: "lorem ipsum",
          style: {
            color: "white",
          },
          img: firstImg,
          id: 1,
        },
        {
          text: "Lorem ipsum",
          description: "lorem ipsum",
          style: { color: "black" },
          img: secondImg,
          id: 2,
        },
        {
          description: "lorem ipsum",
          text: "Lorem ipsum",
          style: { color: "white" },
          img: thirdImg,
          id: 3,
        },
      ],
    };
  }

  onLeave(origin, destination, direction) {
    console.log("onLeave", { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }

  render() {
    const { fullpages } = this.state;

    if (!fullpages.length) {
      return null;
    }

    return (
      <>
        <div className="App">
          <ReactFullpage
            debug /* Debug logging */
            // Required when using extensions
            pluginWrapper={pluginWrapper}
            // fullpage options
            licenseKey={"YOUR_KEY_HERE"} // Get one from https://alvarotrigo.com/fullPage/pricing/
            navigation
            anchors={["firstPage", "secondPage", "thirdPage"]}
            sectionSelector={SECTION_SEL}
            onLeave={this.onLeave.bind(this)}
            sectionsColor={this.state.sectionsColor}
            render={(comp) => (
                <ReactFullpage.Wrapper>
                {fullpages.map(({ text, style, img, description, id }) => (
                  <div
                    key={text}
                    className="custom-section fp-auto-height-responsive"
                    style={style}
                  >
                    <div
                      className="slide"
                      style={{
                        backgroundImage: `url(${img})`,
                        backgroundSize: "cover",
                        opacity: 0.6,
                      }}
                    >
                      <div className="text-container">
                        <div className="text-slide">
                          <h4 className="slide-title">{text}</h4>
                          <p className="slide-content">{description}</p>
                        </div>
                      </div>
                      {/* <div className="img-container">
                                            <img src={img} alt="image" />
                                        </div> */}
                    </div>
                  </div>
                ))}
              </ReactFullpage.Wrapper>
            )}
          />
        </div>
      </>
    );
  }
}
