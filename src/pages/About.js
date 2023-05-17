import { Navbar } from "../components/Navbar";
import { FormField } from "../components/FormField";
import { CheckboxFormField } from "../components/CheckboxFormField";
import topImg from "../assets/img/uomini-d-affari.jpg";
import firstImg from "../assets/img/barattolo.jpg";
import secondImg from "../assets/img/vista-dall'alto.jpg";
import thirdImg from "../assets/img/ntf-about.png";
import lastImg from "../assets/img/money.png";
import { Button } from "../components/Button";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const MoveInLeft = batch(MoveIn(-1000, 0), FadeIn())
const MoveInRight = batch(MoveIn(1000, 0), FadeIn())
const FadeUp = batch(FadeIn(), Move());

export function About() {
    return (
        <>
            <div className="App">
                <div className="home-button-container">
                    <a href="/">
                        <button className="home-button">
                            Home
                        </button>
                    </a>
                </div>
                <ScrollContainer>
                    <ScrollPage page={0}>
                        <div className="custom-section fp-auto-height-responsive">
                            <div className="slide start-slide">
                                <div className="text-container">
                                    <div className="text-slide">
                                        <h4 className="slide-title text-head">Invest in Sustainable Agriculture with <span>Metafarm's</span> Unique NFTs</h4>
                                        <p className="slide-content text-subtle">The buying and selling of NFTs between agricultural companies and customers is here.</p>
                                        <div className="marketplace-button">
                                            <a href="/signup">
                                                <button className="register">Sign up</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-container">
                                    <img className="top-right-img" src={topImg} />
                                </div>
                            </div>
                        </div>
                    </ScrollPage>
                    <ScrollPage page={1}>
                        <Animator animation={MoveInLeft}>
                            <div className="custom-section fp-auto-height-responsive">
                                <div className="slide end-slide">
                                    <div className="img-container">
                                        <img className="img-first-page" src={firstImg} />
                                        <img className="img-first-page" src={secondImg} />
                                    </div>
                                    <div className="text-container">
                                        <div className="text-slide">
                                            <h4 className="slide-title text-head">Are you an agricultural company?</h4>
                                            <p className="slide-content text-subtle">Transform your agricultural assets into valuable NFTs with <span>Metafarm</span> and generate revenue for your company.</p>
                                            <div className="marketplace-button">
                                                <a href="/signup">
                                                    <button className="register">Sign up</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage page={2}>
                        <div className="custom-section fp-auto-height-responsive">
                            <Animator animation={MoveInRight}>
                                <div className="slide start-slide">
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
                                    <div className="img-container">
                                        <img className="right-img" src={thirdImg} />
                                    </div>
                                </div>
                            </Animator>
                        </div>
                    </ScrollPage>
                    <ScrollPage page={3}>
                        <Animator animation={MoveInLeft}>
                            <div className="custom-section fp-auto-height-responsive">
                                <div className="slide end-slide">
                                    <div className="img-container">
                                        <img className="right-img last-img" src={lastImg} />
                                    </div>
                                    <div className="text-container">
                                        <div className="text-slide">
                                            <h4 className="slide-title text-head">We offer fair and transparent pricing</h4>
                                            <p className="slide-content text-subtle"><span>Metafarm</span> allows you to invest in sustainable agriculture at a price that suits your budget.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage page={4}>
                        <div className="custom-section fp-auto-height-responsive">
                            <div className="slide center-slide">
                                <div className="text-container">
                                    <Animator animation={FadeUp}>
                                        <div className="text-slide">
                                            <h4 className="slide-title text-head">Subscribe for the latest news, drops & collectibles</h4>
                                            <div className="form-container">
                                                <FormField />
                                            </div>
                                            <span className="written-content">
                                                By entering my email and subscribing I confirm and agree to the
                                                above.
                                            </span>
                                        </div>
                                    </Animator>
                                </div>
                            </div>
                        </div>
                    </ScrollPage>
                </ScrollContainer>
            </div>
        </>
    );
}

