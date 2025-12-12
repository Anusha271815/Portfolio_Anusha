import React from "react";
import "./styles/project.css";
import { ExternalLink, Github } from "lucide-react";
import Button from '@mui/material/Button';

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory management and secure payment processing",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
  },
  {
    title: "AI Content Generator",
    description:
      "AI-powered content creation tool helping businesses generate marketing copy and social media posts",
    tags: ["Next.js", "OpenAI", "TypeScript", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  },
  {
    title: "Portfolio Dashboard",
    description:
      "Analytics dashboard for tracking portfolio performance with real-time data visualization",
    tags: ["React", "D3.js", "Firebase", "Chart.js"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    title: "Social Media App",
    description:
      "Modern social networking platform with real-time messaging and content sharing features",
    tags: ["React Native", "Socket.io", "MongoDB", "AWS"],
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
  },
];

const Project = () => {
    return (
        <section id="projects" className="projects-section">
        <div className="projects-container">
        <div className="projects-header">
        <span>Portfolio</span>
        <h2>Featured Projects</h2>
        </div>
        
        
        <div className="projects-grid">
        {projects.map((project, index) => (
        <div key={index} className="project-card">
        {/* Image */}
        <div className="project-image">
        <img src={project.image} alt={project.title} />
        </div>
        
        
        {/* Content */}
        <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        
        <div className="project-tags">
        {project.tags.map((tag, i) => (
        <span key={i} className="tag">
        {tag}
        </span>
        ))}
        </div>
        
        
        <div className="project-buttons">
        <button className="btn-outline">
        <Github size={16} /> Code
        </button>
        
        
        <button className="btn-accent">
        <ExternalLink size={16} /> Live Demo
        </button>
        </div>
        </div>
        </div>
        ))}
        </div>
        </div>
        </section>
        );
        };
export default Project;
