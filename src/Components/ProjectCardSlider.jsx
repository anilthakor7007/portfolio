import React, { useState } from "react";
import { Row, Button } from "react-bootstrap";
import { ProjectCard } from "../../ProjectCard";

const ProjectCardSlider = ({ projects }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("next");

  // Responsive cards per slide
  const getCardsPerSlide = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 576) return 1; // mobile
      if (window.innerWidth < 992) return 3; // tablet
    }
    return 6; // desktop
  };

  const [cardsPerSlide, setCardsPerSlide] = useState(getCardsPerSlide());

  React.useEffect(() => {
    const handleResize = () => {
      setCardsPerSlide(getCardsPerSlide());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(projects.length / cardsPerSlide);

  const handlePrev = () => {
    setDirection("prev");
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };
  const handleNext = () => {
    setDirection("next");
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const startIdx = currentSlide * cardsPerSlide;
  const visibleProjects = projects.slice(startIdx, startIdx + cardsPerSlide);

  return (
    <div style={{ overflow: "hidden", position: "relative" }}>
      <div
        className={`slider-row transition-slide ${direction}`}
        style={{
          display: "flex",
          transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)",
          transform: `translateX(0)`
        }}
      >
        <Row style={{ width: "100%", margin: 0 }}>
          {visibleProjects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </Row>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <Button variant="outline-light" onClick={handlePrev} className="mx-2">Prev</Button>
        <span className="align-self-center">{currentSlide + 1} / {totalSlides}</span>
        <Button variant="outline-light" onClick={handleNext} className="mx-2">Next</Button>
      </div>
      <style>{`
        .transition-slide {
          will-change: transform;
        }
        .transition-slide.next {
          animation: slideInFromRight 0.6s;
        }
        .transition-slide.prev {
          animation: slideInFromLeft 0.6s;
        }
        @keyframes slideInFromRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes slideInFromLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default ProjectCardSlider;
