import React from "react";
import Card from "react-bootstrap/Card";
import {
  FaQuoteLeft,
  FaHandsHelping,
  FaBookOpen,
  FaFilm,
  FaLeaf,
} from "react-icons/fa";
import { aboutCardData } from "./../Data";

function AboutCard() {
  const activities = [
    {
      icon: <FaHandsHelping style={{ color: "#026670" }} />,
      text: aboutCardData.activity1 || "Volunteer Work & Community Coordination",
    },
    {
      icon: <FaBookOpen style={{ color: "#026670" }} />,
      text: aboutCardData.activity2 || "Reading Tech Blogs",
    },
    {
      icon: <FaLeaf style={{ color: "#026670" }} />,
      text: aboutCardData.activity3 || "Gardening / Landscaping, DIY",
    },
    {
      icon: <FaFilm style={{ color: "#026670" }} />,
      text: aboutCardData.activity4 || "Watching Movies and Web Series",
    },
  ];

  return (
    <Card className="about-bio-card">
      <Card.Body>
        <div className="about-role-pill">
          {aboutCardData.role}
        </div>

        <p className="about-bio-text mt-3">
          Hello! I am <strong className="purple">{aboutCardData.fullName}</strong> ({aboutCardData.shortName}) based in{" "}
          <strong className="purple">{aboutCardData.fromLocation}</strong>
        </p>

        <p className="about-bio-text">
          {aboutCardData.summary}
        </p>

        <div className="about-activities-wrap mt-4">
          <h4 className="about-activities-title">
            Apart from coding, some other activities that I love to do:
          </h4>
          <div className="activities-pill-list">
            {activities.map((act, index) => (
              <div key={index} className="activity-item-pill">
                <span className="activity-icon">{act.icon}</span>
                <span className="activity-text">{act.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-quote-box mt-4">
          <FaQuoteLeft className="quote-icon" />
          <p className="quote-text">{aboutCardData.quote}</p>
          <div className="quote-author">— {aboutCardData.quoteWritten}</div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
