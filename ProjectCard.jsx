import React, { useState } from "react";
import { Col, Row, Button } from "react-bootstrap";


export const ProjectCard = ({ title, description, Link, imgUrl }) => {
    return (
        <Col sm={6} md={4} className="mb-4 h-auto w-full">
            <div
                className="proj-imgbx glass-card"
                style={{
                    borderRadius: "20px",
                    background: "rgba(255, 255, 255, 0.15)",
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    border: "1px solid rgba(255, 255, 255, 0.18)",
                    overflow: "hidden",
                    position: "relative",
                    transition: "transform 0.2s",
                }}
            >
                <img
                    src={imgUrl}
                    alt=""
                    style={{
                        width: "100%",
                        height: "220px",
                        objectFit: "cover",
                        borderTopLeftRadius: "20px",
                        borderTopRightRadius: "20px",
                        borderBottom: "1px solid rgba(255,255,255,0.2)",
                    }}
                />
                <div
                    className="proj-txtx"
                    style={{
                        padding: "1.2rem",
                        color: "#fff",
                        textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                        background: "rgba(0,0,0,0.25)",
                        borderBottomLeftRadius: "20px",
                        borderBottomRightRadius: "20px",
                    }}
                >
                    <h4 style={{ fontWeight: 700, letterSpacing: "1px" }}>{title}</h4>
                    <span style={{ fontSize: "1rem", opacity: 0.85 }}>{description}</span>
                    <br />
                    <a
                        className="btn border-white mt-3"
                        href={Link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            background: "rgba(255,255,255,0.15)",
                            color: "#fff",
                            border: "1px solid rgba(255,255,255,0.5)",
                            backdropFilter: "blur(2px)",
                            borderRadius: "8px",
                            fontWeight: 600,
                            transition: "background 0.2s, color 0.2s",
                        }}
                    >
                        Live Demo
                    </a>
                </div>
            </div>
        </Col>
    );
};

// Slider component to show 6 cards at a time
export const ProjectCardSlider = ({ projects }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const cardsPerSlide = 6;
    const totalSlides = Math.ceil(projects.length / cardsPerSlide);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };
    const handleNext = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    const startIdx = currentSlide * cardsPerSlide;
    const visibleProjects = projects.slice(startIdx, startIdx + cardsPerSlide);

    return (
        <div>
            <Row>
                {visibleProjects.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
                ))}
            </Row>
            <div className="d-flex justify-content-center mt-3">
                <Button variant="outline-light" onClick={handlePrev} className="mx-2">Prev</Button>
                <span className="align-self-center">{currentSlide + 1} / {totalSlides}</span>
                <Button variant="outline-light" onClick={handleNext} className="mx-2">Next</Button>
            </div>
        </div>
    );
};