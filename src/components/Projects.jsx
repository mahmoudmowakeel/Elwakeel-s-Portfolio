import Figure from "./Figure";
import { usePortfolio } from "./PortfolioContext";

function Projects() {
  const { projectsRef } = usePortfolio();
  return (
    <div ref={projectsRef}>
      <h1 className="text-main text-center md:text-left text-xl md:ext-4xl mb-10 font-extrabold">
        - Projects
      </h1>
      <Figure
        title="W-electronics-store"
        bio=" W-Electronics-Store is an E-Commerce web application built using React. This project aims to provide a seamless shopping experience for users to browse and purchase electronics products. The application features a dynamic and responsive user interface, smooth animations, efficient state management, and robust form handling. It is designed to offer a complete shopping experience, from browsing products to managing the shopping cart and completing purchases."
        imgUrl="../img/p4.jpeg"
        pLink="https://e-commerce-electronics-038a93420c3c.herokuapp.com"
        name="p4"
        hasButton={true}
      />

      <Figure
        title="The Wild Oaisis Website"
        bio="The Wild Oasis Website is your go-to dashboard for hassle-free cabin bookings and customer management. Seamlessly navigate through our intuitive interface to reserve your next wilderness retreat and effortlessly keep track of customer details. Your adventure starts here."
        imgUrl="../img/p2.avif"
        pLink="https://the-wild-oaisis.netlify.app/"
        name="p2"
        hasButton={true}
      />
      <Figure
        title="JS Interview Test App"
        bio=" Welcome to JavaScript Mastery Test, the ultimate platform for
          assessing your JavaScript skills and knowledge. Whether you're a
          seasoned developer or just starting your journey in the world of
          JavaScript, our comprehensive test will challenge and evaluate your
          proficiency in various aspects of the language."
        imgUrl="../img/p1.avif"
        pLink="https://js-interview-elwakeel.netlify.app/welcome"
        name="p1"
        hasButton={true}
      />
      <Figure
        title="World Wise"
        bio=" Established a global exploration, World Wise tracks adventures by choosing visited countries from maps and
        leaving notes , Technologies used: HTML5, JavaScript, React JSX Vite, React Router, Context API, CSS Modules."
        imgUrl="../img/p5.jpeg"
        pLink="https://world-wise-appp.netlify.app"
        name="p5"
        hasButton={true}
      />
      <Figure
        title="Fast Pizza Menu Website"
        bio="Welcome to Fast Pizza! Your ultimate online destination for delicious pizza delivery straight to your doorstep. With just a few clicks, satisfy your cravings and enjoy piping hot pizzas from the comfort of your home. Order now and experience the convenience of speedy delivery and mouthwatering flavors."
        imgUrl="../img/p3.avif"
        pLink="https://fast-pizza-menu-delever.netlify.app/"
        name="p3"
        hasButton={true}
      />
    </div>
  );
}

export default Projects;
