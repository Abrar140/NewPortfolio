import React from "react";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

function Introduction() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: 2,
          boxShadow: 3,
          p: 4,
        }}
      >
        <Typography variant="h4" sx={{ color: "#16a085", mb: 3 }}>
          Introduction
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, textIndent: "50px" }}>
          Hello! I’m Muhammad Abrar, a passionate web and software developer with
          a keen interest in creating innovative solutions and driving
          technological advancements. My journey in the tech world has been
          fueled by a love for problem-solving and a dedication to build
          user-friendly applications.
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, textIndent: "50px" }}>
          I am also interested in Machine Learning, Artificial Intelligence,
          Image processing, I have started learning new concepts of them, and I
          am looking forward to it...
        </Typography>

        <Typography variant="h5" sx={{ color: "#16a085", mb: 2 }}>
          Education
        </Typography>
        <List>
          <ListItem sx={{ display: "list-item", listStyleType: "disc", pl: 2 }}>
            <ListItemText
              primary={
                <Typography variant="body1">
                  <strong>University:</strong> COMSATS University Lahore Campus
                </Typography>
              }
              secondary={
                <Typography variant="body2" sx={{ mt: 1 }}>
                  I am currently a student of BS (Software Engineering) in the
                  7th Semester with CGPA:{" "}
                  <Box component="span" sx={{ color: "#16a085", fontWeight: "bold" }}>
                    3.63
                  </Box>
                  . I will be graduated in{" "}
                  <Box component="span" sx={{ color: "#16a085", fontWeight: "bold" }}>
                    2025
                  </Box>
                  .
                </Typography>
              }
            />
          </ListItem>
          <ListItem sx={{ display: "list-item", listStyleType: "disc", pl: 2 }}>
            <ListItemText
              primary={
                <Typography variant="body1">
                  <strong>College:</strong> Superior Group of Colleges
                </Typography>
              }
              secondary={
                <Typography variant="body2" sx={{ mt: 1 }}>
                  I passed my FSc (Pre-Engineering) with{" "}
                  <Box component="span" sx={{ color: "#16a085", fontWeight: "bold" }}>
                    98%
                  </Box>{" "}
                  in{" "}
                  <Box component="span" sx={{ color: "#16a085", fontWeight: "bold" }}>
                    2021
                  </Box>
                  .
                </Typography>
              }
            />
          </ListItem>
          <ListItem sx={{ display: "item", listStyleType: "disc", pl: 2 }}>
            <ListItemText
              primary={
                <Typography variant="body1">
                  <strong>School:</strong> Sapphire School of Learning
                </Typography>
              }
              secondary={
                <Typography variant="body2" sx={{ mt: 1 }}>
                  I passed my matriculation in Computer Science with{" "}
                  <Box component="span" sx={{ color: "#16a085", fontWeight: "bold" }}>
                    94%
                  </Box>{" "}
                  in{" "}
                  <Box component="span" sx={{ color: "#16a085", fontWeight: "bold" }}>
                    2019
                  </Box>
                  .
                </Typography>
              }
            />
          </ListItem>
        </List>

        <Typography variant="h5" sx={{ color: "#16a085", mb: 2 }}>
          Professional Skills
        </Typography>
        <List>
          <ListItem sx={{ display: "list-item", listStyleType: "disc", pl: 2 }}>
            <ListItemText
              primary={
                <Typography variant="body1">
                  <strong>Programming Languages:</strong> JavaScript, Python,
                  Java, C, C++
                </Typography>
              }
            />
          </ListItem>
          <ListItem sx={{ display: "list-item", listStyleType: "disc", pl: 2 }}>
            <ListItemText
              primary={
                <Typography variant="body1">
                  <strong>Web Development:</strong> HTML, CSS, React, Express,
                  Node.js
                </Typography>
              }
            />
          </ListItem>
          <ListItem sx={{ display: "list-item", listStyleType: "disc", pl: 2 }}>
            <ListItemText
              primary={
                <Typography variant="body1">
                  <strong>Database Management:</strong> MySQL, MongoDB
                </Typography>
              }
            />
          </ListItem>
          <ListItem sx={{ display: "list-item", listStyleType: "disc", pl: 2 }}>
            <ListItemText
              primary={
                <Typography variant="body1">
                  <strong>Tools & Platforms:</strong> Git
                </Typography>
              }
            />
          </ListItem>
          <ListItem sx={{ display: "list-item", listStyleType: "disc", pl: 2 }}>
            <ListItemText
              primary={
                <Typography variant="body1">
                  <strong>Design & UX/UI:</strong> Figma
                </Typography>
              }
            />
          </ListItem>
        </List>

        <Typography variant="h5" sx={{ color: "#16a085", mb: 2 }}>
          Experience
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, textIndent: "50px" }}>
          I have worked in front-end & back-end technologies. I have developed
          various projects from simple websites to dynamic websites. My
          professional experience includes:
        </Typography>
        <List>
          <ListItem sx={{ display: "list-item", listStyleType: "disc", pl: 2 }}>
            <ListItemText
              primary={
                <Typography variant="body1">
                  <strong>Frontend Development:</strong> Creating responsive and
                  engaging user interfaces using modern frameworks and libraries.
                </Typography>
              }
            />
          </ListItem>
          <ListItem sx={{ display: "list-item", listStyleType: "disc", pl: 2 }}>
            <ListItemText
              primary={
                <Typography variant="body1">
                  <strong>Backend Development:</strong> Building scalable APIs
                  and integrating them with databases to support dynamic web
                  applications.
                </Typography>
              }
            />
          </ListItem>
          <ListItem sx={{ display: "list-item", listStyleType: "disc", pl: 2 }}>
            <ListItemText
              primary={
                <Typography variant="body1">
                  <strong>Project Management:</strong> Leading development teams
                  and managing project timelines to deliver high-quality software
                  solutions.
                </Typography>
              }
            />
          </ListItem>
        </List>

        <Typography variant="h5" sx={{ color: "#16a085", mb: 2 }}>
          Personal Projects
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, textIndent: "50px" }}>
          In addition to my professional work, I have worked on several personal
          projects, including:
        </Typography>
        <List>
          <ListItem sx={{ display: "list-item", listStyleType: "disc", pl: 2 }}>
            <ListItemText
              primary={
                <Typography variant="body1">
                  <strong>E-commerce Platform:</strong> Developed a fully
                  functional e-commerce site with secure payment processing and
                  user management.
                </Typography>
              }
            />
          </ListItem>
          <ListItem sx={{ display: "list-item", listStyleType: "disc", pl: 2 }}>
            <ListItemText
              primary={
                <Typography variant="body1">
                  <strong>Chatting:</strong> Created an online chatting
                  application.
                </Typography>
              }
            />
          </ListItem>
          <ListItem sx={{ display: "list-item", listStyleType: "disc", pl: 2 }}>
            <ListItemText
              primary={
                <Typography variant="body1">
                  <strong>More Projects:</strong> You can check in the Project
                  section.
                </Typography>
              }
            />
          </ListItem>
        </List>

        <Typography variant="body1" sx={{ mb: 3, textIndent: "50px" }}>
          I am always eager to learn new technologies and take on challenging
          projects. Feel free to browse through my portfolio to see some of the
          exciting work I’ve been involved in. Let’s connect and explore how we
          can collaborate on your next project!
        </Typography>
      </Box>
    </Container>
  );
}

export default Introduction;