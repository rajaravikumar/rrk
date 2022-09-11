import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiEclipseche,
  SiJirasoftware,
  SiGit,
  SiBitbucket,
  SiJfrog,
  SiSpinnaker,
  SiJenkins,
  SiSplunk,
  SiJson,
  SiConfluence,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
     <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJirasoftware />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSplunk />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBitbucket />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpinnaker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJfrog />
      </Col>
     <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSplunk />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJson />
      </Col>
     <Col xs={4} md={2} className="tech-icons">
        <SiConfluence />
      </Col>
     <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseche />
      </Col>
    </Row>
  );
}

export default Toolstack;
