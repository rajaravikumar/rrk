import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Resumecontent from "./ResumeContent";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Container>
        <Row className="resume">
          <div>
            <h3 className="resume-title">Summary</h3>
            <p>
              Software developmen professional with 6 years of coding experience
              in JavaScript technologies like React.Js, C/C++ and relevant user
              interface technologies including HTML5/CSS, fundamentals CI/CD,
              Chat.Js, Node.Js and Google Cloud Platform.
            </p>
          </div>
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <h4 className="resume-no-title">
              <u>Lowe's</u>
            </h4>
            <br></br>
            <Resumecontent
              title="Project - US Score Card"
              date="April 2021 - present"
              content={[
                "Working has a full stack developer for Data Analysis and Customer Insights (DACI) application US Score Card.",
                "US Score Card - enable operators to fully understand business performance so that they can focus on the highest value opportunities for improvement. In order to deliver on this vision, Scorecard needs to provide operators with visibility to their financial and personal performance, root cause for the drivers and draggers of performance, and surface opportunities to improve performance that are prioritized by business value. ",
                "React.Js, Redux, React Hooks, Chat.Js, JavaScript with 2+ years experience.",
              ]}
            />
            <Resumecontent
              title="Project - Store Data Lookup"
              date="August 2019 - March 2021"
              content={[
                "Built a tool for Business/IT: Upstream and downstream applications teams can lookup Store data with single click.",
                "Designed and developed this application in React.Js/Node.Js/Google Cloud Platform (GCP).",
                "Have been exposed to HTML/CSS, JavaScript, Perl CGI Scripting, Python, React.Js, Node.Js, GCP with 1+ years experience.",
              ]}
            />

            <Resumecontent
              title="Project - Genesis"
              date="December 2016 - July 2019"
              content={[
                "Genesis is a customized UNIX application built for Lowe’s. It is a business-critical application used at all retail stores to manage point-of-sale transactions and basic retail store operations. Consequently, the application’s stability, robustness and performance are a primary focus for Lowe’s testers. ",
                "C/C++, SQL, Shell scripting with 2+ years experience.",
              ]}
            />

            <h3 className="resume-title">Professional Job Titles</h3>
            <h4 className="resume-no-title">
              <u>Lowe's</u>
            </h4>
            <br></br>
            <Resumecontent
              title="Senior Data Engineer"
              date="September 2022 - present"
              content={["Full Stack Developer - ReactJS Project"]}
            />
            <Resumecontent
              title="Data Engineer"
              date="May 2021 - September 2022"
              content={["Full Stack Developer - ReactJS Project"]}
            />

            <Resumecontent
              title="Software Engineer"
              date="July 2018 - May 2021"
              content={["C/C+, ReactJS, NodeJS, GCP Project"]}
            />

            <Resumecontent
              title="Associate Software Engineer"
              date="December 2016 - July 2018"
              content={["C/C++ Project"]}
            />
          </Col>

          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Master of Technology (MTech), Software Engineering in Birla Institute of Technology and Science, Pilani"
              date="2017 - 2019"
              content={[
                "Gain knowledge of Technology and methods to design software more effectively.",
                "Enable software professionals to handle higher responsibilites of design, architecting, consulting, etc. Lay a foundation for research.",
                "The duration of this course is two years which are divided into four semesters. ",
              ]}
            />

            <Resumecontent
              title="Bachelor of Engineering (BE), Computer Science in Visvesvaraya Technological University - K S School of Engineering and Management"
              date="2012 - 2016"
              content={[
                "Bachelor of Engineering (Computer Science) is a full-time engineering undergraduate degree course in the field of computer science.",
                "It deals with the design, maintenance, construction and operation of computer hardware and software.",
                "The duration of this course is four years which are divided into eight semesters.",
              ]}
            />

            <Resumecontent
              title="Pre-University (I &amp; II PUC), Science in Karnataka State Pre-University Board - Dayananda Sagar Institution"
              date="2009 - 2011"
              content={[
                "PUC in Science is a combination of Physics, Chemistry, Mathematics with Biology stream. ",
                "The course equips the candidates with in-depth knowledge about the theory and practical applications of the science concepts.",
              ]}
            />

            <Resumecontent
              title="School (1st to 10th Standard) in Karnataka State Secondary Education Examination Board - Dayananda Sagar Institution"
              date="1999 - 2009"
              content={["Primary and Higher Secondry School"]}
            />

            <h3 className="resume-title">Internship</h3>
            <h4 className="resume-no-title">
              <u>Wechart</u>
            </h4>
            <br></br>
            <Resumecontent
              title="Test Engineer"
              date="March 2014 - April 2014"
              content={[
                "QA Tester - Lead.",
                "Handled team of 20 resources for WeChat App testing.",
                "Preparation and Strategy Formulation.",
                "Identification of Essential Testing Types.",
                "Design of Test Script and Test Case.",
                "Usability, User Interface, Compatibility, Performance Testing.",
              ]}
            />

            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Team Award - Dec 2021, Issued by Lowe's India`,
                `Appreciation Store GIT - Feb 2021, Issued by Lowe's India`,
                `SPOT AWARD - June 2019, Issued by Lowe's India`,
                `SPOT AWARD - July 2018, Issued by Lowe's India`,
                `Certificate of HONOUR - Mar 2015, Issued by Robosapiens Technologies`,
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
