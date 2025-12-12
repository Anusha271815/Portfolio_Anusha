import React from "react";
import { Award, ExternalLink } from "lucide-react";
import "./styles/Certificates.css";

const certificates = [
  { title: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2023", icon: "🏆" },
  { title: "Google UX Design Professional", issuer: "Google", year: "2023", icon: "🎨" },
  { title: "Meta Frontend Developer", issuer: "Meta", year: "2022", icon: "⚛️" },
  { title: "MongoDB Certified Developer", issuer: "MongoDB University", year: "2022", icon: "🍃" },
  { title: "React Advanced Patterns", issuer: "Frontend Masters", year: "2022", icon: "🚀" },
  { title: "TypeScript Expert", issuer: "TypeScript Academy", year: "2021", icon: "💙" },
];

const achievements = [
  "Winner - Hackathon 2023 (Best UI/UX)",
  "Featured in CSS Design Awards",
  "Speaker at React Conference 2023",
  "Open Source Contributor of the Year",
];

export default function Certificates() {
  return (
    <section id="certificates" className="cert-section">
      <div className="cert-container">
        <div className="cert-header">
          <span className="cert-tag">Recognition</span>
          <h2 className="cert-title">Certificates & Achievements</h2>
        </div>

        <div className="cert-grid">
          {certificates.map((cert, index) => (
            <div className="cert-card" key={index}>
              <div className="cert-icon">{cert.icon}</div>
              <h3 className="cert-name">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-year">{cert.year}</p>
              <button className="cert-btn">
                View Certificate <ExternalLink className="icon-sm" />
              </button>
            </div>
          ))}
        </div>

        <div className="achievement-wrapper">
          <div className="achievement-outline">
            <div className="achievement-box">
              <div className="achievement-head">
                <div className="achievement-icon-bg">
                  <Award className="achievement-icon" />
                </div>
                <h3 className="achievement-title">Key Achievements</h3>
              </div>

              <div className="achievement-grid">
                {achievements.map((achievement, index) => (
                  <div className="achievement-item" key={index}>
                    <span className="tick">✓</span>
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

