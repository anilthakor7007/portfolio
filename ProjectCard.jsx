import React, { useState } from "react";
import { Col, Row, Button } from "react-bootstrap";


export const ProjectCard = ({ title, description, Link, imgUrl }) => {
    return (
        <Col sm={6} md={4} className="mb-4">
            <div className="proj-imgbx">
                <img src={imgUrl} alt="" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span> <br />
                    <a className="btn border-white  mt-2" href={Link} target="_blank" rel="noopener noreferrer">Live Demo</a>
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