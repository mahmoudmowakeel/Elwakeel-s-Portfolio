import { usePortfolio } from "./PortfolioContext";

function Slider() {
  const { sliderRef, isFixedSlider } = usePortfolio();
  // console.log(Array.from(sliderRef?.current?.children)?.at(0).classList);
  return (
    <div className="hidden md:block h-[2150px]">
      <ul
        ref={sliderRef}
        className={`mt-20 font-bold flex flex-col gap-3 transition-all duration-700  ${
          isFixedSlider ? "sticky top-[270px]" : "static"
        } `}
      >
        <li className=" transition-all duration-300 active-slider">
          <a href="#skills">- Skills</a>
        </li>
        <li>
          <a href="#projects">- Projects</a>
        </li>
        <li>
          <a href="#certificates">- Certifcates</a>
        </li>
      </ul>
    </div>
  );
}

export default Slider;
