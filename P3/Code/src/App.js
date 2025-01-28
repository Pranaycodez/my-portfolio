import './App.css';
import React from 'react';

function App() {
  return (
    <div>
      <header>
        <div>
          <h1>Pranay Sai Chava</h1>
        </div>
        <nav>
          <span className="social-links">
            <a href="https://github.com/Pranaycodez" target="_blank" rel="noreferrer">Github</a>
            <a href="https://www.linkedin.com/in/pranaysaichava/" target="_blank" rel="noreferrer">LinkedIn</a>
          </span>
        </nav>
      </header>
      <main>
        <section id="introduction">
          <h2>My Intro</h2>
          <p>Hello, I'm Pranay Sai Chava, a student and aspiring web developer. Enthusiastic to learn and grow in a 
            software Engineering career. I am currently pursuing a Ontario College Certificate in Computer Software and Database Development 
            at Loyalist College, Toronto. Checkout my Github and Linkedin profiles to know more about me and my contributions.
          </p>
        </section>

        <section id="work-experience">
          <h2>Work Experience</h2>
          <p><b>Consultant</b> at <b>Kotak Mahindra Bank,</b> Mumbai</p>
          <ul>
            <li>Provided consulting services to Kotak Mahindra Bank, a renowned banking and financial services company.</li>
            <li>Graced the Application Support profile, where I was assigned with testing tasks to perform on their Enterprise Application.</li>
            <li>Collaborated as a support to Front-end Developers to contribute in their development work.</li>
            <li>Gained proficiency in utilizing Adobe Analytics tool to analyze API response codes, optimizing application performance.</li>
          </ul>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <ul>
            <li>HTML, CSS, and JavaScript</li>
            <li>ReactJS</li>
            <li>SQL and MySQL</li>
            <li>Java</li>
            <li>Selenium</li>
            <li>Adobe Analytics</li>
          </ul>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div id="projects-list">
            <div className="project">
              <h3>SECURING E-VOTING SYSTEM USING BLOCKCHAIN BASED SOLIDITY TECHNOLOGY</h3>
              <p>Developed a blockchain-based electronic voting system using Ethereum blockchain technology. The system is designed to provide a secure and transparent voting process. The system allows voters to cast their votes securely and view the voting results in real-time. The system is built using Java, MySQL, Metamask and Ganache Truffle Suit technologies.</p>
              <a href="https://drive.google.com/file/d/1E1FqE8tLhXUpOLUbxLh8kvbQMcKXrQBQ/view?usp=sharing" target="_blank" rel="noreferrer">View Project</a>
            </div>
            <div className="project">
              <h3>Kotak Cherry</h3>
              <p>Worked on a project called Kotak Cherry, a web-based application that provides a platform for users to invest in fintech products. I have a hands-on experience as an Application supporting consultant in this project. I collaborated with front-end developers to test their developed features and functionalities. I also worked on the Adobe Analytics tool to analyze API response codes and optimize application performance.</p>
              <a href="https://www.kotakcherry.com/mutual-funds/explore/" target="_blank" rel="noreferrer">View Project</a>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2>Let's get in touch!</h2>
          <form id="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" onKeyUp={window.validateName} />
            <span id="name-error"></span>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" onKeyUp={window.validateEmail} />
            <span id="email-error"></span>

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" onKeyUp={window.validateMessage}></textarea>
            <span id="message-error"></span>

            <button type="submit">Submit</button>
            <span id="success-message"></span>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;