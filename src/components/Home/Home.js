import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import homeLogo from "../../Assets/home-main.svg";
import homeLogo from "../../Assets/feelingProud.svg";
import Home2 from "./Home2";
import Type from "./Type";
import YoutubeEmbed from "./../YoutubeEmbed/YoutubeEmbed";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import {
  InstagramEmbed,
  FacebookEmbed,
} from "react-social-media-embed";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1
                style={{ paddingBottom: 15, color: "black" }}
                className="heading"
              >
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> RAJA RAVI KUMAR</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <Home2 />
        <h1 className="project-heading">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="ravikumar_raja"
            options={{ height: 400 }}
          />
        </h1>
        <h1 className="project-heading">
          <InstagramEmbed url="https://www.instagram.com/p/CRMAGFzlwYh/" />
        </h1>
        <h1 className="project-heading">
          <FacebookEmbed url="https://www.facebook.com/rajaravikumar/posts/pfbid02XkCV44jWu9budsq5pa6vjpMiTR7tZR56FZhswakm8UUEoz9A5PvvH7172WLL3ooWl" />
        </h1>
      {/*  
        <h1 className="project-heading">
          <LinkedInEmbed
            url="https://www.linkedin.com/feed/update/urn:li:activity:6849090055944982528/"
            postUrl="https://www.linkedin.com/posts/raja-ravi-kumar-16623320_retail-flipkart-amazon-activity-6849090055944982528-0kxH?utm_source=share&utm_medium=member_desktop"
          />
        </h1>
        */}
        <h1 className="project-heading">
          <YoutubeEmbed embedId="uLvJEQwZK2E" />
        </h1>
      </Container>
    </section>
  );
}

export default Home;
