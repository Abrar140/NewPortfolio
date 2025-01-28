import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Project from "./Project";

const MyProjects = () => {
  const projects = [
    {
      name: "Academia Connect",
      category: "Web & Mobile App",
      languages: ["React", "React Native", "Node.js", "MongoDB", "Express"],
      description:
        "Academia Connect is a multi-module platform for the Punjab Workers Welfare Board (PWWB). It includes web portals for Admin, School, and Teachers to manage tasks such as student progress, expenses, and course materials. The mobile app for Students allows them to track their learning journey and interact with their respective teachers and School.",
    },

    {
      name: "E-Letters",
      category: "Web Portal",
      languages: ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
      description:
        "E-Letters is a web portal designed for the Punjab Workers Welfare Board (PWWB) to send , recive,  manage and track the flow of all letters in their organiztaion. It helps in automating the letter tracking process, generating  and ensuring that communication is efficiently managed within the organization.",
    },
    {
      name: "Real-Time Chatting Application",
      category: "Web App",
      languages: [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "Socket.IO",
        "Multer",
      ],
      description:
        "A real-time chatting application developed using the MERN stack (MongoDB, Express, React, Node.js). It features user authentication, real-time messaging, profile customization, and contact management, with instant updates powered by Socket.IO and file uploads managed by Multer.",
      codeLink: "https://github.com/Abrar140/Chatt-App",
      videoLink: "https://www.youtube.com/watch?v=CCxrs0QwR68",
    },

    {
      name: "Portfolio",
      category: "Web-Site",
      languages: ["HTML", "CSS", "React"],
      description:
        "I created a portfolio to showcase my skills, experience, and projects, featuring an introduction, skills section, projects, professional experience, and a contact section for potential collaborations or opportunities.",
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
      languages: ["SceneBuilder", "C++"],
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
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "#ffffff",
        minHeight: "100vh",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <Typography variant="h6" sx={{ color: "#f39c12", mb: 1 }}>
        MY PROJECTS
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        Some of My Projects
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: "600px", mx: "auto", mb: 4 }}>
        Here are some of the projects I’ve worked on. Click below to learn more
        about them to view the code and video.
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Project project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MyProjects;
