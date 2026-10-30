import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/feelingProud.svg";
import Home2 from "./Home2";
import Type from "./Type";
import { FaUser, FaFileAlt, FaCode } from "react-icons/fa";
import { aboutCardData, homeData } from "./../Data";

function Home() {
  return (
    <section className="modern-home-wrapper">
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row className="align-items-center">
            <Col lg={7} md={12} className="home-header">
              <div className="hero-status-pill">
                <span className="status-dot"></span>
                <span>Senior Software Engineer at Lowe’s &nbsp;•&nbsp; Bengaluru, India</span>
              </div>

              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M <strong className="main-name">{aboutCardData.fullName}</strong>
              </h1>

              <div className="typewriter-container">
                <Type />
              </div>

              <p className="hero-lead-text">
                {homeData.introLine1}
              </p>

              {/* Personal Brand Action Buttons (Navigation to About & Resume) */}
              <div className="hero-cta-group">
                <Link to="/about" className="hero-btn-primary">
                  <FaUser />
                  <span>About Me</span>
                </Link>

                {/* <Link to="/resume" className="hero-btn-secondary">
                  <FaFileAlt />
                  <span>View Resume</span>
                </Link> */}
              </div>

              {/* Personal Brand Interests Strip */}
              <div className="brand-interests-bar">
                <span className="interest-pill">
                  <FaCode style={{ color: "#026670" }} /> AI SDLC
                </span>
                <span className="interest-pill">
                  <FaCode style={{ color: "#026670" }} /> React.js & Web Apps
                </span>
                <span className="interest-pill">
                  <FaCode style={{ color: "#026670" }} /> Enterprise Analytics
                </span>
                <span className="interest-pill">
                  <FaCode style={{ color: "#026670" }} /> Front-End Architecture
                </span>
              </div>
            </Col>

            <Col lg={5} md={12} className="text-center position-relative mt-5 mt-lg-0">
              <div className="hero-image-wrapper">
                <img
                  src={homeLogo}
                  alt={aboutCardData.fullName}
                  className="img-fluid hero-illustration"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Introduction and Personal Overview */}
      <Container>
        <Home2 />
      </Container>
    </section>
  );
}

export default Home;
