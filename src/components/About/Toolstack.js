import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiJirasoftware,
  SiGit,
  SiBitbucket,
  SiJfrog,
  SiSpinnaker,
  SiJenkins,
  SiSplunk,
  SiConfluence,
  SiWebpack,
  SiVite,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <SiVisualstudiocode />, name: "VS Code", type: "IDE" },
    { icon: <SiGit />, name: "Git", type: "Version Control" },
    { icon: <SiWebpack />, name: "Webpack", type: "Bundler" },
    { icon: <SiVite />, name: "Vite", type: "Build Tool" },
    { icon: <SiSplunk />, name: "Splunk", type: "Monitoring" },
    { icon: <SiPostman />, name: "Postman", type: "API Testing" },
    { icon: <SiJirasoftware />, name: "Jira", type: "Project Tracking" },
    { icon: <SiConfluence />, name: "Confluence", type: "Docs" },
    { icon: <SiJenkins />, name: "Jenkins", type: "CI/CD" },
    { icon: <SiBitbucket />, name: "Bitbucket", type: "Code Repo" },
    { icon: <SiSpinnaker />, name: "Spinnaker", type: "Continuous Delivery" },
    { icon: <SiJfrog />, name: "JFrog", type: "Artifacts" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
      {tools.map((tool, index) => (
        <Col xs={6} sm={4} md={3} lg={2} key={index} className="tech-col-card mb-3">
          <div className="modern-tech-card">
            <div className="tech-card-icon">{tool.icon}</div>
            <div className="tech-card-name">{tool.name}</div>
            <div className="tech-card-category">{tool.type}</div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
