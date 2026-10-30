import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/manOnTable.svg";
import Toolstack from "./Toolstack";
import Osstack from "./Osstack";
import { FaArrowRight } from "react-icons/fa";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        {/* =========================================
            About Overview & Bio
            ========================================= */}
        <Row style={{ justifyContent: "center", padding: "10px" }} className="align-items-center mb-5">
          <Col
            lg={7}
            md={12}
            style={{
              paddingTop: "20px",
              paddingBottom: "30px",
            }}
          >
            <div className="section-badge-pill">BIOGRAPHY</div>
            <h1 className="section-heading-text mb-4">
              Know Who <strong className="purple">I Am</strong>
            </h1>
            <Aboutcard />
          </Col>

          <Col
            lg={5}
            md={12}
            className="about-img text-center"
          >
            <div className="about-img-box">
              <img src={laptopImg} alt="Raja Ravi Kumar" className="img-fluid" />
            </div>
          </Col>
        </Row>

        {/* =========================================
            Professional Skillsets
            ========================================= */}
        <div className="my-5">
          <div className="text-center mb-4">
            <div className="section-badge-pill">TECH ECOSYSTEM</div>
            <h2 className="section-heading-text">
              Professional <strong className="purple">Skillset</strong>
            </h2>
            <p className="section-sub-text">Technologies, languages, and frameworks I work with</p>
          </div>
          <Techstack />
        </div>

        {/* =========================================
            Tools & Workflows
            ========================================= */}
        <div className="my-5">
          <div className="text-center mb-4">
            <div className="section-badge-pill">DEVELOPER WORKFLOW</div>
            <h2 className="section-heading-text">
              <strong className="purple">Tools</strong> I Use
            </h2>
            <p className="section-sub-text">Productivity tools, testing utilities, and DevOps</p>
          </div>
          <Toolstack />
        </div>

        {/* =========================================
            Operating Systems
            ========================================= */}
        <div className="my-5">
          <div className="text-center mb-4">
            <div className="section-badge-pill">ENVIRONMENTS</div>
            <h2 className="section-heading-text">
              <strong className="purple">Operating Systems</strong>
            </h2>
            <p className="section-sub-text">Operating environments and platform systems</p>
          </div>
          <Osstack />
        </div>

        {/* =========================================
            Bottom Navigation Callout (No PDF, links to Resume)
            ========================================= */}
        <div className="about-cta-card text-center my-5">
          <h3 className="about-cta-title">Looking for full professional & career details?</h3>
          <p className="about-cta-desc">
            Explore my complete experience timeline, technical skills matrix, and achievements.
          </p>
          <div className="d-flex justify-content-center">
            <Link to="/resume" className="hero-btn-primary">
              <span>View Professional Resume</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default About;
