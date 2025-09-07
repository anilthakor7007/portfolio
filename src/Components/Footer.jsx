import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap"
import github from "../assets/img/github.svg";
import linkedin from "../assets/img/linkedin.svg";
import twitter from "../assets/img/twitter.svg";
import anilive from "../assets/img/anilive.png";

export const Footer = () =>{


    return(

        <footer className="footer">
            <Container className="">
                <Row className="align-items-center ">
                    <Col sm={6} className="text-center mt-3">
                        <img src={anilive} alt="footer logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-center">
                        <div className="social-icon mt-5">
                        <a target="_blank" href="https://www.linkedin.com/in/thakor-anil/"><img src={linkedin} alt="linkedIn" /></a>
                        <a href="https://github.com/anilthakor7007/" target="_blank"><img src={github} alt="Github" /></a>
                        <a target="_blank" href="https://x.com/@anilthakor7007"><img src={twitter} alt="x" /></a>
                        </div>
                        <p>Copyright 2024. All Right Reserved.</p>
                    </Col>

                </Row>
            </Container>
        </footer>
    )
}
