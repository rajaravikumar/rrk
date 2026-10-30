import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn, FaGlobe } from "react-icons/fa";
import { aboutCardData, socialMediaUrl } from "./Data";

function Footer() {
  return (
    <footer className="modern-footer">
      <Container>
        <Row className="align-items-center py-4 border-bottom border-secondary-subtle">
          <Col lg={5} md={12} className="text-center text-lg-left mb-3 mb-lg-0">
            <h3 className="footer-brand-title">{aboutCardData.fullName}</h3>
            <p className="footer-brand-sub">
              Full Stack Developer & Software Engineer &nbsp;•&nbsp; Bengaluru, India
            </p>
          </Col>

          <Col lg={4} md={6} className="text-center mb-3 mb-md-0">
            <div className="footer-quick-links">
              <Link to="/" className="footer-nav-link">Home</Link>
              <span className="footer-link-divider">•</span>
              <Link to="/about" className="footer-nav-link">About</Link>
              {/* <span className="footer-link-divider">•</span>
              <Link to="/resume" className="footer-nav-link">Resume</Link> */}
            </div>
          </Col>

          <Col lg={3} md={6} className="text-center text-lg-right">
            <ul className="footer-social-icons-list mb-0">
              <li className="footer-social-item">
                <a
                  href={socialMediaUrl.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  title="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="footer-social-item">
                <a
                  href={socialMediaUrl.gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  title="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="footer-social-item">
                <a
                  href={socialMediaUrl.email}
                  className="footer-social-btn"
                  title="Email"
                >
                  <AiOutlineMail />
                </a>
              </li>

              <li className="footer-social-item">
                <a
                  href={socialMediaUrl.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  title="Twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>

              <li className="footer-social-item">
                <a
                  href={socialMediaUrl.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  title="Portfolio Website"
                >
                  <FaGlobe />
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="py-3">
          <Col md={12} className="text-center">
            <p className="footer-copyright-text mb-0">
              Designed & Developed by <strong>{aboutCardData.shortName}</strong> &nbsp;•&nbsp; © {new Date().getFullYear()} {aboutCardData.fullName}. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
