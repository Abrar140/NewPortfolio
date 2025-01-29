







import React, { useState, useEffect } from "react";
import { Button, IconButton, Typography, Box } from "@mui/material";
import { LinkedIn, Email, Phone, GitHub, FileDownload, ContentCopy } from "@mui/icons-material";
import AbrarImage from "./Abrar.png";
import CV from "./Abrar_CV.pdf";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Homepage = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const jobTitles = ["Software Engineer", "MERN Developer", "Frontend-Developer", "Backend-Developer"];
  const typingSpeed = 100; // Speed in milliseconds

  useEffect(() => {
    const currentTitle = jobTitles[currentIndex];

    if (charIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setJobTitle((prev) => prev + currentTitle[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setJobTitle("");
        setCurrentIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
      }, 2000); // Pause before starting the next title
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentIndex, jobTitles]);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Muhammad Abrar Cv.pdf";
    link.click();
  };

  const copyEmail = () => {
    const email = "muhamadabraramjad@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      toast.success("Email address copied to clipboard!");
    });
  };

  return (
    <>
      {/* ToastContainer must be added to display notifications */}
      <ToastContainer />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#121212",
          boxShadow: 3,
          px: 4,
          py: 2,
          position: "relative",
          overflow: "hidden",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{ flex: 1, textAlign: "left" }}>
          <Typography variant="subtitle1" sx={{ color: "#f39c12", fontWeight: "bold" }}>
            Welcome To My Portfolio
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "bold", mt: 1, color: "#ffffff" }}>
            Hi, I am <span style={{ color: "#f39c12" }}>Muhammad Abrar</span>
          </Typography>
          <Typography variant="h5" sx={{ color: "#f39c12", mt: 2 }}>
            {jobTitle}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, color: "#ffffff" }}>
            Passionate about web development, AI, and data analytics. Seeking opportunities to innovate and grow.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
            <IconButton
              href="https://linkedin.com/in/muhammad-abrar-07315a290"
              target="_blank"
              sx={{ backgroundColor: "#f39c12", color: "#121212" }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton href="mailto:muhamadabraramjad@gmail.com" sx={{ backgroundColor: "#f39c12", color: "#121212" }}>
              <Email />
            </IconButton>
            <IconButton href="tel:+923006241919" sx={{ backgroundColor: "#f39c12", color: "#121212" }}>
              <Phone />
            </IconButton>
            <IconButton href="https://github.com/Abrar140" target="_blank" sx={{ backgroundColor: "#f39c12", color: "#121212" }}>
              <GitHub />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
            <Button
              variant="contained"
              startIcon={<FileDownload />}
              onClick={downloadCV}
              sx={{ backgroundColor: "#f39c12" }}
            >
              Download CV
            </Button>
            <Button
              variant="contained"
              startIcon={<ContentCopy />}
              onClick={copyEmail}
              sx={{ backgroundColor: "#f39c12" }}
            >
              Copy Email Address
            </Button>
          </Box>
        </Box>
        <Box sx={{ mt: { xs: 4, md: 0 }, position: "relative" }}>
          <img src={AbrarImage} alt="Muhammad Abrar" style={{ maxWidth: "100%", borderRadius: "10px" }} />
        </Box>
      </Box>
    </>
  );
};

export default Homepage;
