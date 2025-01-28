// import React from "react";
// import {
//   Container,
//   Typography,
//   Box,
//   List,
//   ListItem,
//   ListItemText,
// } from "@mui/material";

// function Introduction() {
//   return (
//     <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
//       <Box
//         sx={{
//           backgroundColor: "#fff",
//           borderRadius: 2,
//           boxShadow: 3,
//           p: 4,
//         }}
//       >
//         <Typography variant="h4" sx={{ color: "#16a085", mb: 3 }}>
//           Introduction
//         </Typography>
//         <Typography variant="body1" sx={{ mb: 3, textIndent: "50px" }}>
//           Hello! I’m Muhammad Abrar, a passionate web and software developer with
//           a keen interest in creating innovative solutions and driving
//           technological advancements. My journey in the tech world has been
//           fueled by a love for problem-solving and a dedication to build
//           user-friendly applications.
//         </Typography>
//         <Typography variant="body1" sx={{ mb: 3, textIndent: "50px" }}>
//           I am also interested in Machine Learning, Artificial Intelligence,
//           Image processing, I have started learning new concepts of them, and I
//           am looking forward to it...
//         </Typography>

//         <Typography variant="h5" sx={{ color: "#16a085", mb: 2 }}>
//           Education
//         </Typography>
//         <List>
//           <ListItem sx={{ display: "list-item", listStyleType: "disc", pl: 2 }}>
//             <ListItemText
//               primary={
//                 <Typography variant="body1">
//                   <strong>University:</strong> COMSATS University Lahore Campus
//                 </Typography>
//               }
//               secondary={
//                 <Typography variant="body2" sx={{ mt: 1 }}>
//                   I am currently a student of BS (Software Engineering) in the
//                   7th Semester with CGPA:{" "}
//                   <Box component="span" sx={{ color: "#16a085", fontWeight: "bold" }}>
//                     3.63
//                   </Box>
//                   . I will be graduated in{" "}
//                   <Box component="span" sx={{ color: "#16a085", fontWeight: "bold" }}>
//                     2025
//                   </Box>
//                   .
//                 </Typography>
//               }
//             />
//           </ListItem>
//           <ListItem sx={{ display: "list-item", listStyleType: "disc", pl: 2 }}>
//             <ListItemText
//               primary={
//                 <Typography variant="body1">
//                   <strong>College:</strong> Superior Group of Colleges
//                 </Typography>
//               }
//               secondary={
//                 <Typography variant="body2" sx={{ mt: 1 }}>
//                   I passed my FSc (Pre-Engineering) with{" "}
//                   <Box component="span" sx={{ color: "#16a085", fontWeight: "bold" }}>
//                     98%
//                   </Box>{" "}
//                   in{" "}
//                   <Box component="span" sx={{ color: "#16a085", fontWeight: "bold" }}>
//                     2021
//                   </Box>
//                   .
//                 </Typography>
//               }
//             />
//           </ListItem>
//           <ListItem sx={{ display: "item", listStyleType: "disc", pl: 2 }}>
//             <ListItemText
//               primary={
//                 <Typography variant="body1">
//                   <strong>School:</strong> Sapphire School of Learning
//                 </Typography>
//               }
//               secondary={
//                 <Typography variant="body2" sx={{ mt: 1 }}>
//                   I passed my matriculation in Computer Science with{" "}
//                   <Box component="span" sx={{ color: "#16a085", fontWeight: "bold" }}>
//                     94%
//                   </Box>{" "}
//                   in{" "}
//                   <Box component="span" sx={{ color: "#16a085", fontWeight: "bold" }}>
//                     2019
//                   </Box>
//                   .
//                 </Typography>
//               }
//             />
//           </ListItem>
//         </List>

//         <Typography variant="h5" sx={{ color: "#16a085", mb: 2 }}>
//           Professional Skills
//         </Typography>
//         <List>
//           <ListItem sx={{ display: "list-item", listStyleType: "disc", pl: 2 }}>
//             <ListItemText
//               primary={
//                 <Typography variant="body1">
//                   <strong>Programming Languages:</strong> JavaScript, Python,
//                   Java, C, C++
//                 </Typography>
//               }
//             />
//           </ListItem>
//           <ListItem sx={{ display: "list-item", listStyleType: "disc", pl: 2 }}>
//             <ListItemText
//               primary={
//                 <Typography variant="body1">
//                   <strong>Web Development:</strong> HTML, CSS, React, Express,
//                   Node.js
//                 </Typography>
//               }
//             />
//           </ListItem>
//           <ListItem sx={{ display: "list-item", listStyleType: "disc", pl: 2 }}>
//             <ListItemText
//               primary={
//                 <Typography variant="body1">
//                   <strong>Database Management:</strong> MySQL, MongoDB
//                 </Typography>
//               }
//             />
//           </ListItem>
//           <ListItem sx={{ display: "list-item", listStyleType: "disc", pl: 2 }}>
//             <ListItemText
//               primary={
//                 <Typography variant="body1">
//                   <strong>Tools & Platforms:</strong> Git
//                 </Typography>
//               }
//             />
//           </ListItem>
//           <ListItem sx={{ display: "list-item", listStyleType: "disc", pl: 2 }}>
//             <ListItemText
//               primary={
//                 <Typography variant="body1">
//                   <strong>Design & UX/UI:</strong> Figma
//                 </Typography>
//               }
//             />
//           </ListItem>
//         </List>

//         <Typography variant="h5" sx={{ color: "#16a085", mb: 2 }}>
//           Experience
//         </Typography>
//         <Typography variant="body1" sx={{ mb: 3, textIndent: "50px" }}>
//           I have worked in front-end & back-end technologies. I have developed
//           various projects from simple websites to dynamic websites. My
//           professional experience includes:
//         </Typography>
//         <List>
//           <ListItem sx={{ display: "list-item", listStyleType: "disc", pl: 2 }}>
//             <ListItemText
//               primary={
//                 <Typography variant="body1">
//                   <strong>Frontend Development:</strong> Creating responsive and
//                   engaging user interfaces using modern frameworks and libraries.
//                 </Typography>
//               }
//             />
//           </ListItem>
//           <ListItem sx={{ display: "list-item", listStyleType: "disc", pl: 2 }}>
//             <ListItemText
//               primary={
//                 <Typography variant="body1">
//                   <strong>Backend Development:</strong> Building scalable APIs
//                   and integrating them with databases to support dynamic web
//                   applications.
//                 </Typography>
//               }
//             />
//           </ListItem>
//           <ListItem sx={{ display: "list-item", listStyleType: "disc", pl: 2 }}>
//             <ListItemText
//               primary={
//                 <Typography variant="body1">
//                   <strong>Project Management:</strong> Leading development teams
//                   and managing project timelines to deliver high-quality software
//                   solutions.
//                 </Typography>
//               }
//             />
//           </ListItem>
//         </List>

//         <Typography variant="h5" sx={{ color: "#16a085", mb: 2 }}>
//           Personal Projects
//         </Typography>
//         <Typography variant="body1" sx={{ mb: 3, textIndent: "50px" }}>
//           In addition to my professional work, I have worked on several personal
//           projects, including:
//         </Typography>
//         <List>
//           <ListItem sx={{ display: "list-item", listStyleType: "disc", pl: 2 }}>
//             <ListItemText
//               primary={
//                 <Typography variant="body1">
//                   <strong>E-commerce Platform:</strong> Developed a fully
//                   functional e-commerce site with secure payment processing and
//                   user management.
//                 </Typography>
//               }
//             />
//           </ListItem>
//           <ListItem sx={{ display: "list-item", listStyleType: "disc", pl: 2 }}>
//             <ListItemText
//               primary={
//                 <Typography variant="body1">
//                   <strong>Chatting:</strong> Created an online chatting
//                   application.
//                 </Typography>
//               }
//             />
//           </ListItem>
//           <ListItem sx={{ display: "list-item", listStyleType: "disc", pl: 2 }}>
//             <ListItemText
//               primary={
//                 <Typography variant="body1">
//                   <strong>More Projects:</strong> You can check in the Project
//                   section.
//                 </Typography>
//               }
//             />
//           </ListItem>
//         </List>

//         <Typography variant="body1" sx={{ mb: 3, textIndent: "50px" }}>
//           I am always eager to learn new technologies and take on challenging
//           projects. Feel free to browse through my portfolio to see some of the
//           exciting work I’ve been involved in. Let’s connect and explore how we
//           can collaborate on your next project!
//         </Typography>
//       </Box>
//     </Container>
//   );
// }

// export default Introduction;

import { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
} from "@mui/material";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("biography");

  const tabs = [
    { id: "biography", label: "Biography", number: "01" },
    { id: "education", label: "Education", number: "02" },

    { id: "experience", label: "Experience", number: "03" },
  ];

  const resumeData = {
    biography: [
      {
        title: "Introduction",
        description:
          "Hello! I’m Muhammad Abrar, a passionate web and software developer with a keen interest in creating innovative solutions and driving technological advancements. My journey in the tech world has been fueled by a love for problem-solving and a dedication to building user-friendly applications.\n\nI am also interested in Machine Learning, Artificial Intelligence, and Image Processing. I have started learning new concepts in these fields and look forward to exploring them further.",
      },
    ],
    education: [
      {
        title: "BS (Software Engineering)",
        university: "COMSATS University Lahore Campus",
        year: "2021 - 2025",
        description: "Currently in the 8th semester with a CGPA of 3.66.",
      },
      {
        title: "Intermediate (FSC Pre-Engineering)",
        university: "Superior Group of Colleges",
        year: "2019 - 2021",
        description: "Completed with 98% in 2021.",
      },
      {
        title: "Matriculation (Computer Science)",
        university: "Sapphire School of Learning",
        year: "2007 - 2019",
        description: "Completed with 94% in 2019.",
      },
    ],
    experience: [
      {
        title: "Internship in Web Development",
        university: "Punjab Workers Welfare Fund",
        year: "2024-present",
        description:
          "During my internship at PWWF, I contributed to digitalizing their systems by developing and managing the E-Letters and Academia Connect modules. I worked on streamlining the flow of letters across various departments, tracking their statuses, and managing organizational expenses. Additionally, I helped design web portals for admin, schools, and teachers while integrating a mobile application for students, enabling efficient management of courses, student progress, and resources.",
      },
    ],
    
   
  };

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
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        My Resume
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "center", gap: "1rem", mb: 4 }}
      >
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            sx={{
              backgroundColor: activeTab === tab.id ? "#f39c12" : "#1e1e1e",
              color: "white",
              px: 4,
              py: 1,
              borderRadius: "20px",
            }}
          >
            {tab.label}{" "}
            <Typography component="span" sx={{ fontWeight: "bold", ml: 1 }}>
              {tab.number}
            </Typography>
          </Button>
        ))}
      </Box>
      <Grid container spacing={3} justifyContent="center">
        {resumeData[activeTab]?.map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card
              sx={{
                backgroundColor: "#1e1e1e",
                color: "white",
                p: 3,
                textAlign: "center",
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {item.title}
                </Typography>
                {item.university && (
                  <Typography variant="body2" sx={{ color: "#f39c12" }}>
                    {item.university}
                  </Typography>
                )}
                {item.year && (
                  <Typography
                    variant="body2"
                    sx={{
                      backgroundColor: "#f39c12",
                      color: "black",
                      px: 2,
                      py: 0.5,
                      borderRadius: "10px",
                      display: "inline-block",
                      mt: 1,
                    }}
                  >
                    {item.year}
                  </Typography>
                )}
                <Typography variant="body2" sx={{ mt: 2 }}>
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Resume;
