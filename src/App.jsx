import './App.css'
import { useRef } from 'react'


export default function App() {
const projectsRef = useRef(null)
const resumeRef = useRef(null)
const contactRef = useRef(null)


const scrollTo = (ref) => {
ref.current?.scrollIntoView({ behavior: 'smooth' })
}


return (
<div className="app-container">
<nav className="navbar">
<div className="nav-items">
<button onClick={() => scrollTo(projectsRef)}>Projects</button>
<button onClick={() => scrollTo(resumeRef)}>Resume & Cover</button>
<button onClick={() => scrollTo(contactRef)}>Contact</button>
</div>
</nav>


<header className="header">
<img src="/face.png" alt="My face" className="profile-img" />
<h1 className="main-title">Welcome to My Portfolio</h1>
<p className="subtitle">A showcase of my work, experience, and contact info</p>
</header>


<section ref={projectsRef} className="section">
<h2 className="section-title">Projects</h2>
<div className="project-grid">
<div className="project-card">
<h3 className="project-title">Project 1</h3>
<p className="project-desc">Description of project 1 goes here.</p>
</div>
<div className="project-card">
<h3 className="project-title">Project 2</h3>
<p className="project-desc">Description of project 2 goes here.</p>
</div>
</div>
</section>


<section ref={resumeRef} className="section">
<h2 className="section-title">Resume & Cover Letter</h2>
<p>Download my documents below:</p>
<div className="download-buttons">
<a href="/resume.pdf" className="download-btn">Resume</a>
<a href="/coverletter.pdf" className="download-btn">Cover Letter</a>
</div>
</section>


<section ref={contactRef} className="section contact-section">
<h2 className="section-title">Contact</h2>
<p>Feel free to reach out:</p>
<div className="contact-list">
<p>Email: <span className="bold">you@example.com</span></p>
<p>LinkedIn: <a href="#" className="link">linkedin.com/in/you</a></p>
<p>GitHub: <a href="#" className="link">github.com/you</a></p>
</div>
</section>
</div>
)
}
