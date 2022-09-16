import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Ravi Kumar </span>
            from <span className="purple"> Bengaluru, India.</span>
            <br />I am a Full Stack Developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Volunteer Work
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Gardening / Landscaping, DIY
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies and Web Series
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Talk to yourself once in a day, otherwise you may miss meeting an
            intelligent person in this world."{" "}
          </p>
          <footer className="blockquote-footer">Swami Vivekananda</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
