import React from "react";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Skills = () => {
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
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            color: "#16a085",
            mb: 4,
            fontSize: "35px",
          }}
        >
          Skills
        </Typography>

        {/* Technical Skills Section */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            sx={{ color: "#16a085", mb: 3, fontSize: "30px" }}
          >
            Technical Skills
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
            <ListItem sx={{ display: "list-item", listStyleType: "disc", pl: 2 }}>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <strong>Microsoft:</strong> Word, Excel, PPT, Access
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Box>

        {/* Soft Skills Section */}
        <Box>
          <Typography
            variant="h4"
            sx={{ color: "#16a085", mb: 3, fontSize: "30px" }}
          >
            Soft Skills
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {[
              "Problem-Solving",
              "Team Collaboration",
              "Time Management",
              "Adaptability",
              "Communication",
              "Good Observations",
              "Multitasking",
            ].map((skill, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: "100%", sm: "48%", md: "48%" },
                  backgroundColor: "#f2f2f2",
                  borderRadius: 1,
                  p: 2,
                  textAlign: "center",
                }}
              >
                <Typography variant="body1">{skill}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Skills;