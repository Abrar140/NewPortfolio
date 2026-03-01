import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Stack,
} from "@mui/material";
import {
  LinkedIn,
  Email,
  Phone,
  GitHub,
  FileDownload,
  ContentCopy,
} from "@mui/icons-material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AbrarImage from "./Abrar.png";
import CV from "./Abrar_CV.pdf";

const jobTitles = [
  "Software Engineer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "MERN Stack Developer",
  "MEAN Stack Developer",
];

const typingSpeed = 100;
const pauseTime = 1500;

const Homepage = () => {
  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentTitle = jobTitles[titleIndex];

    if (charIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentTitle[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setTitleIndex((prev) => (prev + 1) % jobTitles.length);
      }, pauseTime);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, titleIndex]);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Muhammad_Abrar_CV.pdf";
    link.click();
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("muhamadabraramjad@gmail.com");
    toast.success("Email copied to clipboard!");
  };

  return (
    <>
      <ToastContainer />

      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#121212",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
        }}
      >
        <Box
          sx={{
            maxWidth: "1200px",
            width: "100%",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 6,
            alignItems: "center",
          }}
        >
          {/* LEFT CONTENT */}
          <Box>
            <Typography
              sx={{
                color: "#f39c12",
                fontWeight: 600,
                letterSpacing: 1.5,
                mb: 1,
              }}
            >
              WELCOME TO MY PORTFOLIO
            </Typography>

            <Typography
              variant="h3"
              sx={{
                color: "#ffffff",
                fontWeight: 800,
                lineHeight: 1.2,
              }}
            >
              Hi, I am{" "}
              <Box component="span" sx={{ color: "#f39c12" }}>
                Muhammad Abrar
              </Box>
            </Typography>

            <Typography
              variant="h5"
              sx={{
                mt: 2,
                color: "#f39c12",
                minHeight: "32px",
                fontWeight: 600,
              }}
            >
              {text}
              <Box component="span" sx={{ opacity: 0.6 }}>|</Box>
            </Typography>

            <Typography
              sx={{
                mt: 3,
                color: "#ffffff",
                maxWidth: "520px",
                lineHeight: 1.7,
              }}
            >
              Passionate about web development. Seeking opportunities to
              innovate, build scalable applications, and grow as a
              professional developer.
            </Typography>

            {/* SOCIAL ICONS */}
            <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
              {[
                {
                  icon: <LinkedIn />,
                  link: "https://linkedin.com/in/muhammad-abrar-07315a290",
                },
                {
                  icon: <Email />,
                  link: "mailto:muhamadabraramjad@gmail.com",
                },
                {
                  icon: <Phone />,
                  link: "tel:+923006241919",
                },
                {
                  icon: <GitHub />,
                  link: "https://github.com/Abrar140",
                },
              ].map((item, index) => (
                <IconButton
                  key={index}
                  href={item.link}
                  target="_blank"
                  sx={{
                    backgroundColor: "#f39c12",
                    color: "#121212",
                    transition: "0.3s",
                    "&:hover": {
                      backgroundColor: "#f39c12",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  {item.icon}
                </IconButton>
              ))}
            </Stack>

            {/* ACTION BUTTONS */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mt: 4 }}
            >
              <Button
                onClick={downloadCV}
                startIcon={<FileDownload />}
                sx={{
                  backgroundColor: "#f39c12",
                  color: "#121212",
                  px: 4,
                  py: 1.3,
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "#f39c12",
                  },
                }}
              >
                Download CV
              </Button>

              <Button
                onClick={copyEmail}
                startIcon={<ContentCopy />}
                sx={{
                  border: "2px solid #f39c12",
                  color: "#f39c12",
                  px: 4,
                  py: 1.3,
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "#f39c12",
                    color: "#121212",
                  },
                }}
              >
                Copy Email
              </Button>
            </Stack>
          </Box>

          {/* RIGHT IMAGE */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 15px 30px rgba(0,0,0,0.6)",
                maxWidth: "380px",
                border: "2px solid #f39c12",
              }}
            >
              <img
                src={AbrarImage}
                alt="Muhammad Abrar"
                style={{ width: "100%", display: "block" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Homepage;