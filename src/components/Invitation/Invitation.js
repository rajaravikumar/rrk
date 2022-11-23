import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Pdf from "./../Pdf/Pdf";
// import ResumePDF from "./../../../src/Assets/Resume.pdf";
import { resumeData } from "./../Data";
import Clock from "./Clock";
import Marriage from "../../Assets/marriage.png";

function Invitation() {
    let deadline = "January, 27, 2023";

  return (
    <Container fluid className="resume-section">
      <Container>
            <Row>
            <Col md={5} className="home-header">
              <h1 className="heading-name"  style={{ paddingBottom: 15, color: "black" }}>
              <div className="main-name" style={{ paddingBottom: 15, fontSize: "2.1em",}}>
               <spam >R</spam><spam style={{  color: "rgb(155 126 172)" }}>avi</spam>  💞 Pall<spam style={{   color: "rgb(155 126 172)" }}>avi</spam> 
              </div>
             
              <div  style={{
                fontSize: "1.1em",
                paddingBottom: "20px",
                color: "black",
              }}> <Clock  deadline={deadline} /> </div>
               </h1>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={Marriage} alt="Marriage" className="img-fluid" />
            </Col>
          </Row>
        {/* <Pdf name="Download Resume" pdfLink={ResumePDF} /> */}
      </Container>
    </Container>
  );
}

export default Invitation;
