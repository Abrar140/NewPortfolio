import React, { useState } from "react";
import { TextField, Button, Typography, Box, Grid, Link } from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      const subject = encodeURIComponent(formData.name);
      const body = encodeURIComponent(formData.message);
      const mailtoLink = `mailto:muhamadabraramjad@gmail.com?subject=${subject}&body=${body}`;
  
      // Open the default email client
      window.location.href = mailtoLink;
  
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error("Please fill in all fields correctly.");
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#1e1e1e",
        padding: "2rem",
        textAlign: "center",
        boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.1)",
        "&:hover": {
          boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.2)",
        },
      }}
    >
      <ToastContainer />
      <Typography
        variant="h4"
        sx={{ marginBottom: 2, color: "#f39c12", fontWeight: "bold" }}
      >
        Get in Touch
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4, color: "#fff" }}>
        Have a project in mind or just want to connect? Let's chat!
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: "left", color: "#fff" }}>
            {[
              {
                icon: (
                  <LocationOn
                    sx={{ color: "#f39c12", fontSize: 30, marginRight: 2 }}
                  />
                ),
                title: "Location",
                value: "Lahore, Pakistan",
              },
              {
                icon: (
                  <Phone
                    sx={{ color: "#f39c12", fontSize: 30, marginRight: 2 }}
                  />
                ),
                title: "Phone",
                value: "+92 3006241919",
              },
              {
                icon: (
                  <Email
                    sx={{ color: "#f39c12", fontSize: 30, marginRight: 2 }}
                  />
                ),
                title: "Email",
                value: "muhamadabraramjad@gmail.com",
              },
              {
                icon: (
                  <LinkedIn
                    sx={{ color: "#f39c12", fontSize: 30, marginRight: 2 }}
                  />
                ),
                title: "LinkedIn",
                value: "muhammad-abrar-07315a290",
              },
              {
                icon: (
                  <GitHub
                    sx={{ color: "#f39c12", fontSize: 30, marginRight: 2 }}
                  />
                ),
                title: "GitHub",
                value: "Abrar140",
              },
            ].map((item, index) => (
              <Box
                key={index}
                sx={{ display: "flex", alignItems: "center", marginBottom: 3 }}
              >
                {item.icon}
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1">{item.value}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "#232020",
              padding: "30px",
              borderRadius: "10px",
            }}
          >
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                sx={{
                  marginBottom: 2,
                  backgroundColor: "#1e1e1e",
                  borderRadius: "5px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#f39c12" }, // Default border color
                    "&:hover fieldset": { borderColor: "#d68709" }, // On hover
                    "&.Mui-focused fieldset": { borderColor: "#f39c12" }, // On focus
                  },
                  input: { color: "#fff" }, // Text color
                }}
                InputLabelProps={{ style: { color: "#f39c12" } }} // Label color
                required
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                sx={{
                  marginBottom: 2,
                  backgroundColor: "#1e1e1e",
                  borderRadius: "5px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#f39c12" },
                    "&:hover fieldset": { borderColor: "#d68709" },
                    "&.Mui-focused fieldset": { borderColor: "#f39c12" },
                  },
                  input: { color: "#fff" },
                }}
                InputLabelProps={{ style: { color: "#f39c12" } }}
                required
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                sx={{
                  marginBottom: 2,
                  backgroundColor: "#1e1e1e",
                  borderRadius: "5px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#f39c12" },
                    "&:hover fieldset": { borderColor: "#d68709" },
                    "&.Mui-focused fieldset": { borderColor: "#f39c12" },
                  },
                  input: { color: "#fff" },
                }}
                InputLabelProps={{ style: { color: "#f39c12" } }}
                required
              />

              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#f39c12",
                  color: "#000",
                  fontWeight: "bold",
                  padding: "12px 30px",
                  "&:hover": { backgroundColor: "#d68709" },
                }}
              >
                Send Message
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
