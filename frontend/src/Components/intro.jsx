import Button from '@mui/material/Button';
import "./styles/intro.css";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react"

function Intro() {
    return (
        <div className="intro">
            <div className="intro-section">
                <h1>Hi, I am Anusha Kesarwani</h1>
                <h4>MERN Stack Developer || GSsoc Contributor 2025</h4>
                <p>
                    MERN stack developer specialized in creating beautiful, functional,
                    and user-centered digital experiences. Let's build something exceptional together.
                </p>

                <div className="intro-buttons">
                    <a href="#projects" >
                        <Button variant="contained" className='view' >
                        View Projects 
                        <ArrowRight size={18} />
                        </Button>
                    </a>
                    <Button variant="outlined" className='cv' >
                        <Download size={18} />
                        Download CV
                    </Button>
                </div>

                <div className="intro-socials">
                    <a 
                        href="https://github.com/yourusername" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <Github size={24} />
                    </a>
                    <a 
                        href="https://linkedin.com/in/yourusername" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a 
                        href="mailto:kesarwanianusha58@gmail.com"
                        aria-label="Email"
                    >
                        <Mail size={24} />
                    </a>
                </div>
            </div>

            <div className="intro-image">
                <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" 
                    alt="Anusha Kesarwani - MERN Stack Developer" 
                />
            </div>
        </div>
    );
}

export default Intro;
