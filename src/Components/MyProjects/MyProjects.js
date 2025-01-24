import React from "react";
import Project from "../Project/Project";
import "./MyProjects.css";

const MyProjects = () => {
  const projects = [
    {
      name: "Portfolio",
      category: "Web-Site",
      languages: ["HTML", "CSS", "React"],
      description:"I have created a comprehensive portfolio that showcases my skills, experience, and projects, starting with a welcoming home page, followed by an introduction that shares my background and interests, a skills section that highlights my technical abilities, a projects section that showcases my work on various initiatives, an experience section that outlines my professional journey and achievements, and finally, a contact section that invites visitors to get in touch with me for potential collaborations or opportunities.",
      codeLink: "https://example.com/code1",
      videoLink: "https://youtu.be/lvVKl_sXbTo",
    },
    {
      name: "Simple bloging ",
      category: "Web-Site",
      languages: ["Express", "EJS", "Node.js", "MongoDB"],
      description:
        "Welcome to my Simple Bloging project! This web application allows users to create, read, update, and delete blogs, complete with user authentication and the ability for users to add comments to blogs.  when uuser is not Sign-In it can  only view blog. it cannot  comment or add a blog ",
      codeLink: "https://github.com/Abrar140/WebProjects",
      videoLink: "https://youtu.be/AYKQ0kLkLSQ?feature=shared",
    },
    {
      name: "Ticket Price Prediction",
      category: "Data Science",
      languages: ["Python"],
      description:
        "   we  trained data set from kaggle and then test it according to provided inputs to user we have applied many various machine learning models and then tested.  and evaluate the price of ticket on a specific date . All data and matrials are collected from Kaggle   ",
    },
    {
      name: "Online Shopping Site",
      category: "Simple  Application",
      languages: ["Scene Builder", "Ms SQl"],
      description:
        "it allow customer to purchase diffrent items from our stores it allow to make CRUD  operations  for users and admin. Admin can add new items to store which can user add to their cart to purchase .user can cancel order before dispatching of it ",
    },
    {
      name: "Hangman",
      category: "Simple Application",
      languages: ["SceneBuilder"],
      description:
        "it a simple hangman a game it help user to guess alphabet using diffrent riddles. The game also have authentication . on each wrong move a part of hanging man s dropped until full hang man got hanged",
    },
    {
      name: "Online Booking system",
      category: "simple application",
      languages: ["C", "Java", "JavaFx"],
      description:
        "it is a simple application we have made using JavaFx it involves booking of a movie ,deletion of movie, updation and view movie to customers it also having admin privlege that  allow to add which movie shall display that day on particular time ",
    },
    // Add more project objects as needed
  ];

  return (
    <div className="main">
      <h2 className="myprojectsh2"> My Projects</h2>
      <div className="angry-grid">
        {projects.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            category={project.category}
            languages={project.languages}
            description={project.description}
            codeLink={project.codeLink}
            videoLink={project.videoLink}
          />
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
