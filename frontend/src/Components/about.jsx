import { Code2, Sparkles, Rocket, Users } from "lucide-react";
import "./styles/about.css";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code following best practices",
  },
  {
    icon: Sparkles,
    title: "Modern Stack",
    description: "Expertise in latest technologies and frameworks",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Efficient project completion without compromising quality",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Strong communication and team-working abilities",
  },
];

const About = () => {
  return (
    <section id="about" className="about-section">

      <div className="about-container">

        {/* Heading */}
        <div className="about-header">
          <span className="tag">Get To Know Me</span>
          <h2 className="title">About Me</h2>
        </div>

        <div className="about-grid">

          {/* Image Section */}
          <div className="image-wrapper">
            <div className="image-bg-accent"></div>

            <div className="image-card">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
                alt="Workspace"
                className="workspace-img"
              />
              <div className="image-overlay"></div>
            </div>

            {/* Floating Badge */}
            <div className="badge">
              <div className="badge-number">98%</div>
              <div className="badge-text">Client Satisfaction</div>
            </div>
          </div>

          {/* Content Section */}
          <div className="about-content">
            <h3 className="about-subtitle">
              Transforming ideas into elegant digital solutions
            </h3>

            <div className="about-description">
              <p>
                With over 5 years of experience in full-stack development, I
                specialize in building responsive web applications that combine
                beautiful design with powerful functionality.
              </p>
              <p>
                I believe in clean code, continuous learning, and staying updated
                with industry trends—whether it's a complex application or a
                minimal landing page.
              </p>
              <p>
                Outside work, I explore new tech, contribute to open-source, and
                share knowledge through writing and mentoring.
              </p>
            </div>

            {/* Skills */}
            <div className="skills">
              <span className="skill">React & Next.js</span>
              <span className="skill">TypeScript</span>
              <span className="skill">Node.js</span>
              <span className="skill">UI/UX Design</span>
            </div>
          </div>
        </div>

        {/* Highlights Cards */}
        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <div key={index} className="highlight-card">
              <div className="highlight-icon">
                <item.icon className="icon" />
              </div>
              <h4 className="highlight-title">{item.title}</h4>
              <p className="highlight-text">{item.description}</p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default About;

