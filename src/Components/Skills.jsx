// import {
//   Container,
//   Typography,
//   Box,
//   List,
//   ListItem,
//   ListItemText,
// } from "@mui/material";

// const Skills = () => {
//   return (
//     <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
//       <Box
//         sx={{
//           backgroundColor: "#ffffff",
//           borderRadius: 4,
//           boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
//           p: 6,
//         }}
//       >
//         {/* Title */}
//         <Typography
//           variant="h3"
//           sx={{
//             textAlign: "center",
//             color: "#16a085",
//             mb: 6,
//             fontSize: "40px",
//             fontWeight: "bold",
//             letterSpacing: "1px",
//           }}
//         >
//           Skills
//         </Typography>

//         {/* Technical Skills Section */}
//         <Box sx={{ mb: 6 }}>
//           <Typography
//             variant="h4"
//             sx={{
//               color: "#16a085",
//               mb: 4,
//               fontSize: "28px",
//               fontWeight: "600",
//               borderBottom: "2px solid #16a085",
//               pb: 1,
//             }}
//           >
//             Technical Skills
//           </Typography>
//           <List sx={{ pl: 2 }}>
//             <ListItem
//               sx={{
//                 display: "list-item",
//                 listStyleType: "disc",
//                 pl: 2,
//                 mb: 1,
//               }}
//             >
//               <ListItemText
//                 primary={
//                   <Typography variant="body1" sx={{ fontSize: "18px", color: "#333" }}>
//                     <strong>Programming Languages:</strong> JavaScript, Python, Java, C, C++
//                   </Typography>
//                 }
//               />
//             </ListItem>
//             <ListItem
//               sx={{
//                 display: "list-item",
//                 listStyleType: "disc",
//                 pl: 2,
//                 mb: 1,
//               }}
//             >
//               <ListItemText
//                 primary={
//                   <Typography variant="body1" sx={{ fontSize: "18px", color: "#333" }}>
//                     <strong>Web Development:</strong> HTML, CSS, React, Express, Node.js
//                   </Typography>
//                 }
//               />
//             </ListItem>
//             <ListItem
//               sx={{
//                 display: "list-item",
//                 listStyleType: "disc",
//                 pl: 2,
//                 mb: 1,
//               }}
//             >
//               <ListItemText
//                 primary={
//                   <Typography variant="body1" sx={{ fontSize: "18px", color: "#333" }}>
//                     <strong>Database Management:</strong> MySQL, MongoDB
//                   </Typography>
//                 }
//               />
//             </ListItem>
//             <ListItem
//               sx={{
//                 display: "list-item",
//                 listStyleType: "disc",
//                 pl: 2,
//                 mb: 1,
//               }}
//             >
//               <ListItemText
//                 primary={
//                   <Typography variant="body1" sx={{ fontSize: "18px", color: "#333" }}>
//                     <strong>Tools & Platforms:</strong> Git, Docker, AWS
//                   </Typography>
//                 }
//               />
//             </ListItem>
//             <ListItem
//               sx={{
//                 display: "list-item",
//                 listStyleType: "disc",
//                 pl: 2,
//                 mb: 1,
//               }}
//             >
//               <ListItemText
//                 primary={
//                   <Typography variant="body1" sx={{ fontSize: "18px", color: "#333" }}>
//                     <strong>Design & UX/UI:</strong> Figma, Adobe XD
//                   </Typography>
//                 }
//               />
//             </ListItem>
//             <ListItem
//               sx={{
//                 display: "list-item",
//                 listStyleType: "disc",
//                 pl: 2,
//                 mb: 1,
//               }}
//             >
//               <ListItemText
//                 primary={
//                   <Typography variant="body1" sx={{ fontSize: "18px", color: "#333" }}>
//                     <strong>Microsoft Office:</strong> Word, Excel, PowerPoint, Access
//                   </Typography>
//                 }
//               />
//             </ListItem>
//           </List>
//         </Box>

//         {/* Soft Skills Section */}
//         <Box>
//           <Typography
//             variant="h4"
//             sx={{
//               color: "#16a085",
//               mb: 4,
//               fontSize: "28px",
//               fontWeight: "600",
//               borderBottom: "2px solid #16a085",
//               pb: 1,
//             }}
//           >
//             Soft Skills
//           </Typography>
//           <Box
//             sx={{
//               display: "flex",
//               flexWrap: "wrap",
//               gap: 3,
//             }}
//           >
//             {[
//               "Problem-Solving",
//               "Team Collaboration",
//               "Time Management",
//               "Adaptability",
//               "Communication",
//               "Attention to Detail",
//               "Multitasking",
//             ].map((skill, index) => (
//               <Box
//                 key={index}
//                 sx={{
//                   flex: "1 1 calc(33.333% - 16px)",
//                   backgroundColor: "#f0f0f0",
//                   borderRadius: 2,
//                   p: 3,
//                   textAlign: "center",
//                   transition: "transform 0.2s, box-shadow 0.2s",
//                   "&:hover": {
//                     transform: "translateY(-4px)",
//                     boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.1)",
//                   },
//                 }}
//               >
//                 <Typography
//                   variant="body1"
//                   sx={{ fontSize: "18px", fontWeight: "500", color: "#333" }}
//                 >
//                   {skill}
//                 </Typography>
//               </Box>
//             ))}
//           </Box>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default Skills;









// import { Box, Typography, Grid, Button, Card, CardContent } from "@mui/material";
// import {
//   SiJavascript,
//   SiPython,
//   SiC,
//   SiCplusplus,
//   SiHtml5,
//   SiCss3,
//   SiReact,
//   SiExpress,
//   SiNodedotjs,
//   SiMysql,
//   SiMongodb,
//   SiGit,
//   // SiVisualstudiocode,
//   SiFigma,
//   // SiMicrosoftword,
//   // SiMicrosoftpowerpoint,
// } from "react-icons/si";
// import { DiJava } from "react-icons/di"; // Java icon is in the 'di' collection

// const Skills = () => {
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
//       <Typography variant="h6" sx={{ color: "#f39c12", mb: 1 }}>
//         SKILLS
//       </Typography>
//       <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
//         What I Can Do
//       </Typography>
//       <Typography variant="body1" sx={{ maxWidth: "600px", mx: "auto", mb: 4 }}>
//         If you want any of the following services, please go to the contact section where you can find some of the platforms where I am available.
//       </Typography>

//       <Grid container spacing={3} justifyContent="center">
//         {[
//           { icon: <SiJavascript fontSize="2rem" />, label: "JavaScript" },
//           { icon: <SiPython fontSize="2rem" />, label: "Python" },
//           { icon: <DiJava fontSize="2rem" />, label: "Java" },
//           { icon: <SiC fontSize="2rem" />, label: "C" },
//           { icon: <SiCplusplus fontSize="2rem" />, label: "C++" },
//           { icon: <SiHtml5 fontSize="2rem" />, label: "HTML" },
//           { icon: <SiCss3 fontSize="2rem" />, label: "CSS" },
//           { icon: <SiReact fontSize="2rem" />, label: "React" },
//           { icon: <SiExpress fontSize="2rem" />, label: "Express" },
//           { icon: <SiNodedotjs fontSize="2rem" />, label: "Node.js" },
//           { icon: <SiMysql fontSize="2rem" />, label: "MySQL" },
//           { icon: <SiMongodb fontSize="2rem" />, label: "MongoDB" },
//           { icon: <SiGit fontSize="2rem" />, label: "Git" },
//           // { icon: <SiVisualstudiocode fontSize="2rem" />, label: "VSCode" },
//           { icon: <SiFigma fontSize="2rem" />, label: "Figma" },
//           // { icon: <SiMicrosoftword fontSize="2rem" />, label: "Word" },
//           // { icon: <SiMicrosoftpowerpoint fontSize="2rem" />, label: "PPT" },
//         ].map((skill, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <Card
//               sx={{
//                 backgroundColor: "#1e1e1e",
//                 textAlign: "center",
//                 py: 3,
//                 "&:hover": { boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.2)" },
//               }}
//             >
//               <CardContent>
//                 <Box sx={{ mb: 2 }}>{skill.icon}</Box>
//                 <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//                   {skill.label}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       <Button
//         variant="contained"
//         sx={{
//           mt: 4,
//           backgroundColor: "#f39c12",
//           color: "#000",
//           padding: "0.8rem 2rem",
//           fontSize: "1rem",
//           fontWeight: "bold",
//           "&:hover": { backgroundColor: "#d68709" },
//         }}
//       >
//         Talk to me
//       </Button>
//     </Box>
//   );
// };

// export default Skills;




































import { Box, Typography, Grid, Button, Card, CardContent } from "@mui/material";
import {
  SiJavascript,
  SiPython,
  SiC,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiGit,
  SiFigma,
} from "react-icons/si";
import { DiJava } from "react-icons/di"; // Java icon is in the 'di' collection
import { BiLogoVisualStudio } from "react-icons/bi"; // VSCode icon
import { PiMicrosoftWordLogo, PiMicrosoftExcelLogo, PiMicrosoftPowerpointLogo } from "react-icons/pi"; // Microsoft icons


const Skills = () => {
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
      <Typography variant="h6" sx={{ color: "#f39c12", mb: 1 }}>
        SKILLS
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        What I Can Do
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: "600px", mx: "auto", mb: 4 }}>
        If you want any of the following services, please go to the contact section where you can find some of the platforms where I am available.
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {/* Frontend Languages Block */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: "#1e1e1e",
              textAlign: "center",
              py: 3,
              "&:hover": { boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.2)" },
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Frontend Technologies
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem", mb: 2 }}>
                <SiReact fontSize="2rem" />
                <SiHtml5 fontSize="2rem" />
                <SiCss3 fontSize="2rem" />
                <SiJavascript fontSize="2rem" />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Backend Technologies Block */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: "#1e1e1e",
              textAlign: "center",
              py: 3,
              "&:hover": { boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.2)" },
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Backend Technologies
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem", mb: 2 }}>
                <SiNodedotjs fontSize="2rem" />
                <SiExpress fontSize="2rem" />
                <SiMongodb fontSize="2rem" />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Databases Block */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: "#1e1e1e",
              textAlign: "center",
              py: 3,
              "&:hover": { boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.2)" },
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Data Bases
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem", mb: 2 }}>
                <SiMongodb fontSize="2rem" />
                <SiMysql fontSize="2rem" />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Programming Languages Block */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: "#1e1e1e",
              textAlign: "center",
              py: 3,
              "&:hover": { boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.2)" },
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Programming Languages
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem", mb: 2 }}>
                <SiJavascript fontSize="2rem" />
                <SiPython fontSize="2rem" />
                <DiJava fontSize="2rem" />
                <SiC fontSize="2rem" />
                <SiCplusplus fontSize="2rem" />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Tools */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: "#1e1e1e",
              textAlign: "center",
              py: 3,
              "&:hover": { boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.2)" },
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Tools
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem", mb: 2 }}>
                <SiGit fontSize="2rem" />
                <BiLogoVisualStudio fontSize="2rem" />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* UI/UX Design */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: "#1e1e1e",
              textAlign: "center",
              py: 3,
              "&:hover": { boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.2)" },
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                UI/UX Design
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem", mb: 2 }}>
                <SiFigma fontSize="2rem" />
              </Box>
            </CardContent>
          </Card>
        </Grid>




  {/* Microsoft Tools */}
  <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: "#1e1e1e",
              textAlign: "center",
              py: 3,
              "&:hover": { boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.2)" },
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Microsoft Tools
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem", mb: 2 }}>
                <PiMicrosoftWordLogo fontSize="2rem" />
                <PiMicrosoftExcelLogo fontSize="2rem" />
                <PiMicrosoftPowerpointLogo fontSize="2rem" />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      

















      </Grid>
      

      <Button
        variant="contained"
        sx={{
          mt: 4,
          backgroundColor: "#f39c12",
          color: "#000",
          padding: "0.8rem 2rem",
          fontSize: "1rem",
          fontWeight: "bold",
          "&:hover": { backgroundColor: "#d68709" },
        }}
      >
        Talk to me
      </Button>
    </Box>
  );
};

export default Skills;

