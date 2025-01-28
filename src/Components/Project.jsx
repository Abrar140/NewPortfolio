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
