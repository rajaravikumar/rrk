import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import rrkProfile from "../../Assets/rrk-profile.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineMail,
} from "react-icons/ai";
import {
  FaLinkedinIn,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { homeData, socialMediaUrl, aboutCardData } from "./../Data";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        {/* =========================================
            Introduction Story & Avatar
            ========================================= */}
        <Row className="align-items-center mb-5">
          <Col lg={8} md={12} className="home-about-description">
            <div className="section-badge-pill">WHO I AM</div>
            <h1 className="section-heading-text">
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>

            <div className="home-story-card">
              <p className="home-story-paragraph">
                {homeData.introLine1}
              </p>

              <p className="home-story-paragraph">
                {homeData.introLine2}{" "}
                <i>
                  <b className="purple">{homeData.introLine3}</b>
                </i>
              </p>

              <p className="home-story-paragraph">
                {homeData.introLine4} &nbsp;
                <i>
                  <b className="purple">{homeData.introLine5}</b> and also in areas related to{" "}
                  <b className="purple">{homeData.introLine6}</b>
                </i>
              </p>

              <p className="home-story-paragraph mb-0">
                {homeData.introLine7}{" "}
                <b className="purple">{homeData.introLine8}</b> and{" "}
                <i>
                  <b className="purple">{homeData.introLine9}</b>
                </i>
              </p>
            </div>
          </Col>

          <Col lg={4} md={12} className="text-center myAvtar">
            <div className="avatar-frame-wrap">
              <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000}>
                <div className="avatar-card">
                  <img
                    src={rrkProfile}
                    className="img-fluid avatar-image"
                    alt={aboutCardData.fullName}
                  />
                  <div className="avatar-info-banner">
                    <div className="avatar-title-name">{aboutCardData.name}</div>
                    <div className="avatar-title-role">{aboutCardData.role}</div>
                    <div className="avatar-title-loc">
                      <FaMapMarkerAlt style={{ marginRight: "6px" }} />
                      {aboutCardData.fromLocation}
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
          </Col>
        </Row>

        {/* =========================================
            Social & Connect Hub
            ========================================= */}
        <Row className="mt-5">
          <Col md={12} className="home-about-social">
            <div className="section-badge-pill">GET IN TOUCH</div>
            <h1 className="section-heading-text">CONNECT WITH ME</h1>
            <p className="social-sub-desc">
              Feel free to connect with me across any of my personal and developer channels
            </p>

            <div className="social-cards-grid">
              <a
                href={socialMediaUrl.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="social-connect-card"
              >
                <div className="social-connect-icon">
                  <FaLinkedinIn />
                </div>
                <div className="social-connect-label">LinkedIn</div>
                <div className="social-connect-handle">{socialMediaUrl.linkedInDisplay}</div>
              </a>

              <a
                href={socialMediaUrl.gitHub}
                target="_blank"
                rel="noreferrer"
                className="social-connect-card"
              >
                <div className="social-connect-icon">
                  <AiFillGithub />
                </div>
                <div className="social-connect-label">GitHub</div>
                <div className="social-connect-handle">rajaravikumar</div>
              </a>

              <a
                href={socialMediaUrl.email}
                className="social-connect-card"
              >
                <div className="social-connect-icon">
                  <AiOutlineMail />
                </div>
                <div className="social-connect-label">Email</div>
                <div className="social-connect-handle">{socialMediaUrl.emailRaw}</div>
              </a>

              <a
                href={socialMediaUrl.twitter}
                target="_blank"
                rel="noreferrer"
                className="social-connect-card"
              >
                <div className="social-connect-icon">
                  <AiOutlineTwitter />
                </div>
                <div className="social-connect-label">Twitter / X</div>
                <div className="social-connect-handle">@{socialMediaUrl.twitterSceenName}</div>
              </a>

              <a
                href={socialMediaUrl.instagram}
                target="_blank"
                rel="noreferrer"
                className="social-connect-card"
              >
                <div className="social-connect-icon">
                  <AiFillInstagram />
                </div>
                <div className="social-connect-label">Instagram</div>
                <div className="social-connect-handle">iamrajaravikumar</div>
              </a>

              <a
                href={socialMediaUrl.facebook}
                target="_blank"
                rel="noreferrer"
                className="social-connect-card"
              >
                <div className="social-connect-icon">
                  <AiFillFacebook />
                </div>
                <div className="social-connect-label">Facebook</div>
                <div className="social-connect-handle">rajaravikumar</div>
              </a>

              {/* <a
                href={socialMediaUrl.website}
                target="_blank"
                rel="noreferrer"
                className="social-connect-card"
              >
                <div className="social-connect-icon">
                  <FaGlobe />
                </div>
                <div className="social-connect-label">Website</div>
                <div className="social-connect-handle">{socialMediaUrl.websiteDisplay}</div>
              </a> */}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
