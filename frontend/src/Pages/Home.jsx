import React from "react";
import {Route, Routes} from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Home.css";
import Intro from "../Components/intro";
import About from "../Components/about";
import Skills from "../Components/skills";
import Project from "../Components/project";
import Certificates from "../Components/certificates";
import Contact from "../Components/contact";

function Home() {
  return (
    <div className="Home">
        <div className="Navigation">
            <Navbar/>
        </div>
        <div className="Content">
            <Routes>
                <Route path="/" element={<Intro/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/skills" element={<Skills/>}/> 
                <Route path="/projects" element={<Project/>}/>
                <Route path="/certificates" element={<Certificates/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </div>
        <div className="Footer">
            <Footer/>
        </div>
      
    </div>
  );
}   
export default Home;