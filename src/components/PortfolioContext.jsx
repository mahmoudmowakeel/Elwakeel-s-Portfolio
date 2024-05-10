import { createContext, useContext, useEffect, useRef, useState } from "react";

const PortfolioContext = createContext();

function PortfolioProvider({ children }) {
  const [headerIsFixed, setHeaderIsFixed] = useState(false);
  const [isFixedSlider, setIsFixedSlider] = useState(true);
  const sliderRef = useRef(null);
  const headerRef = useRef(null);
  const contactTop = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const certificatesRef = useRef(null)

  // Get Distance From An Element To Top

  function calculateDistanceToBody(element) {
    var elementRect = element.current.getBoundingClientRect(); // Get bounding rectangle of target element
    return elementRect.top;
  }

  // Handle Menu In Resposive Pages

  function handleMenu() {
    headerRef?.current?.classList.toggle("hidden");
  }

  // Active The Selected Slide

  function handleAvtiveSlider() {
    const slideChildren = Array.from(sliderRef?.current?.children);
    slideChildren?.map((child) =>
      child.addEventListener("click", () => {
        slideChildren?.forEach(function (li) {
          li?.classList.remove("active-slider");
        });
        child?.classList.add("active-slider");
      })
    );
  }

  // active The Selected Header

  function handleAvtiveHeader() {
    const headerChildren = Array.from(headerRef?.current?.children);
    headerChildren?.map((child) =>
      child.addEventListener("click", () => {
        headerChildren?.forEach(function (li) {
          li?.classList.remove("active-header");
        });
        child?.classList.add("active-header");
      })
    );
  }

  useEffect(function () {
    handleAvtiveSlider();
    handleAvtiveHeader();
  }, []);

  



  useEffect(function() {
    window.addEventListener("scroll", function() {
      let distance = calculateDistanceToBody(aboutRef);
      const headerChildren = Array.from(headerRef?.current?.children);
      
      if(distance <= 200 ) {
        headerChildren?.map(function(li) {
          let removeHeader =  li?.classList.remove("active-header")
          return removeHeader
        })

        headerChildren[1].classList.add("active-header")
      }
      else if(distance > 200){
        headerChildren?.map(function(li) {
          let removeHeader =  li?.classList.remove("active-header")
          return removeHeader
        })

        headerChildren[0].classList.add("active-header")
      }
    })
  })
  useEffect(function() {
    window.addEventListener("scroll", function() {
      let distance = calculateDistanceToBody(skillsRef);
      const headerChildren = Array.from(headerRef?.current?.children);
      const slideChildren = Array.from(sliderRef?.current?.children);
      if(distance <= 200 ) {
        slideChildren?.map(function(child)  {
          let removeSlider = child?.classList.remove("active-slider")
          return removeSlider
    }
        ); 
        headerChildren?.map(function(li) {
          let removeHeader =  li?.classList.remove("active-header")
          return removeHeader
        })
        
        slideChildren[0].classList.add("active-slider")
        headerChildren[2].classList.add("active-header")

      }
    })
  })


  
  useEffect(function() {
    window.addEventListener("scroll", function() {
      let distance = calculateDistanceToBody(projectsRef);
      const headerChildren = Array.from(headerRef?.current?.children);
      const slideChildren = Array.from(sliderRef?.current?.children);
      if(distance <= 200 ) {
        slideChildren?.map(function(child)  {
          let remove = child?.classList.remove("active-slider")
          return remove
    }
        );
        headerChildren?.map(function(li) {
          let removeHeader =  li?.classList.remove("active-header")
          return removeHeader
        })
        slideChildren[1].classList.add("active-slider")
        headerChildren[3].classList.add("active-header")

      }
    })
  })
  useEffect(function() {
    window.addEventListener("scroll", function() {
      let distance = calculateDistanceToBody(certificatesRef);
      const headerChildren = Array.from(headerRef?.current?.children);
      const slideChildren = Array.from(sliderRef?.current?.children);
      if(distance <= 200 ) {
        slideChildren?.map(function(child)  {
          let remove = child?.classList.remove("active-slider")
          return remove
    }
        );

        headerChildren?.map(function(li) {
          let removeHeader =  li?.classList.remove("active-header")
          return removeHeader
        })

        slideChildren[2].classList.add("active-slider")
        headerChildren[4].classList.add("active-header")

      }
    })
  })

  // To Stop Slider From Being Fixed

  useEffect(function () {
    window.addEventListener("scroll", function () {
      const headerChildren = Array.from(headerRef?.current?.children);
      let distance = calculateDistanceToBody(contactTop);
      if (distance <= 200) {
        setIsFixedSlider(false);
        headerChildren?.map(function(li) {
          let removeHeader =  li?.classList.remove("active-header")
          return removeHeader
        })
        headerChildren[5].classList.add("active-header")
      } else {
        setIsFixedSlider(true);
      }
    });
  });

  useEffect(function () {
    window.addEventListener("scroll", function () {
      var distance = calculateDistanceToBody(projectsRef);
      if (distance <= 200) {
        handleAvtiveHeader();
       
      } else {
        handleAvtiveSlider();
      }
    });
  }, []);

  // Make The Header Fixed

  useEffect(
    function () {
      const handleScroll = () => {
        if (window.scrollY > 200) {
          setHeaderIsFixed(true);
        } else {
          setHeaderIsFixed(false);
        }
      };
      window.addEventListener("scroll", handleScroll);

      // Cleanup
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    },
    [headerIsFixed, setHeaderIsFixed]
  );

  return (
    <PortfolioContext.Provider
      value={{
        headerIsFixed,
        setHeaderIsFixed,
        sliderRef,
        contactTop,
        isFixedSlider,
        headerRef,
        aboutRef,
        handleMenu,
        skillsRef,
        projectsRef,
        certificatesRef
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) return new Error("outOFRange");
  return context;
}

export { usePortfolio, PortfolioProvider };
