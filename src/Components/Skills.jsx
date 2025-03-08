import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
} from "@mui/material";
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
import {
  PiMicrosoftWordLogo,
  PiMicrosoftExcelLogo,
  PiMicrosoftPowerpointLogo,
} from "react-icons/pi"; // Microsoft icons
import { useNavigate } from "react-router-dom";
const Skills = () => {
  const navigate = useNavigate();
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
        If you want any of the following services, please go to the contact
        section where you can find some of the platforms where I am available.
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
              <Typography variant="h6" sx={{ 
                fontWeight: "bold",
                 mb: 2 }}>
                Frontend Technologies
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1rem",
                  mb: 2,
                }}
              >
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1rem",
                  mb: 2,
                }}
              >
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1rem",
                  mb: 2,
                }}
              >
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1rem",
                  mb: 2,
                }}
              >
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1rem",
                  mb: 2,
                }}
              >
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1rem",
                  mb: 2,
                }}
              >
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1rem",
                  mb: 2,
                }}
              >
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
        onClick={() => navigate("/contact")}
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
