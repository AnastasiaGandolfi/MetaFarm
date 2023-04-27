/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import firstImg from "../assets/img/grano.jpg";
import secondImg from "../assets/img/phone.jpg";
import thirdImg from "../assets/img/panorama.jpg";
import fourthImg from "../assets/img/spighe.jpg";
import fifthImg from "../assets/img/campi.jpg";
import { Navbar } from "../components/Navbar";
import { FormField } from "../components/FormField";
import { CheckboxFormField } from "../components/CheckboxFormField";
import { Button } from "../components/Button";

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
                    text: "",
                    description: "",
                    img: firstImg,
                },
                {
                    text: "",
                    description: "",
                    img: secondImg,
                },
                {
                    text: "",
                    description: "Type A NFTs from Metafarm offer a unique opportunity to support local agriculture while receiving exclusive benefits such as revenue sharing and customized merchandise, while Type B NFTs offer even greater rewards such as a higher revenue share and a monthly bottle of vinegar in addition to the weekly jar of DOC jam.",
                    img: thirdImg,
                },
                {
                    text: "",
                    description: "",
                    img: fourthImg,
                },
                {
                    text: "",
                    description: "",
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
                            <div>
                                <ReactFullpage.Wrapper>
                                    <div
                                        key="firstPage"
                                        className="custom-section fp-auto-height-responsive"
                                    >
                                        <div
                                            className="slide"
                                            style={{
                                                backgroundImage: `url(${firstImg})`,
                                            }}
                                        >
                                            <div className="text-container">
                                                <div className="text-slide">
                                                    <h4 className="slide-title text-head">Invest in Sustainable Agriculture with <span>Metafarm's</span> Unique NFTs</h4>
                                                    <p className="slide-content text-subtle">The buying and selling of NFTs between agricultural companies and customers is here.</p>
                                                    <div className="marketplace-button">
                                                        <a href="/login">
                                                            <button className="register">Sign up</button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ReactFullpage.Wrapper>
                                <ReactFullpage.Wrapper>
                                    <div
                                        key="secondPage"
                                        className="custom-section fp-auto-height-responsive"
                                    >
                                        <div
                                            className="slide"
                                            style={{
                                                backgroundImage: `url(${secondImg})`,
                                            }}
                                        >
                                            <div className="text-container">
                                                <div className="text-slide">
                                                    <h4 className="slide-title text-head">Discover the Benefits of Owning a <span>Metafarm</span> NFT Today</h4>
                                                    <p className="slide-content text-subtle">Metafarm NFTs offer a sustainable investment in local agriculture with exclusive rewards tailored to your support level.</p>
                                                    <div className="button-container">
                                                        <a href="/marketplace">
                                                            <button className="register">View Marketplace</button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ReactFullpage.Wrapper>
                                <ReactFullpage.Wrapper>
                                    <div
                                        key="thirdPage"
                                        className="custom-section fp-auto-height-responsive"
                                    >
                                        <div
                                            className="slide"
                                            style={{
                                                backgroundImage: `url(${thirdImg})`,
                                            }}
                                        >
                                            <div className="text-container">
                                                <div className="text-slide">
                                                    <h4 className="slide-title text-head">Are you an agricultural company?</h4>
                                                    <p className="slide-content text-subtle">Transform your agricultural assets into valuable NFTs with <span>Metafarm</span> and generate revenue for your company.</p>
                                                    <div className="marketplace-button">
                                                        <a href="/login">
                                                            <button className="register">Sign up</button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ReactFullpage.Wrapper>
                                <ReactFullpage.Wrapper>
                                    <div
                                        key="fourthPage"
                                        className="custom-section fp-auto-height-responsive"
                                    >
                                        <div
                                            className="slide"
                                            style={{
                                                backgroundImage: `url(${fourthImg})`,
                                            }}
                                        >
                                            <div className="text-container">
                                                <div className="text-slide">
                                                    <h4 className="slide-title text-head">We offer fair and transparent pricing</h4>
                                                    <p className="slide-content text-subtle"><span>Metafarm</span> allows you to invest in sustainable agriculture at a price that suits your budget.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ReactFullpage.Wrapper>
                                <ReactFullpage.Wrapper>
                                    <div
                                        key="fifthPage"
                                        className="custom-section fp-auto-height-responsive"
                                    >
                                        <div
                                            className="slide"
                                            style={{
                                                backgroundImage: `url(${fifthImg})`,
                                            }}
                                        >
                                            <div className="text-container">
                                                <div className="text-slide">
                                                    <h4 className="slide-title text-head">Subscribe for the latest news, drops & collectibles</h4>
                                                    <FormField />
                                                    <CheckboxFormField />{" "}
                                                    <span className="written-content">
                                                        By entering my email and subscribing I confirm and agree to the
                                                        above.
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ReactFullpage.Wrapper>
                            </div>
                        )}
                    />
                </div>
            </>
        );
    }
}
