import { Code2, Palette, Database, Zap } from "lucide-react";
import "./styles/skills.css";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, TypeScript, Next.js, Tailwind CSS",
    level: 95,
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, Adobe XD, Responsive Design",
    level: 88,
  },
  {
    icon: Database,
    title: "Backend & Database",
    description: "Node.js, PostgreSQL, MongoDB",
    level: 85,
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "SEO, Core Web Vitals, Lighthouse",
    level: 90,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <span>Expertise</span>
          <h2>Skills & Technologies</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="skill-top">
                <div className="skill-icon">
                  <skill.icon size={22} />
                </div>
                <div className="skill-info">
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                </div>
              </div>

              <div className="skill-level">
                <div className="skill-level-labels">
                  <span>Proficiency</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-bar-fill" style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;