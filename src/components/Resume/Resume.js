import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaBriefcase,
  FaGraduationCap,
  FaAward,
  FaCode,
  FaPrint,
  FaLinkedinIn,
  FaGlobe,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCheck,
  FaCopy,
  FaExternalLinkAlt,
  FaHandsHelping,
  FaLayerGroup,
  FaServer,
  FaCloud,
  FaLaptopCode,
  FaCalendarAlt,
  FaFilePdf,
} from "react-icons/fa";
import { resumeData } from "../Data";
import "./Resume.css";

function Resume() {
  const [activeTab, setActiveTab] = useState("all");
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyContact = () => {
    const contactText = `${resumeData.name} | ${resumeData.title}\nPhone: ${resumeData.phone}\nEmail: ${resumeData.email}\nLinkedIn: ${resumeData.linkedin}\nWebsite: ${resumeData.website}`;
    navigator.clipboard.writeText(contactText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2600);
    });
  };

  const getSkillCategoryIcon = (category) => {
    if (category.includes("Architecture")) return <FaLayerGroup />;
    if (category.includes("Front-End")) return <FaLaptopCode />;
    if (category.includes("Backend")) return <FaServer />;
    if (category.includes("Databases")) return <FaCloud />;
    return <FaCode />;
  };

  return (
    <Container fluid className="modern-resume-wrapper">
      <Container>
        {/* =========================================
            Hero Header Card (Centered)
            ========================================= */}
        <div className="resume-hero-card text-center">
          <h1 className="resume-hero-name">{resumeData.name}</h1>
          <div className="resume-hero-title">
            <FaCode style={{ color: "#026670" }} />
            <span>{resumeData.title}</span>
          </div>

          <div className="resume-contact-bar justify-content-center">
            <span className="resume-contact-pill">
              <FaMapMarkerAlt className="pill-icon" />
              {resumeData.location}
            </span>

            <a href={resumeData.phoneTel} className="resume-contact-pill">
              <FaPhoneAlt className="pill-icon" />
              {resumeData.phone}
            </a>

            <a href={resumeData.emailMailto} className="resume-contact-pill">
              <FaEnvelope className="pill-icon" />
              {resumeData.email}
            </a>

            <a
              href={resumeData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-contact-pill"
            >
              <FaLinkedinIn className="pill-icon" />
              {resumeData.linkedinDisplay}
              <FaExternalLinkAlt style={{ fontSize: "0.75rem", opacity: 0.7 }} />
            </a>

            <a
              href={resumeData.website}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-contact-pill"
            >
              <FaGlobe className="pill-icon" />
              {resumeData.websiteDisplay}
              <FaExternalLinkAlt style={{ fontSize: "0.75rem", opacity: 0.7 }} />
            </a>
          </div>

          {/* <div className="resume-action-bar justify-content-center mt-4">
            <a
              href={resumeData.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn-primary"
              title="Open and Download Official Resume PDF from Google Drive"
            >
              <FaFilePdf /> View / Download PDF
            </a>

            <button
              type="button"
              className="resume-btn-secondary"
              onClick={handlePrint}
              title="Print ATS-friendly Resume"
            >
              <FaPrint /> Print
            </button>

            <button
              type="button"
              className="resume-btn-secondary"
              onClick={handleCopyContact}
              title="Copy Contact Information"
            >
              {copied ? <FaCheck style={{ color: "#026670" }} /> : <FaCopy />}
              {copied ? "Copied!" : "Copy Contact"}
            </button>
          </div> */}
        </div>

        {/* =========================================
            Key Stats & Impact Metrics Strip (3 Cards)
            ========================================= */}
        <div className="resume-stats-grid">
          {resumeData.stats.map((stat, idx) => (
            <div key={idx} className="resume-stat-card">
              <div className="resume-stat-value">{stat.value}</div>
              <div className="resume-stat-label">{stat.label}</div>
              <div className="resume-stat-desc">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* =========================================
            Interactive Navigation Tabs
            ========================================= */}
        <div className="resume-tabs-nav">
          <button
            className={`resume-tab-btn ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            All Overview
          </button>
          <button
            className={`resume-tab-btn ${activeTab === "experience" ? "active" : ""}`}
            onClick={() => setActiveTab("experience")}
          >
            <FaBriefcase /> Professional Experience
          </button>
          <button
            className={`resume-tab-btn ${activeTab === "skills" ? "active" : ""}`}
            onClick={() => setActiveTab("skills")}
          >
            <FaCode /> Technical Skills
          </button>
          <button
            className={`resume-tab-btn ${activeTab === "education" ? "active" : ""}`}
            onClick={() => setActiveTab("education")}
          >
            <FaGraduationCap /> Education & Certifications
          </button>
          <button
            className={`resume-tab-btn ${activeTab === "leadership" ? "active" : ""}`}
            onClick={() => setActiveTab("leadership")}
          >
            <FaAward /> Awards & Leadership
          </button>
        </div>

        {/* =========================================
            Professional Summary
            ========================================= */}
        {(activeTab === "all" || activeTab === "experience") && (
          <div className="resume-section-card">
            <div className="resume-section-header">
              <span className="resume-section-icon">
                <FaLaptopCode />
              </span>
              <h2 className="resume-section-title">Professional Summary</h2>
            </div>
            <p className="resume-summary-text">{resumeData.summary}</p>
          </div>
        )}

        {/* =========================================
            Technical Skills & Competencies Matrix
            ========================================= */}
        {(activeTab === "all" || activeTab === "skills") && (
          <div className="resume-section-card">
            <div className="resume-section-header">
              <span className="resume-section-icon">
                <FaCode />
              </span>
              <h2 className="resume-section-title">Technical Skills & Competencies</h2>
            </div>

            <div className="skills-category-grid">
              {resumeData.technicalSkills.map((cat, idx) => (
                <div key={idx} className="skills-category-card">
                  <div className="skills-category-title">
                    <span style={{ marginRight: "8px", verticalAlign: "middle" }}>
                      {getSkillCategoryIcon(cat.category)}
                    </span>
                    {cat.category}
                  </div>
                  <div className="skills-tags-wrap">
                    {cat.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="skill-tag-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================
            Professional Experience Timeline
            ========================================= */}
        {(activeTab === "all" || activeTab === "experience") && (
          <div className="resume-section-card">
            <div className="resume-section-header">
              <span className="resume-section-icon">
                <FaBriefcase />
              </span>
              <h2 className="resume-section-title">Professional Experience</h2>
            </div>

            <div className="experience-timeline">
              {resumeData.experiences.map((exp) => (
                <div key={exp.id} className="experience-item-card">
                  <div className={`experience-marker ${exp.isCurrent ? "current" : ""}`} />

                  <div className="exp-header-row">
                    <div>
                      <h3 className="exp-role-title">{exp.role}</h3>
                      <div className="exp-company-sub">
                        <strong>{exp.company}</strong> &nbsp;|&nbsp; {exp.location}
                      </div>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                      <span
                        className={`exp-meta-badge ${exp.isCurrent ? "current" : ""}`}
                      >
                        <FaCalendarAlt style={{ fontSize: "0.8rem" }} />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <div className="exp-tagline">{exp.tagline}</div>

                  <ul className="exp-bullet-list">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="exp-bullet-item">
                        <span className="bullet-heading-tag">{point.heading}:</span>
                        <span> {point.text}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="exp-tech-tags">
                      {exp.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="exp-tech-chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================
            Education & Certifications Section
            ========================================= */}
        {(activeTab === "all" || activeTab === "education") && (
          <Row>
            <Col lg={6} md={12}>
              <div className="resume-section-card h-100">
                <div className="resume-section-header">
                  <span className="resume-section-icon">
                    <FaGraduationCap />
                  </span>
                  <h2 className="resume-section-title">Education</h2>
                </div>

                <div className="edu-cert-grid" style={{ gridTemplateColumns: "1fr" }}>
                  {resumeData.education.map((edu, idx) => (
                    <div key={idx} className="edu-card">
                      <h4 className="edu-degree-title">{edu.degree}</h4>
                      <div className="edu-institution">{edu.institution}</div>
                      <div className="edu-badge-row">
                        <span className="exp-meta-badge">{edu.period}</span>
                        {edu.mode && <span className="exp-meta-badge">{edu.mode}</span>}
                      </div>
                      <ul className="exp-bullet-list mb-0">
                        {edu.details.map((detail, dIdx) => (
                          <li key={dIdx} className="exp-bullet-item" style={{ fontSize: "0.9rem" }}>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Col>

            <Col lg={6} md={12} className="mt-4 mt-lg-0">
              <div className="resume-section-card h-100">
                <div className="resume-section-header">
                  <span className="resume-section-icon">
                    <FaAward />
                  </span>
                  <h2 className="resume-section-title">Licenses & Certifications</h2>
                </div>

                <div className="cert-card-grid">
                  {resumeData.certifications.map((cert, idx) => (
                    <div key={idx} className="cert-card">
                      <div>
                        <div className="cert-title">{cert.title}</div>
                        <div className="cert-issuer">Issued by {cert.issuer}</div>
                      </div>
                      <div className="mt-2">
                        <span className="skill-tag-pill" style={{ fontSize: "0.76rem" }}>
                          {cert.category}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        )}

        {/* =========================================
            Community Leadership & Awards Section
            ========================================= */}
        {(activeTab === "all" || activeTab === "leadership") && (
          <Row className="mt-4">
            <Col lg={6} md={12}>
              <div className="resume-section-card h-100">
                <div className="resume-section-header">
                  <span className="resume-section-icon">
                    <FaHandsHelping />
                  </span>
                  <h2 className="resume-section-title">Community & Leadership</h2>
                </div>

                {resumeData.communityLeadership.map((item, idx) => (
                  <div key={idx} className="edu-card">
                    <h4 className="edu-degree-title">{item.role}</h4>
                    <div className="edu-institution" style={{ color: "#026670" }}>
                      {item.organization}
                    </div>
                    <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "#4a5568", marginTop: "10px", marginBottom: 0 }}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </Col>

            <Col lg={6} md={12} className="mt-4 mt-lg-0">
              <div className="resume-section-card h-100">
                <div className="resume-section-header">
                  <span className="resume-section-icon">
                    <FaAward />
                  </span>
                  <h2 className="resume-section-title">Awards & Achievements</h2>
                </div>

                <div className="awards-clean-list">
                  {resumeData.awards.map((award, idx) => (
                    <div key={idx} className="award-clean-row">
                      <div className="award-clean-left">
                        <span className="award-clean-icon">
                          <FaAward />
                        </span>
                        <div className="award-text-group">
                          <strong className="award-clean-title">{award.title}</strong>
                          <span className="award-clean-separator">—</span>
                          <span className="award-clean-issuer">
                            {award.date ? `${award.date}, ` : ""}Issued by {award.issuer}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        )}

        {/* =========================================
            Bottom Download Callout Card
            ========================================= */}
        <div className="resume-bottom-download-card mt-5 text-center">
          <h3 style={{ color: "#026670", fontWeight: 700, marginBottom: "10px" }}>
            Need an Offline Copy of My Resume?
          </h3>
          <p style={{ color: "#4a5568", maxWidth: "600px", margin: "0 auto 20px" }}>
            You can view or download the complete PDF resume directly from Google Drive.
          </p>
          <a
            href={resumeData.resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn-primary"
            style={{ display: "inline-flex" }}
          >
            <FaFilePdf /> Download Official Resume (PDF)
          </a>
        </div>

        {/* Toast feedback on copy */}
        {copied && (
          <div className="copy-toast">
            <FaCheck /> Contact details copied to clipboard!
          </div>
        )}
      </Container>
    </Container>
  );
}

export default Resume;
