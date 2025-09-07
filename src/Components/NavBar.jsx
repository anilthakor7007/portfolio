import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { ArrowDownCircle } from 'react-bootstrap-icons';
import { motion, AnimatePresence } from "framer-motion";
import anilive from "../assets/img/anilive.png";
import github from "../assets/img/github.svg";
import linkedin from "../assets/img/linkedin.svg";
import twitter from "../assets/img/twitter.svg";

import TextPressure from './TextPressure';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
    link.download = 'AnilResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleViewResume = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const modalVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 25 } },
    exit: { opacity: 0, y: -80, scale: 0.95, transition: { duration: 0.2 } }
  };

  return (
    <>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ''}>
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
              <button className="vvd" onClick={handleViewResume}>
                <span className="">My Resume</span> &nbsp; 
                {/* <ArrowDownCircle size={22} /> */}
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(10, 10, 20, 0.85)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              backdropFilter: 'blur(6px) saturate(1.5)'
            }}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                background: 'linear-gradient(135deg, #232526 0%, #414345 100%)',
                borderRadius: '2rem',
                boxShadow: '0 8px 40px 0 rgba(0,0,0,0.45)',
                padding: '2.5rem 2rem 2rem 2rem',
                maxWidth: '95vw',
                // maxHeight: '95vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                border: '1.5px solid #3a3a3a',
                overflow: 'hidden',
                minWidth: '340px',
                minHeight: '340px',
                transition: 'box-shadow 0.2s',
              }}
            >
              <button onClick={handleCloseModal} style={{
                position: 'absolute',
                top: 18,
                right: 28,
                background: 'rgba(255,255,255,0.08)',
                border: 'none',
                fontSize: 32,
                cursor: 'pointer',
                color: '#fff',
                borderRadius: '50%',
                width: 44,
                height: 44,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                transition: 'background 0.2s',
              }}
                aria-label="Close modal"
                title="Close"
              >&times;</button>
              <iframe
                src="/AnilResume.pdf"
                title="Resume"
                style={{
                  width: '70vw',
                  height: '75vh',
                  border: '1px solid black',
                  borderRadius: '1rem',
                  marginBottom: '1.5rem',
                  background: '#181a1b',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.18)'
                }}
              />
              <button className="vvd" onClick={handleDownload} style={{
                marginTop: 8,
                background: 'linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: '2rem',
                padding: '0.7rem 2.2rem',
                fontWeight: 600,
                fontSize: '1.1rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                cursor: 'pointer',
                letterSpacing: '0.03em',
                transition: 'background 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <span>Download Resume</span> <ArrowDownCircle size={22} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
