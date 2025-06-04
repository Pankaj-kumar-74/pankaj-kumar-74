import React from 'react';
import './App.css';
import ScrollToTop from './ScrollToTop';

function App() {
  const resumeLink = "https://drive.google.com/uc?export=download&id=1HDnIwEcRtR6xQOTHhRlBOnozb-xH_gKd";

  return (
    <div className="app-container">
      <header className="header">
        <img
          src="/profile.png"
          alt="Pankaj Kumar"
          className="profile-pic"
        />
        <h1 className="title">Pankaj Kumar</h1>
        <h2 className="subtitle">Java Developer | OOP & SQL Expert | Freelance Designer</h2>
      </header>

      <main className="main-content">
        <section className="about card-3d">
          <h3>About Me</h3>
          <p>
            Aspiring Java Developer with a strong foundation in Java, Object-Oriented Programming (OOP), and SQL. Seeking opportunities to apply my skills and grow as a backend developer.
          </p>
          <p>
            B.Tech in Computer Science from GLA University, Mathura. Completed training at KIA TECH, Gurgaon, gaining practical experience in Java through real-time projects and team collaboration.
          </p>
          <p>
            Developed projects like a console-based Tic Tac Toe game and an Electricity Billing System desktop application using Java.
          </p>
          <p>
            Proficient in Java, JavaScript, HTML, CSS, OOPs, SQL, and Linux. Familiar with tools like VS Code, Canva, and GitHub.
          </p>
          <button
            className="resume-button"
            onClick={() => window.open(resumeLink, '_blank')}
            aria-label="Download Resume"
          >
            Download Resume
          </button>
        </section>

        <section className="portfolio card-3d">
          <h3>Portfolio</h3>
          <ul>
            <li>
              <a href="https://jaswant-telecom.in/" target="_blank" rel="noreferrer">
                Jaswant Telecom
              </a> - Figma design and static website.
            </li>
            <li>
              <a href="https://hs-safar.com/" target="_blank" rel="noreferrer">
                HS Safar
              </a> - Figma design and static website.
            </li>
          </ul>
        </section>

        <section className="services card-3d">
          <h3>Services</h3>
          <p>Static website development and Figma UI/UX design with client-focused collaboration.</p>
        </section>

        <section className="skills card-3d">
          <h3>Skills</h3>
          <ul>
            <li><strong>Languages:</strong> Java (Professional), JavaScript</li>
            <li><strong>Technologies/Frameworks:</strong> HTML, CSS, OOPs, SQL, Linux</li>
            <li><strong>Tools:</strong> VS Code, Canva, GitHub</li>
          </ul>
        </section>

        <section className="contact card-3d">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:pankajsisodia89@gmail.com">pankajsisodia89@gmail.com</a></p>
          <p>Phone: +91 7457897849</p>
          <p>
            LinkedIn: <a href="https://www.linkedin.com/in/pankaj-kumar-3a037a277/" target="_blank" rel="noreferrer">Pankaj Kumar</a>
          </p>
          <p>
            GitHub: <a href="https://github.com/Pankaj-kumar-74" target="_blank" rel="noreferrer">Pankaj-kumar-74</a>
          </p>
        </section>
      </main>

      <ScrollToTop />
    </div>
  );
}

export default App;
