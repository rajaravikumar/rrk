import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import homeLogo from "../../Assets/home-main.svg";
import homeLogo from "../../Assets/feelingProud.svg";
import Home2 from "./Home2";
import Type from "./Type";
import YoutubeEmbed from "./../YoutubeEmbed/YoutubeEmbed";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { InstagramEmbed, FacebookEmbed } from "react-social-media-embed";
import { socialMediaUrl, aboutCardData } from "./../Data";

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
                <strong className="main-name"> {aboutCardData.fullName}</strong>
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
            screenName={socialMediaUrl.twitterSceenName}
            options={{ height: 400 }}
          />
        </h1>
        <h1 className="project-heading">
          <InstagramEmbed url={socialMediaUrl.instagramEmbedUrl} />
        </h1>
        <h1 className="project-heading">
          <FacebookEmbed url={socialMediaUrl.facebookEmbedUrl} />
        </h1>
        {/*  
        <h1 className="project-heading">
          <LinkedInEmbed
            url={socialMediaUrl.linkedInEmbedUrl}
            postUrl={socialMediaUrl.linkedInEmbedUrlPost}
          />
        </h1>
        */}
        <h1 className="project-heading">
          <YoutubeEmbed embedId={socialMediaUrl.youtbeEmbedUrl} />
        </h1>
      </Container>
    </section>
  );
}

export default Home;
