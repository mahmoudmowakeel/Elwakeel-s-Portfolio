import { ReactTyped } from "react-typed";

function Home() {
  return (
    <div className="mt-20 md:mt-[170px] text-center font-extrabold tracking-wide">
      <h5 className="text-sm md:text-2xl text-main mb-5">Hey ! I Am</h5>
      <h1 className="text-3xl md:text-[4rem]   mb-7">Mahmoud El-Wakeel</h1>
      <p className="text-lg md:text-2xl">
        I'm a
        <span className="ml-1 text-main underline">
          <ReactTyped
            strings={["Frontend Developer | React.Js."]}
            typeSpeed={50}
            loop
          />
        </span>
      </p>
    </div>
  );
}

export default Home;
