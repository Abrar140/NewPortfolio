import React, { useState, useEffect } from "react";
import "./Homepage.css"; // Ensure this has the appropriate styles
import AbrarImage from "./Abrar.png"; // Import the image
import CV from "./Abrar_CV.pdf"; // Import the CV PDF
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faDownload,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";

const Homepage = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const jobTitles = ["Software Engineer", "Web Developer", "Data Analyst"];

  useEffect(() => {
    const updateJobTitle = () => {
      setJobTitle(jobTitles[currentIndex]);
      setTimeout(() => {
        // Move to the next job title
        setCurrentIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
      }, 2000); // Display each title for 2 seconds
    };

    updateJobTitle(); // Start updating job titles

    // Cleanup function to clear timeout
    return () => clearTimeout();
  }, [currentIndex]); // Depend on currentIndex

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Muhammad Abrar Cv.pdf";
    link.click();
  };

  const copyEmail = () => {
    const email = "muhamadabraramjad@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      alert("Email address copied to clipboard");
    });
  };

  return (
    <div className="main infocontainor">
      <div className="devinfo">
        <div className="hello">Hi I am</div>
        <div className="name">Muhammad Abrar</div>
        <br/>
        <div className="about">{jobTitle}</div>
        <div className="moreabout">
          <br/>
          I am an emerging web developer looking for opportunities in the field
          of web development .....
          <br />
          <br />I  have also started Machine Learning, Artificial
          Intelligence, Image Processing .......
        </div>
        <div className="icon-buttons">
          <a
            href="https://linkedin.com/in/muhammad-abrar-07315a290"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:muhamadabraramjad@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="tel:+92 316 4303315">
            <FontAwesomeIcon icon={faPhone} />
          </a>
          <a
            href="https://github.com/Abrar140"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>

        <div className="buttons">
          <button onClick={downloadCV}>
            <FontAwesomeIcon icon={faDownload} className="icon" /> Download CV
          </button>
          <button onClick={copyEmail}>
            <FontAwesomeIcon icon={faCopy} className="icon" /> Copy Email
            Address
          </button>
        </div>
      </div>
      <div className="devpic">
        <img src={AbrarImage} alt="Abrar Amjad pic here" />
      </div>
    </div>
  );
};

export default Homepage;
