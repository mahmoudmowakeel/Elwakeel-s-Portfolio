import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { TbBrandCss3 } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { usePortfolio } from "./PortfolioContext";

function Skills() {
  const { skillsRef } = usePortfolio();
  return (
    <div ref={skillsRef} className="pb-24">
      <h1 className="text-main text-xl text-center md:text-left  md:text-4xl mb-10 font-extrabold ">
        - Skills
      </h1>
      <ul className="grid grid-cols-3 md:grid-cols-5 text-center">
        <li className="flex justify-center flex-col items-center gap-3 md:text-xl text-md hover:translate-y-[-8px] transition duration-[600ms] mb-2">
          <span className=" text-5xl md:text-8xl my-5">
            <FaHtml5 className=" text-5xl md:text-8xl text-[#df4a17]" />
          </span>
          Html 5
        </li>
        <li className="flex justify-center flex-col items-center gap-3 md:text-xl text-md hover:translate-y-[-8px] transition duration-[600ms] mb-2">
          <span className=" text-5xl md:text-8xl my-4">
            <TbBrandCss3 className=" text-5xl md:text-8xl text-[#0068ba]" />
          </span>
          Css 3
        </li>
        <li className="flex justify-center flex-col items-center gap-3 md:text-xl text-md hover:translate-y-[-8px] transition duration-[600ms] mb-2">
          <span className=" text-5xl md:text-8xl my-4">
            <FaReact className=" text-5xl md:text-8xl text-[#00d2f7]" />
          </span>
          React.JS
        </li>
        <li className="flex justify-center flex-col items-center gap-3 md:text-xl text-md hover:translate-y-[-8px] transition duration-[600ms] mb-2">
          <span className=" text-5xl md:text-8xl my-4">
            <FaBootstrap className=" text-5xl md:text-8xl text-[#7a10f2]" />
          </span>
          Bootstrap
        </li>
        <li className="flex justify-center flex-col items-center gap-3 md:text-xl text-md hover:translate-y-[-8px] transition duration-[600ms] mb-2">
          <span className=" text-5xl md:text-8xl my-4">
            <SiRedux className=" text-5xl md:text-8xl text-[#7248b6]" />
          </span>
          Redux.JS
        </li>
        <li className="flex justify-center flex-col items-center gap-3 md:text-xl text-md hover:translate-y-[-8px] transition duration-[600ms] mb-2">
          <span className=" text-5xl md:text-8xl my-4">
            <SiTailwindcss className=" text-5xl md:text-8xl text-[#42a3ad]" />
          </span>
          Tailwind.css
        </li>
        <li className="flex justify-center flex-col items-center gap-3 md:text-xl text-md hover:translate-y-[-8px] transition duration-[600ms] mb-2">
          <span className=" text-5xl md:text-8xl my-4">
            <IoLogoJavascript className=" text-5xl md:text-8xl text-[#efd81d]" />
          </span>
          Javascript
        </li>
        <li className="flex justify-center flex-col items-center gap-3 md:text-xl text-md hover:translate-y-[-8px] transition duration-[600ms] mb-2">
          <span className=" text-5xl md:text-8xl my-4">
            <SiTypescript className=" text-5xl md:text-8xl text-[#2f74c0]" />
          </span>
          Typescript
        </li>
        <li className="flex justify-center flex-col items-center gap-3 md:text-xl text-md hover:translate-y-[-8px] transition duration-[600ms] mb-2">
          <span className=" text-5xl md:text-8xl my-4">
            <FaSass className=" text-5xl md:text-8xl text-[#e53e76]" />
          </span>
          Sass
        </li>
        <li className="flex justify-center flex-col items-center gap-3 md:text-xl text-md hover:translate-y-[-8px] transition duration-[600ms] mb-2">
          <span className=" text-5xl md:text-8xl my-4">
            <FaGit className="text-[#f15233]" />
          </span>
          Git
        </li>
        <li className="flex justify-center flex-col items-center gap-3 md:text-xl text-md hover:translate-y-[-8px] transition duration-[600ms] mb-2">
          <span className=" text-5xl md:text-8xl my-4">
            <IoLogoGithub />
          </span>
          Github
        </li>
      </ul>
    </div>
  );
}

export default Skills;
