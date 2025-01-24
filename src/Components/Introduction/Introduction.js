import React from "react";
import "./Introduction.css";

function Introduction() {
  return (
    <div className="intro-container">
      <h1 className="Introsh2">Introduction</h1>
      <p>
        Hello! I’m Muhammad Abrar, a passionate web and software developer with
        a keen interest in creating innovative solutions and driving
        technological advancements. My journey in the tech world has been fueled
        by a love for problem-solving and a dedication to build
        user-friendly applications.
      </p>
      <p>
        I am also interested in Machine Learning, Artificial Intelligence,
        Image processing, I have started learning new concepts of them ,and I am looking forward to it...
      </p>

      <h2>Education</h2>
      <ul>
        <li>
          <strong>University:</strong> COMSATS University Lahore Campus
          <p>
            I am currently a student of BS (Software Engineering) in the 7th
            Semester with CGPA: <span className="highlight">3.63</span>. I will
            be graduated in <span className="highlight">2025</span>.
          </p>
        </li>
        <li>
          <strong>College:</strong> Superior Group of Colleges
          <p>
            I passed my FSc (Pre-Engineering) with <span className="highlight">98%</span> in
            <span className="highlight">2021</span>.
          </p>
        </li>
        <li>
          <strong>School:</strong> Sapphire School of Learning
          <p>
            I passed my matriculation in Computer Science with <span className="highlight">94%</span> in
            <span className="highlight">2019</span>.
          </p>
        </li>
      </ul>

      <h2>Professional Skills</h2>
      <ul>
        <li>
          <strong>Programming Languages:</strong> JavaScript, Python, Java, C,
          C++
        </li>
        <li>
          <strong>Web Development:</strong> HTML, CSS, React, Express Node.js
        </li>
        <li>
          <strong>Database Management:</strong> MySQL, MongoDB
        </li>
        <li>
          <strong>Tools & Platforms:</strong> Git
        </li>
        <li>
          <strong>Design & UX/UI:</strong> Figma
        </li>
      </ul>

      <h2>Experience</h2>
      <p>
        I have worked in front-end & back-end technologies. I
        have developed various projects  from simple websites to dynamic
        websites. My professional experience includes:
      </p>
      <ul>
        <li>
          <strong>Frontend Development:</strong> Creating responsive and
          engaging user interfaces using modern frameworks and libraries.
        </li>
        <li>
          <strong>Backend Development:</strong> Building scalable APIs and
          integrating them with databases to support dynamic web applications.
        </li>
        <li>
          <strong>Project Management:</strong> Leading development teams and
          managing project timelines to deliver high-quality software solutions.
        </li>
      </ul>

      <h2>Personal Projects</h2>
      <p>
        In addition to my professional work, I have worked on several personal
        projects, including:
      </p>
      <ul>
        <li>
          <strong>E-commerce Platform:</strong> Developed a fully functional
          e-commerce site with secure payment processing and user management.
        </li>
        <li>
          <strong>Chatting:</strong> Created an online chatting application.
        </li>
        <li>
          <strong>More Projects:</strong> You can check in the Project section.
        </li>
      </ul>

      <p>
        I am always eager to learn new technologies and take on challenging
        projects. Feel free to browse through my portfolio to see some of the
        exciting work I’ve been involved in. Let’s connect and explore how we
        can collaborate on your next project!
      </p>
    </div>
  );
}

export default Introduction;
