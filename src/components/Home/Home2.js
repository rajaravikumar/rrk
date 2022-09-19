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
import { FaLinkedinIn } from "react-icons/fa";
import { homeData, socialMediaUrl } from "./../Data";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="resume">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              {homeData.introLine1}
              <br />
              <br />
              {homeData.introLine2}
              <i>
                <b className="purple">{homeData.introLine3} </b>
              </i>
              <br />
              <br />
              {homeData.introLine4} &nbsp;
              <i>
                <b className="purple">{homeData.introLine5} </b> and also in
                areas related to <b className="purple">{homeData.introLine6}</b>
              </i>
              <br />
              <br />
              {homeData.introLine7}{" "}
              <b className="purple">{homeData.introLine8}</b> and
              <i>
                <b className="purple"> {homeData.introLine9}</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                style={{ borderRadius: 5 }}
                src={rrkProfile}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href={socialMediaUrl.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href={socialMediaUrl.gitHub}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href={socialMediaUrl.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href={socialMediaUrl.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href={socialMediaUrl.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href={socialMediaUrl.email}
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
