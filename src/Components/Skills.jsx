import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { Container, Row, Col } from "react-bootstrap";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <div className="skills_list">
                <ul className="list">
                 <li>
  <span>Frontend Development: </span>
   Proficient in building responsive, user-centric web interfaces using HTML, CSS, and JavaScript. Experienced with modern frameworks like React, styling libraries such as Tailwind CSS and Bootstrap, and state management tools including Redux Toolkit and Zustand. Strong understanding of component-driven architecture, performance optimization, and cross-browser compatibility.
</li>

                  <li>
                    <span>JavaScript & TypeScript: </span>
                     Proficient in JavaScript (ES6+) and TypeScript, with strong
                    understanding of static typing, interfaces, and modern
                    development practices.
                  </li>
                  <li>
                    {" "}
                    <span>ReactJS & Next.js: </span>Skilled in building dynamic
                    user interfaces, single-page applications, and server-side
                    rendered applications with ReactJS and Next.js.
                  </li>
                  <li>
                    {" "}
                    <span>Databases: </span>Experience with MySQL and MongoDB
                    for database management.
                  </li>
                  <li>
                    {" "}
                    <span>Version Control: </span> Proficient in Git for version
                    control and GitHub for collaboration and code repository
                    management.
                  </li>
                  <li>
                    {" "}
                    <span>Design (Figma & Canva): </span>
                     Skilled in creating clean, modern UI/UX designs using Figma
                    for wireframing and prototyping, and Canva for quick,
                    visually appealing content creation.
                  </li>
                </ul>
              </div>{" "}
              <br />
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Frontend Develepment</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Backend Develepment</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Version Control</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Design Skills</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="bg image" />
    </section>
  );
};