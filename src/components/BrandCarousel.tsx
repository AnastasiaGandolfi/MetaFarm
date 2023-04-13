import { useRef, useState } from "react";

const indexPrev = 0;
const indexNext = 2;

export function BrandCarousel({elements, display}:{elements:JSX.Element[]; display:number}) {
  let carouslRef = useRef<HTMLInputElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    if (activeIndex < 3) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }
    carouslRef &&
      carouslRef.current &&
      carouslRef.current.scrollTo({
        behavior: "smooth",
        top: 0,
        left:
          carouslRef.current.scrollLeft - carouslRef.current.clientWidth * 0.5,
      });
    console.log(activeIndex);
  };

  const next = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(3);
    }
    carouslRef &&
      carouslRef.current &&
      carouslRef.current.scrollTo({
        behavior: "smooth",
        top: 0,
        left:
          carouslRef.current.scrollLeft + carouslRef.current.clientWidth * 0.5,
      });
    console.log(activeIndex);
  };

  return (
    <div className="carousel">
      <button
        disabled={activeIndex === indexPrev ? true : false}
        className="direction"
        onClick={prev}
      >
        <svg
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-test-id="topCreator-left-arrow"
        >
          <rect
            className="arrow"
            x="0.25"
            y="0.25"
            width="37.5"
            height="37.5"
            rx="18.75"
            fill="#239C82"
          ></rect>
          <path
            d="M20.332 23L16.332 19L20.332 15"
            style={
              activeIndex === indexPrev
                ? { stroke: "#626973" }
                : { stroke: "white" }
            }
            stroke-width="1.5px"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
          ></path>
          <rect
            x="0.25"
            y="0.25"
            width="37.5"
            height="37.5"
            rx="18.75"
            style={
              activeIndex === indexPrev
                ? { stroke: "#626973" }
                : { stroke: "white" }
            }
            stroke-width="0.5px"
            fill="none"
          ></rect>
        </svg>
      </button>
      <div className="card-div">
        <main className="card-scroll" ref={carouslRef}>
          {/* {CardArray.map((carousel, i) => (
            <CardBrandLogo src='' {...carousel} key={i} />
          ))} */}
          {elements.map((el:JSX.Element, i:number) => {
            return <div key={i}>{ el }</div>;
          })}
        </main>
      </div>
      <button
        disabled={activeIndex === indexNext ? true : false}
        className="direction"
        onClick={next}
      >
        <svg
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-test-id="topCreator-right-arrow"
        >
          <rect
            className="arrow"
            x="0.25"
            y="0.25"
            width="37.5"
            height="37.5"
            rx="18.75"
            fill="#239C82"
          ></rect>
          <path
            d="M17.668 23L21.668 19L17.668 15"
            style={
              activeIndex === indexNext
                ? { stroke: "#626973" }
                : { stroke: "white" }
            }
            stroke-width="1.5px"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
          ></path>
          <rect
            x="0.25"
            y="0.25"
            width="37.5"
            height="37.5"
            rx="18.75"
            style={
              activeIndex === indexNext
                ? { stroke: "#626973" }
                : { stroke: "white" }
            }
            stroke-width="0.5px"
            fill="none"
          ></rect>
        </svg>
      </button>
    </div>
  );
}
