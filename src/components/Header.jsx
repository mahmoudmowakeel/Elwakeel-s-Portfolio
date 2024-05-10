import { usePortfolio } from "./PortfolioContext";
import { LuMenu } from "react-icons/lu";

function Header() {
  const { headerIsFixed, headerRef, handleMenu } = usePortfolio();

  return (
    <>
      <div className="text-right md:hidden">
        <button onClick={() => handleMenu()} className="text-5xl">
          <LuMenu />
        </button>
      </div>
      <div
        className={` inset-0 mx-auto transition-all duration-300 ease-out font-semibold ${
          headerIsFixed
            ? "md:fixed lg:px-52 md:px-20  md:bg-white md:h-fit lg:pb-7 md:z-10 md:shadow-md"
            : ""
        }`}
      >
        <ul
          ref={headerRef}
          className={`bg-white/70 md:bg-main/0  hidden md:flex flex-row gap-10 text-center justify-between md:pt-10 ${
            headerIsFixed ? "mt-[-11px]" : ""
          }`}
        >
          <li className="active-header transition-all duration-300  hover:bg-main hover:font-semibold  md:hover:bg-white/0 py-[15px] md:border-b-0 border-b border-trans/30 ">
            <a
              className=" pb-[6px] md:hover:border-b-2 md:hover:border-main transition-all  md:duration-0 duration-300"
              href="#home"
            >
              Home
            </a>
          </li>
          <li className="transition-all duration-300  md:hover:bg-white/0 hover:bg-main hover:font-semibold py-[15px] md:border-b-0 border-b border-trans/30 ">
            <a
              href="#about"
              className="pb-[6px] md:hover:border-b-2 md:hover:border-main transition-all md:duration-0 duration-300"
            >
              About
            </a>
          </li>
          <li className="transition-all duration-300 md:hover:bg-white/0  hover:bg-main hover:font-semibold py-[15px] md:border-b-0 border-b border-trans/30 ">
            <a
              href="#skills"
              className="pb-[6px] md:hover:border-b-2 md:hover:border-main transition-all md:duration-0 duration-300"
            >
              Skills
            </a>
          </li>
          <li className="transition-all duration-300  md:hover:bg-white/0 hover:bg-main hover:font-semibold py-[15px] md:border-b-0 border-b border-trans/30 ">
            <a
              href="#projects"
              className="pb-[6px] md:hover:border-b-2 md:hover:border-main transition-all md:duration-0 duration-300"
            >
              Projects
            </a>
          </li>
          <li className="transition-all duration-300  md:hover:bg-white/0 hover:bg-main hover:font-semibold py-[15px] md:border-b-0 border-b border-trans/30 ">
            <a
              href="#certificates"
              className="pb-[6px] md:hover:border-b-2 md:hover:border-main transition-all md:duration-0 duration-300"
            >
              Certificates
            </a>
          </li>
          <li className="transition-all duration-300  md:hover:bg-white/0 hover:bg-main py-[15px] md:border-b-0  ">
            <a
              href="#contact"
              className="pb-[6px] md:hover:border-b-2 md:hover:border-main transition-all  md:duration-0 duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
