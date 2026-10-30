import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
} from "react-icons/di";
import {
  SiTypescript,
  SiRedux,
  SiDocker,
  SiGit,
  SiHtml5,
  SiCss3,
  SiGooglecloud,
  SiMysql,
} from "react-icons/si";

function Techstack() {
  const technologies = [
    { icon: <DiReact />, name: "React.js", category: "Library" },
    { icon: <SiTypescript />, name: "TypeScript", category: "Language" },
    { icon: <DiJavascript1 />, name: "JavaScript (ES6+)", category: "Language" },
    { icon: <SiRedux />, name: "Redux Toolkit", category: "State Management" },
    { icon: <DiNodejs />, name: "Node.js", category: "Runtime" },
    { icon: <CgCPlusPlus />, name: "C / C++", category: "Systems" },
    { icon: <SiDocker />, name: "Docker", category: "Containers" },
    { icon: <SiGit />, name: "Git", category: "VCS" },
    { icon: <SiGooglecloud />, name: "Google Cloud", category: "Cloud" },
    { icon: <SiMysql />, name: "SQL / MySQL", category: "Database" },
    { icon: <SiHtml5 />, name: "HTML5", category: "Markup" },
    { icon: <SiCss3 />, name: "CSS3", category: "Styling" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
      {technologies.map((tech, index) => (
        <Col xs={6} sm={4} md={3} lg={2} key={index} className="tech-col-card mb-3">
          <div className="modern-tech-card">
            <div className="tech-card-icon">{tech.icon}</div>
            <div className="tech-card-name">{tech.name}</div>
            <div className="tech-card-category">{tech.category}</div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
