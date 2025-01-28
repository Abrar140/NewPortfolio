// import React, { useState } from "react";
// import {
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Grid,
//   Box,
//   Snackbar,
//   Alert,
// } from "@mui/material";
// import SendIcon from "@mui/icons-material/Send";
// import emailjs from "@emailjs/browser";

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState("");
//   const [snackbarSeverity, setSnackbarSeverity] = useState("success");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//     // Check if all fields are filled
//     if (!formData.name) {
//       setSnackbarMessage("Please fill in the Name field!");
//       setSnackbarSeverity("error");
//       setOpenSnackbar(true);
//       return;
//     }
  
//     if (!formData.email) {
//       setSnackbarMessage("Please fill in the Email field!");
//       setSnackbarSeverity("error");
//       setOpenSnackbar(true);
//       return;
//     }
  
//     if (!formData.subject) {
//       setSnackbarMessage("Please fill in the Subject field!");
//       setSnackbarSeverity("error");
//       setOpenSnackbar(true);
//       return;
//     }
  
//     if (!formData.message) {
//       setSnackbarMessage("Please fill in the Message field!");
//       setSnackbarSeverity("error");
//       setOpenSnackbar(true);
//       return;
//     }
  
//     // Send email using EmailJS
//     emailjs
//       .send(
//         "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
//         "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
//         formData,
//         "YOUR_USER_ID" // Replace with your EmailJS User ID
//       )
//       .then(
//         (response) => {
//           console.log("Email sent successfully!", response);
//           setSnackbarMessage("Email sent successfully!");
//           setSnackbarSeverity("success");
//           setOpenSnackbar(true);
//           setFormData({
//             name: "",
//             email: "",
//             subject: "",
//             message: "",
//           });
//         },
//         (error) => {
//           console.error("Failed to send email.", error);
//           setSnackbarMessage("Failed to send email. Please try again.");
//           setSnackbarSeverity("error");
//           setOpenSnackbar(true);
//         }
//       );
//   };

//   const handleCloseSnackbar = () => {
//     setOpenSnackbar(false);
//   };

//   return (
//     <Container
//       maxWidth="md"
//       sx={{
//         margin: "20px auto",
//         padding: "20px",
//         background: "#fff",
//         borderRadius: "5px",
//         boxShadow: "0px 4px 10px 1px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       <Typography
//         variant="h2"
//         sx={{
//           marginBottom: "20px",
//           fontSize: "35px",
//           color: "#16a085",
//           textAlign: "center",
//           fontFamily: "'Poppins', sans-serif",
//         }}
//         gutterBottom
//       >
//         Contact Me
//       </Typography>
//       <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               id="name"
//               name="name"
//               label="Name"
//               placeholder="Enter your name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               sx={{
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": {
//                     borderColor: "lightgrey",
//                   },
//                   "&:hover fieldset": {
//                     borderColor: "#16a085",
//                   },
//                   "&.Mui-focused fieldset": {
//                     borderColor: "#16a085",
//                     boxShadow: "inset 0px 0px 2px 2px rgba(26, 188, 156, 0.25)",
//                   },
//                 },
//               }}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               id="email"
//               name="email"
//               label="Email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               type="email"
//               sx={{
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": {
//                     borderColor: "lightgrey",
//                   },
//                   "&:hover fieldset": {
//                     borderColor: "#16a085",
//                   },
//                   "&.Mui-focused fieldset": {
//                     borderColor: "#16a085",
//                     boxShadow: "inset 0px 0px 2px 2px rgba(26, 188, 156, 0.25)",
//                   },
//                 },
//               }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               id="subject"
//               name="subject"
//               label="Subject"
//               placeholder="Enter your subject"
//               value={formData.subject}
//               onChange={handleChange}
//               required
//               sx={{
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": {
//                     borderColor: "lightgrey",
//                   },
//                   "&:hover fieldset": {
//                     borderColor: "#16a085",
//                   },
//                   "&.Mui-focused fieldset": {
//                     borderColor: "#16a085",
//                     boxShadow: "inset 0px 0px 2px 2px rgba(26, 188, 156, 0.25)",
//                   },
//                 },
//               }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               id="message"
//               name="message"
//               label="Message"
//               placeholder="Explain in detail"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               multiline
//               rows={4}
//               sx={{
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": {
//                     borderColor: "lightgrey",
//                   },
//                   "&:hover fieldset": {
//                     borderColor: "#16a085",
//                   },
//                   "&.Mui-focused fieldset": {
//                     borderColor: "#16a085",
//                     boxShadow: "inset 0px 0px 2px 2px rgba(26, 188, 156, 0.25)",
//                   },
//                 },
//               }}
//             />
//           </Grid>
//         </Grid>
//         <Button
//           type="submit"
//           fullWidth
//           variant="contained"
//           sx={{
//             marginTop: "20px",
//             marginBottom: "10px",
//             backgroundColor: "#16a085",
//             color: "#fff",
//             fontSize: "18px",
//             fontWeight: "500",
//             "&:hover": {
//               backgroundColor: "#fff",
//               color: "#16a085",
//               border: "2px solid #16a085",
//             },
//           }}
//         >
//           Submit
//         </Button>
//       </Box>

//       {/* Snackbar for notifications */}
//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={6000}
//         onClose={handleCloseSnackbar}
//       >
//         <Alert
//           onClose={handleCloseSnackbar}
//           severity={snackbarSeverity}
//           sx={{ width: "100%" }}
//         >
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//     </Container>
//   );
// };

// export default ContactUs;
















import React, { useState } from "react";
import { Box, TextField, Button, Typography, IconButton } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LinkedIn, Email, Phone, GitHub } from "@mui/icons-material";

const ContactMe = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your message has been sent successfully!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
        backgroundColor: "#121212",
        color: "#ffffff",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 2, color: "#f39c12" }}>
        Contact Me
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <TextField
          name="name"
          label="Your Name"
          variant="outlined"
          fullWidth
          value={formData.name}
          onChange={handleChange}
          required
          sx={{ backgroundColor: "#ffffff" }}
        />
        <TextField
          name="email"
          label="Your Email"
          type="email"
          variant="outlined"
          fullWidth
          value={formData.email}
          onChange={handleChange}
          required
          sx={{ backgroundColor: "#ffffff" }}
        />
        <TextField
          name="message"
          label="Your Message"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          value={formData.message}
          onChange={handleChange}
          required
          sx={{ backgroundColor: "#ffffff" }}
        />
        <Button type="submit" variant="contained" sx={{ backgroundColor: "#f39c12" }}>
          Send Message
        </Button>
      </Box>

      <Box sx={{ marginTop: 4, textAlign: "center" }}>
        <Typography variant="h6" sx={{ color: "#f39c12" }}>
          Connect with me
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, marginTop: 2 }}>
          <IconButton href="https://linkedin.com/in/muhammad-abrar-07315a290" target="_blank" sx={{ backgroundColor: "#f39c12", color: "#121212" }}>
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
      </Box>

      <ToastContainer />
    </Box>
  );
};

export default ContactMe;
