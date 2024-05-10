import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { usePortfolio } from "./PortfolioContext";

function Contact() {
  const { contactTop } = usePortfolio();
  return (
    <div ref={contactTop} className="mb-20">
      <h1 className="text-center font-bold text-2xl md:text-5xl mb-10 tracking-wider">
        Contact Me
      </h1>
      <p className="text-trans text-sm md:text-md text-center w-[70%] mx-auto">
        Feel free to reach out via email or connect with me on social media. I'm
        here to help with any questions or feedback you may have. Looking
        forward to hearing from you!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-24">
        <section className="text-center flex flex-col gap-5 shadow-xl  px-10 py-10 lg:p-[24px]  mb-5 rounded-lg">
          <FaLinkedin className="mx-auto text-5xl lg:text-7xl text-main mb-4" />
          <span className="block mb-5 font-semibold tracking-wide">
            Linkedin
          </span>
          <p className="text-sm text-trans font-semibold hover:text-main hover:underline">
            <a
              href="https://www.linkedin.com/in/mahmoudmoelwakeel11/"
              target="_blank"
              rel="noreferrer"
            >
              /mahmoudmoelwakeel11
            </a>
          </p>
        </section>

        <section className="text-center flex flex-col gap-5 shadow-xl  px-10 py-10  lg:p-[24px]   mb-5 rounded-lg">
          <FaPhone className="mx-auto text-5xl lg:text-7xl text-main mb-4" />
          <span className="block mb-5 font-semibold tracking-wide">
            Phone Number
          </span>
          <p className="text-md text-trans font-semibold">+2 01013943913</p>
        </section>

        <section className="text-center flex flex-col gap-5 shadow-xl  px-10 py-10  lg:p-[24px]   mb-5 rounded-lg">
          <MdOutlineEmail className="mx-auto text-5xl lg:text-7xl text-main mb-4" />
          <span className="block mb-5 font-semibold tracking-wide">
            Email Address
          </span>
          <p className="text-sm  text-trans font-semibold">
            m.wakeeel.mo@gmail.com
          </p>
        </section>
      </div>
    </div>
  );
}

export default Contact;
