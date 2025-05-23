import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { ArrowDownCircle } from 'react-bootstrap-icons';
import anilive from "../assets/img/anilive.png";
import github from "../assets/img/github.svg";
import linkedin from "../assets/img/linkedin.svg";
import twitter from "../assets/img/twitter.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/AnilResume.pdf';
    link.download = '/AnilResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <Navbar  expand="lg" className={scrolled ? "scrolled" : ''}>
      <Container>
        <Navbar.Brand href="#home">
          <img className="logoImage" src={anilive} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#ph" className={activeLink === 'ph' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('ph')}>Professional Highlights</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a target="_blank" href="https://www.linkedin.com/in/thakor-anil/"><img src={linkedin} alt="linkedIn" /></a>
              <a href="https://github.com/anilthakor7007/" target="_blank"><img src={github} alt="Github" /></a>
              <a target="_blank" href="https://x.com/@anilthakor7007"><img src={twitter} alt="x" /></a>
            </div>
            <button className="vvd" href="/public/AnilResume.pdf" download onClick={handleDownload}>
              <span>My Resume</span> &nbsp; <ArrowDownCircle size={22} />
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
