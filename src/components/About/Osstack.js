import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiMacos,
  SiWindows,
  SiAndroid,
  SiIos,
} from "react-icons/si";

function Osstack() {
  const systems = [
    { icon: <SiLinux />, name: "Linux / AIX", type: "Enterprise UNIX" },
    { icon: <SiMacos />, name: "macOS", type: "Development" },
    { icon: <SiWindows />, name: "Windows", type: "Primary Workstation" },
    { icon: <SiAndroid />, name: "Android", type: "Mobile Ecosystem" },
    { icon: <SiIos />, name: "iOS", type: "Mobile Testing" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
      {systems.map((sys, index) => (
        <Col xs={6} sm={4} md={3} lg={2} key={index} className="tech-col-card mb-3">
          <div className="modern-tech-card">
            <div className="tech-card-icon">{sys.icon}</div>
            <div className="tech-card-name">{sys.name}</div>
            <div className="tech-card-category">{sys.type}</div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Osstack;
