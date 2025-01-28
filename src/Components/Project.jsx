// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   List,
//   ListItem,
//   ListItemText,
// } from "@mui/material";

// const Project = ({ name, category, languages, description, codeLink, videoLink }) => {
//   const [isReadMore, setIsReadMore] = useState(true);
//   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

//   useEffect(() => {
//     const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const toggleReadMore = () => setIsReadMore(!isReadMore);

//   return (
//     <Box
//       sx={{
//         backgroundColor: "#fff",
//         border: "5px solid #16a085",
//         borderRadius: "15px",
//         padding: "20px",
//         height: "340px",
//         width: "100%",
//         overflow: "auto",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "flex-start",
//         alignItems: "center",
//         textAlign: "left",
//         fontFamily: '"Poppins", sans-serif',
//         "&::-webkit-scrollbar": {
//           height: "10px",
//           width: "10px",
//         },
//         "&::-webkit-scrollbar-track": {
//           borderRadius: "5px",
//           backgroundColor: "#dfe9eb",
//         },
//         "&::-webkit-scrollbar-thumb": {
//           borderRadius: "5px",
//           backgroundColor: "rgba(26, 188, 156, 0.25)",
//         },
//         "&::-webkit-scrollbar-thumb:hover": {
//           backgroundColor: "rgba(26, 188, 156, 0.25)",
//         },
//       }}
//     >
//       <Typography variant="h5" sx={{ color: "#16a085", fontWeight: "bold" }}>
//         {name}
//       </Typography>
//       <Typography variant="subtitle1" sx={{ color: "#16a085", mb: 2 }}>
//         {category}
//       </Typography>

//       {/* Tags */}
//       <Box sx={{ width: "100%", mb: 2 }}>
//         <List
//           sx={{
//             display: "flex",
//             flexWrap: "wrap",
//             gap: 1,
//             padding: 0,
//           }}
//         >
//           {languages.map((language, index) => (
//             <ListItem
//               key={index}
//               sx={{
//                 display: "inline-flex",
//                 width: "auto",
//                 padding: "4px 8px",
//                 backgroundColor: "#16a085",
//                 color: "#fff",
//                 borderRadius: "4px",
//                 fontSize: "12px",
//                 "&:hover": {
//                   backgroundColor: "#fff",
//                   color: "#16a085",
//                   border: "2px solid #16a085",
//                 },
//               }}
//             >
//               <ListItemText primary={language} />
//             </ListItem>
//           ))}
//         </List>
//       </Box>

//       {/* Description */}
//       <Box
//         sx={{
//           width: "100%",
//           overflow: "hidden",
//           transition: "max-height 0.3s ease",
//           maxHeight: isReadMore && !isSmallScreen ? "100px" : "none",
//         }}
//       >
//         <Typography variant="body1" sx={{ mb: 2 }}>
//           {description}
//         </Typography>
//       </Box>

//       {/* Read More/Show Less */}
//       {!isSmallScreen && description.length > 100 && (
//         <Button
//           onClick={toggleReadMore}
//           sx={{
//             color: "#16a085",
//             textTransform: "none",
//             fontSize: "14px",
//             padding: 0,
//             "&:hover": {
//               backgroundColor: "transparent",
//               textDecoration: "underline",
//             },
//           }}
//         >
//           {isReadMore ? "...Read More" : "Show Less"}
//         </Button>
//       )}

//       {/* Project Links */}
//       {(codeLink || videoLink) && (
//         <Box
//           sx={{
//             display: "flex",
//             gap: 2,
//             mt: 2,
//           }}
//         >
//           {codeLink && (
//             <Button
//               variant="contained"
//               sx={{
//                 backgroundColor: "#16a085",
//                 color: "#fff",
//                 fontSize: "12px",
//                 padding: "4px 8px",
//                 "&:hover": {
//                   backgroundColor: "#fff",
//                   color: "#16a085",
//                   border: "2px solid #16a085",
//                 },
//               }}
//             >
//               <a
//                 href={codeLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{ textDecoration: "none", color: "inherit" }}
//               >
//                 Code
//               </a>
//             </Button>
//           )}
//           {videoLink && (
//             <Button
//               variant="contained"
//               sx={{
//                 backgroundColor: "#16a085",
//                 color: "#fff",
//                 fontSize: "12px",
//                 padding: "4px 8px",
//                 "&:hover": {
//                   backgroundColor: "#fff",
//                   color: "#16a085",
//                   border: "2px solid #16a085",
//                 },
//               }}
//             >
//               <a
//                 href={videoLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{ textDecoration: "none", color: "inherit" }}
//               >
//                 Video
//               </a>
//             </Button>
//           )}
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default Project;









import React from "react";
import { Box, Typography, Button, Chip } from "@mui/material";

const Project = ({ project }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#1e1e1e",
        padding: "2rem",
        textAlign: "center",
        boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // Ensures equal spacing
        minHeight: "380px", // Optional, can be removed for fully flexible height
        height: "auto", // Allows height to be determined by content
        "&:hover": {
          boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.2)",
        },
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        {project.name}
      </Typography>
      <Typography variant="body2" sx={{ color: "#f39c12", mb: 2 }}>
        {project.category}
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        {project.description}
      </Typography>
      
      {/* Display the languages */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
          Languages:
        </Typography>
        <Box>
          {project.languages.map((language, index) => (
            <Chip
              key={index}
              label={language}
              sx={{
                backgroundColor: "#f39c12",
                color: "#000",
                marginRight: "0.5rem",
                marginBottom: "0.5rem",
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Render buttons only if the links exist */}
      {project.codeLink && (
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#f39c12",
            color: "#000",
            padding: "0.8rem 2rem",
            fontSize: "1rem",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#d68709" },
            marginBottom: "1rem",
          }}
          href={project.codeLink}
          target="_blank"
        >
          View Code
        </Button>
      )}
      
      {project.videoLink && (
        <Button
          variant="outlined"
          sx={{
            borderColor: "#f39c12",
            color: "#f39c12",
            padding: "0.8rem 2rem",
            fontSize: "1rem",
            fontWeight: "bold",
            "&:hover": { borderColor: "#d68709", color: "#d68709" },
          }}
          href={project.videoLink}
          target="_blank"
        >
          View Video
        </Button>
      )}
    </Box>
  );
};

export default Project;
