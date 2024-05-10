import About from "./components/About";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { PortfolioProvider } from "./components/PortfolioContext";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Slider from "./components/Slider";
import ScrollAnimation from "react-animate-on-scroll";

function App() {
  return (
    <>
      <PortfolioProvider>
        <div id="home" className="relative pb-20 md:h-screen">
          <div className="absolute bg-main/10 w-[100%]  md:w-[50%] inset-0 after:absolute lg:after:left-[93%] md:after:left-[90%] after:rotate-45 after:bottom-[150px] after:bg-[#ebefff] z-[-1] after:w-[80px] after:h-[80px] "></div>
          <div className="container mx-auto">
            <nav>
              <div className="pt-4 lg:px-50 lg:mx-30  ">
                <Header />
              </div>
              <div className="container mx-auto">
                <Home />
              </div>
            </nav>
          </div>
        </div>
        <ScrollAnimation animateOnce animateIn="fadeIn" duration="2">
          <section id="about" className="w-[100%]">
            <div className="container mx-auto">
              <About />
            </div>
          </section>
        </ScrollAnimation>
        <div className="md:grid md:grid-cols-4 flex container relative mx-auto">
          <Slider />
          <div id="sec-container " className="container md:col-span-3">
            <ScrollAnimation animateOnce animateIn="fadeIn" duration="2">
              <section id="skills" className=" mx-auto mt-10 ">
                <Skills />
              </section>
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn="fadeIn" duration="2">
              <section id="projects" className=" mx-auto">
                <Projects />
              </section>
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn="fadeIn" duration="2">
              <section id="certificates" className=" mx-auto mt-14">
                <Certificates />
              </section>
            </ScrollAnimation>
          </div>
        </div>
        <ScrollAnimation animateOnce animateIn="fadeIn" duration="2">
          <section
            id="contact"
            className=" container text-center mx-auto mt-14"
          >
            <Contact />
          </section>
        </ScrollAnimation>
        <Footer />
      </PortfolioProvider>
    </>
  );
}

export default App;
