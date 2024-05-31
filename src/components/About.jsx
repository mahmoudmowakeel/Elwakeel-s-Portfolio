import { usePortfolio } from "./PortfolioContext";

function About() {
  const { aboutRef } = usePortfolio();
  console.log(aboutRef);
  return (
    <div
      ref={aboutRef}
      className="flex-row lg:flex gap-24 tracking-lg lg:tracking-[3px] pb-24 "
    >
      <div className="w-full lg:w-[50%] mt-20 ">
        <img
          className="lg:h-[420px] lg:w-[420px] md:h-[320px] md:w-[320px] h-[210px] w-[210px] mx-auto my-auto rounded-full border-4  border-main p-1 "
          src="../img/me.jpg"
          alt="myphoto"
        />
      </div>
      <div className="text-center lg:text-left mt-10">
        <h1 className="font-bold mb-16 text-lg md:text-[55px] ">About Me</h1>
        <p className="mb-8 text-md md:text-2xl text-trans">
          I'm a Junior Frontend Developer
        </p>
        <ul className="text-sm md:text-lg">
          <li className="mb-6">
            <span className="mr-2 md:mr-7 font-bold">Name:</span> Mahmoud
            El-Wakeel
          </li>
          <li className="mb-6">
            <span className="mr-2 md:mr-7 font-bold">Address:</span>{" "}
            Cairo, Egypt
          </li>
          <li className="mb-6">
            <span className="mr-2 md:mr-7 font-bold">Email:</span>
            m.wakeeel.mo@gmail.com
          </li>
          <li className="mb-6">
            <spa className="mr-2 md:mr-7 font-bold">Phone:</spa>+201013943913
          </li>
        </ul>
        <button className="bg-main text-white px-3 py-1 md:px-6 md:py-2 rounded-full text-md md:text-xl font-semibold mt-10     ">
          <a href="https://drive.google.com/file/d/14zugcBQYsas8_dQJPKfDxc3o5GsXPuTM/view?usp=sharing">Download CV</a>
        </button>
      </div>
    </div>
  );
}

export default About;
