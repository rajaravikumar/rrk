import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Resumecontent from "./ResumeContent";
// import Pdf from "./../Pdf/Pdf";
// import ResumePDF from "./../../../src/Assets/Resume.pdf";
import { resumeData } from "./../Data";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Container>
        <Row className="resume">
          <div>
            <h3 className="resume-title">Summary</h3>
            <p>{resumeData.summary}</p>
          </div>
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <h4 className="resume-no-title">
              <u>{resumeData.company}</u>
            </h4>
            <br></br>
            <Resumecontent
              title={resumeData.cContent1.title}
              date={resumeData.cContent1.date}
              content={resumeData.cContent1.content}
            />
            <Resumecontent
              title={resumeData.cContent2.title}
              date={resumeData.cContent2.date}
              content={resumeData.cContent2.content}
            />

            <Resumecontent
              title={resumeData.cContent3.title}
              date={resumeData.cContent3.date}
              content={resumeData.cContent3.content}
            />

            <h3 className="resume-title">Professional Job Titles</h3>
            <h4 className="resume-no-title">
              <u>{resumeData.company}</u>
            </h4>
            <br></br>
            <Resumecontent
              title={resumeData.JContent1.title}
              date={resumeData.JContent1.date}
              content={resumeData.JContent1.content}
            />
            <Resumecontent
              title={resumeData.JContent2.title}
              date={resumeData.JContent2.date}
              content={resumeData.JContent2.content}
            />

            <Resumecontent
              title={resumeData.JContent3.title}
              date={resumeData.JContent3.date}
              content={resumeData.JContent3.content}
            />

            <Resumecontent
              title={resumeData.JContent4.title}
              date={resumeData.JContent4.date}
              content={resumeData.JContent4.content}
            />
          </Col>

          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title={resumeData.eContent1.title}
              date={resumeData.eContent1.date}
              content={resumeData.eContent1.content}
            />

            <Resumecontent
              title={resumeData.eContent2.title}
              date={resumeData.eContent2.date}
              content={resumeData.eContent2.content}
            />

            <Resumecontent
              title={resumeData.eContent3.title}
              date={resumeData.eContent3.date}
              content={resumeData.eContent3.content}
            />

            <Resumecontent
              title={resumeData.eContent4.title}
              date={resumeData.eContent4.date}
              content={resumeData.eContent4.content}
            />

            <h3 className="resume-title">Internship</h3>
            <h4 className="resume-no-title">
              <u>{resumeData.intershipCompany}</u>
            </h4>
            <br></br>
            <Resumecontent
              title={resumeData.iContent1.title}
              date={resumeData.iContent1.date}
              content={resumeData.iContent1.content}
            />

            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title={resumeData.rContent1.title}
              date={resumeData.rContent1.date}
              content={resumeData.rContent1.content}
            />
          </Col>
        </Row>
        {/* <Pdf name="Download Resume" pdfLink={ResumePDF} /> */}
      </Container>
    </Container>
  );
}

export default Resume;
