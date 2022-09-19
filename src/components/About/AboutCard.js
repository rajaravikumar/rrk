import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { aboutCardData } from "./../Data";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Hi, I am <span className="purple">{aboutCardData.name} </span>
            from <span className="purple"> {aboutCardData.fromLocation}</span>
            <br />
            {aboutCardData.role}
            <br />
            <br />
            {aboutCardData.anotherRole}
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> {aboutCardData.activity1}
            </li>
            <li className="about-activity">
              <ImPointRight /> {aboutCardData.activity2}
            </li>
            <li className="about-activity">
              <ImPointRight /> {aboutCardData.activity3}
            </li>
            <li className="about-activity">
              <ImPointRight /> {aboutCardData.activity4}
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            {aboutCardData.quote}{" "}
          </p>
          <footer className="blockquote-footer">
            {aboutCardData.quoteWritten}
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
