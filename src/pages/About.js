/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import firstImg from "../assets/img/grano.jpg";
import secondImg from "../assets/img/phone.jpg";
import thirdImg from "../assets/img/campi.jpg";
import fourthImg from "../assets/img/spighe.jpg";
import fifthImg from "../assets/img/panorama.jpg";
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
                    text: "Invest in Sustainable Agriculture with Metafarm's Unique NFTs",
                    description: "The buying and selling of NFTs between agricultural companies and customers is here.",
                    img: firstImg,
                },
                {
                    text: "Discover the Benefits of Owning a Metafarm NFT Today",
                    description: "Metafarm NFTs offer a sustainable investment in local agriculture with exclusive rewards tailored to your support level.",
                    img: secondImg,
                },
                {
                    text: "From Type A to Type B",
                    description: "Type A NFTs from Metafarm offer a unique opportunity to support local agriculture while receiving exclusive benefits such as revenue sharing and customized merchandise, while Type B NFTs offer even greater rewards such as a higher revenue share and a monthly bottle of vinegar in addition to the weekly jar of DOC jam.",
                    img: thirdImg,
                },
                {
                    text: "We offer fair and transparent pricing",
                    description: "Metafarm allows you to invest in sustainable agriculture at a price that suits your budget.",
                    img: fourthImg,
                },
                {
                    text: "Do not hesitate to contact us",
                    description: "We are always available to answer any questions or clarifications you may have regarding the purchase of NFTs.",
                    img: fifthImg,
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
                        anchors={["firstPage", "secondPage", "thirdPage", "fourthPage", "fifthPage"]}
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
                                            }}
                                        >
                                            <div className="text-container">
                                                <div className="text-slide">
                                                    <h4 className="slide-title text-head">{text}</h4>
                                                    <p className="slide-content text-subtle">{description}</p>
                                                </div>
                                            </div>
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
