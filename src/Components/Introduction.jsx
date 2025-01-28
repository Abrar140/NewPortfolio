// import { useState } from "react";
// import {
//   Box,
//   Typography,
//   Grid,
//   Button,
//   Card,
//   CardContent,
// } from "@mui/material";

// const Resume = () => {
//   const [activeTab, setActiveTab] = useState("biography");

//   const tabs = [
//     { id: "biography", label: "Biography", number: "01" },
//     { id: "education", label: "Education", number: "02" },

//     { id: "experience", label: "Experience", number: "03" },
//   ];

//   const resumeData = {
//     biography: [
//       {
//         title: "Introduction",
//         description:
//           "Hello! I’m Muhammad Abrar, a passionate web and software developer with a keen interest in creating innovative solutions and driving technological advancements. My journey in the tech world has been fueled by a love for problem-solving and a dedication to building user-friendly applications.\n\nI am also interested in Machine Learning, Artificial Intelligence, and Image Processing. I have started learning new concepts in these fields and look forward to exploring them further.",
//       },
//     ],
//     education: [
//       {
//         title: "BS (Software Engineering)",
//         university: "COMSATS University Lahore Campus",
//         year: "2021 - 2025",
//         description: "Currently in the 8th semester with a CGPA of 3.66.",
//       },
//       {
//         title: "Intermediate (FSC Pre-Engineering)",
//         university: "Superior Group of Colleges",
//         year: "2019 - 2021",
//         description: "Completed with 98% in 2021.",
//       },
//       {
//         title: "Matriculation (Computer Science)",
//         university: "Sapphire School of Learning",
//         year: "2007 - 2019",
//         description: "Completed with 94% in 2019.",
//       },
//     ],
//     experience: [
//       {
//         title: "Internship in Web Development",
//         university: "Punjab Workers Welfare Fund",
//         year: "2024-present",
//         description:
//           "During my internship at PWWF, I contributed to digitalizing their systems by developing and managing the E-Letters and Academia Connect modules. I worked on streamlining the flow of letters across various departments, tracking their statuses, and managing organizational expenses. Additionally, I helped design web portals for admin, schools, and teachers while integrating a mobile application for students, enabling efficient management of courses, student progress, and resources.",
//       },
//     ],
//   };

//   return (
//     <Box
//       sx={{
//         backgroundColor: "#121212",
//         color: "#ffffff",
//         minHeight: "100vh",
//         padding: "2rem",
//         textAlign: "center",
//       }}
//     >
//       <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
//         Information About Me
//       </Typography>
//       <Box
//         sx={{ display: "flex", justifyContent: "center", gap: "1rem", mb: 4 }}
//       >
//         {tabs.map((tab) => (
//           <Button
//             key={tab.id}
//             onClick={() => setActiveTab(tab.id)}
//             sx={{
//               backgroundColor: activeTab === tab.id ? "#f39c12" : "#1e1e1e",
//               color: "white",
//               px: 4,
//               py: 1,
//               borderRadius: "20px",
//             }}
//           >
//             {tab.label}{" "}
//             <Typography component="span" sx={{ fontWeight: "bold", ml: 1 }}>
//               {tab.number}
//             </Typography>
//           </Button>
//         ))}
//       </Box>
//       <Grid container spacing={3} justifyContent="center">
//         {resumeData[activeTab]?.map((item, index) => (
//           <Grid item xs={12} sm={6} key={index}>
//             <Card
//               sx={{
//                 backgroundColor: "#1e1e1e",
//                 color: "white",
//                 p: 3,
//                 textAlign: "center",
//               }}
//             >
//               <CardContent>
//                 <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//                   {item.title}
//                 </Typography>
//                 {item.university && (
//                   <Typography variant="body2" sx={{ color: "#f39c12" }}>
//                     {item.university}
//                   </Typography>
//                 )}
//                 {item.year && (
//                   <Typography
//                     variant="body2"
//                     sx={{
//                       backgroundColor: "#f39c12",
//                       color: "black",
//                       px: 2,
//                       py: 0.5,
//                       borderRadius: "10px",
//                       display: "inline-block",
//                       mt: 1,
//                     }}
//                   >
//                     {item.year}
//                   </Typography>
//                 )}
//                 <Typography variant="body2" sx={{ mt: 2 }}>
//                   {item.description}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Resume;



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
        padding: { xs: "1rem", md: "2rem" },
        textAlign: "center",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        Information About Me
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
          mb: 4,
        }}
      >
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            sx={{
              backgroundColor: activeTab === tab.id ? "#f39c12" : "#1e1e1e",
              color: "white",
              px: { xs: 2, sm: 4 },
              py: 1,
              borderRadius: "20px",
              fontSize: { xs: "0.8rem", sm: "1rem" },
            }}
          >
            {tab.label}{" "}
            <Typography
              component="span"
              sx={{ fontWeight: "bold", ml: 1 }}
            >
              {tab.number}
            </Typography>
          </Button>
        ))}
      </Box>
      <Grid container spacing={3} justifyContent="center">
        {resumeData[activeTab]?.map((item, index) => (
          <Grid item xs={12} sm={8} md={6} key={index}>
            <Card
              sx={{
                backgroundColor: "#1e1e1e",
                color: "white",
                p: { xs: 2, md: 3 },
                textAlign: "center",
                borderRadius: "12px",
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
                <Typography variant="body2" sx={{ mt: 2, fontSize: { xs: "0.9rem", md: "1rem" } }}>
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