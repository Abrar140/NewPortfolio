import React from "react";
import Project from "./Project";
import { Box, Typography, Grid, Container } from "@mui/material";

const MyProjects = () => {
  const projects = [
    {
      name: "Portfolio",
      category: "Web-Site",
      languages: ["HTML", "CSS", "React"],
      description:
        "I have created a comprehensive portfolio that showcases my skills, experience, and projects, starting with a welcoming home page, followed by an introduction that shares my background and interests, a skills section that highlights my technical abilities, a projects section that showcases my work on various initiatives, an experience section that outlines my professional journey and achievements, and finally, a contact section that invites visitors to get in touch with me for potential collaborations or opportunities.",
      codeLink: "https://example.com/code1",
      videoLink: "https://youtu.be/lvVKl_sXbTo",
    },
    {
      name: "Simple Bloging",
      category: "Web-Site",
      languages: ["Express", "EJS", "Node.js", "MongoDB"],
      description:
        "Welcome to my Simple Bloging project! This web application allows users to create, read, update, and delete blogs, complete with user authentication and the ability for users to add comments to blogs. When the user is not signed in, they can only view blogs and cannot comment or add a blog.",
      codeLink: "https://github.com/Abrar140/WebProjects",
      videoLink: "https://youtu.be/AYKQ0kLkLSQ?feature=shared",
    },
    {
      name: "Ticket Price Prediction",
      category: "Data Science",
      languages: ["Python"],
      description:
        "We trained a dataset from Kaggle and then tested it according to provided inputs. We applied various machine learning models and evaluated the price of a ticket on a specific date. All data and materials were collected from Kaggle.",
    },
    {
      name: "Online Shopping Site",
      category: "Simple Application",
      languages: ["Scene Builder", "Ms SQL"],
      description:
        "It allows customers to purchase different items from our store. It supports CRUD operations for users and admin. Admins can add new items to the store, which users can add to their cart to purchase. Users can cancel orders before they are dispatched.",
    },
    {
      name: "Hangman",
      category: "Simple Application",
      languages: ["SceneBuilder"],
      description:
        "It is a simple Hangman game that helps users guess alphabets using different riddles. The game also has authentication. On each wrong move, a part of the hanging man is dropped until the full hangman is hanged.",
    },
    {
      name: "Online Booking System",
      category: "Simple Application",
      languages: ["C", "Java", "JavaFx"],
      description:
        "It is a simple application we made using JavaFx. It involves booking a movie, deleting a movie, updating a movie, and viewing movies for customers. It also has admin privileges that allow adding which movie shall be displayed that day at a particular time.",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          color: "#16a085",
          mb: 4,
          fontSize: "35px",
          fontWeight: "bold",
        }}
      >
        My Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Project
              name={project.name}
              category={project.category}
              languages={project.languages}
              description={project.description}
              codeLink={project.codeLink}
              videoLink={project.videoLink}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MyProjects;