import React, { useState, useEffect } from "react";
import { Button, IconButton, Typography, Box, Container } from "@mui/material";
import { LinkedIn, Email, Phone, GitHub, FileDownload, ContentCopy } from "@mui/icons-material";
import AbrarImage from "./Abrar.png"; // Import the image
import CV from "./Abrar_CV.pdf"; // Import the CV PDF

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
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#fff",
          borderRadius: 2,
          boxShadow: 3,
          p: 4,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" sx={{ color: "#16a085" }}>
            Hi, I am
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "bold", mt: 1 }}>
            Muhammad Abrar
          </Typography>
          <Typography variant="h5" sx={{ color: "#16a085", mt: 2 }}>
            {jobTitle}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            I am an emerging web developer looking for opportunities in the field
            of web development. I have also started Machine Learning, Artificial
            Intelligence, Image Processing.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
            <IconButton
              href="https://linkedin.com/in/muhammad-abrar-07315a290"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ backgroundColor: "#16a085", color: "#fff", "&:hover": { backgroundColor: "#1abc9c" } }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              href="mailto:muhamadabraramjad@gmail.com"
              sx={{ backgroundColor: "#16a085", color: "#fff", "&:hover": { backgroundColor: "#1abc9c" } }}
            >
              <Email />
            </IconButton>
            <IconButton
              href="tel:+92 316 4303315"
              sx={{ backgroundColor: "#16a085", color: "#fff", "&:hover": { backgroundColor: "#1abc9c" } }}
            >
              <Phone />
            </IconButton>
            <IconButton
              href="https://github.com/Abrar140"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ backgroundColor: "#16a085", color: "#fff", "&:hover": { backgroundColor: "#1abc9c" } }}
            >
              <GitHub />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
            <Button
              variant="contained"
              startIcon={<FileDownload />}
              onClick={downloadCV}
              sx={{ backgroundColor: "#16a085", "&:hover": { backgroundColor: "#1abc9c" } }}
            >
              Download CV
            </Button>
            <Button
              variant="contained"
              startIcon={<ContentCopy />}
              onClick={copyEmail}
              sx={{ backgroundColor: "#16a085", "&:hover": { backgroundColor: "#1abc9c" } }}
            >
              Copy Email Address
            </Button>
          </Box>
        </Box>
        <Box sx={{ mt: { xs: 4, md: 0 }, ml: { md: 4 } }}>
          <img
            src={AbrarImage}
            alt="Abrar Amjad"
            style={{ maxWidth: "100%", borderRadius: "50%" }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Homepage;