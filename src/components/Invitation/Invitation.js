import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Clock from "./Clock";
import Marriage from "../../Assets/marriage.png";
import "./style.css";

function Invitation() {
  let deadline = "January, 27, 2023";
  return (
    <Container fluid className="resume-section">
      <Container>
        <Row>
          <Col md={5} className="home-header">
            <h1 className="heading-name" style={{ paddingBottom: 15, color: "black" }}>
              <div className="main-name" style={{ paddingBottom: 15, fontSize: "2.1em" }}>
                <span>R</span><span style={{ color: "rgb(155 126 172)" }}>avi</span>  💞 Pall<span style={{ color: "rgb(155 126 172)" }}>avi</span>
              </div>

              <div style={{
                fontSize: "0.8em",
                paddingBottom: "20px",
                color: "black",
              }}>
                <p>The Beginning of a long , Happy life together in</p>
                <Clock deadline={deadline} />
              </div>
            </h1>
          </Col>

          <Col md={5} style={{ paddingBottom: 20 }}>
            <img src={Marriage} alt="Marriage" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Invitation;
