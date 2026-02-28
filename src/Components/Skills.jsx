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
  SiDocker,
  SiFigma,
  SiSupabase,
  SiNextdotjs,
  SiNestjs,
  SiPostgresql,
  SiDotnet,
  SiJira ,
} from "react-icons/si";
import { FaAngular } from "react-icons/fa6";
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
      <Typography
        variant="body1"
        sx={{ maxWidth: "600px", mx: "auto", mb: 4 }}
      >
        If you want any of the following services, please go to the contact
        section where you can find some of the platforms where I am available.
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {/* Frontend Languages Block */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: "#1e1e1e",
              boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.1)",
              color: "#f39c12",
              textAlign: "center",
              py: 3,
              "&:hover": {
                boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.2)",
              },
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Frontend Technologies
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1rem",
                  mb: 2,
                  color: "#ffffff",
                }}
              >
                <SiReact fontSize="2rem" title="React" />
<SiHtml5 fontSize="2rem" title="HTML5" />
<SiCss3 fontSize="2rem" title="CSS3" />
<SiJavascript fontSize="2rem" title="JavaScript" />
<SiNextdotjs fontSize="2rem" title="Next.js" />
<FaAngular fontSize="2rem" title="Angular" />
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
              boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.1)",
              color: "#f39c12",
              py: 3,
              "&:hover": {
                boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.2)",
              },
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
                  color: "#ffffff",
                }}
              >
                <SiNodedotjs fontSize="2rem" title="Node.js" />
                <SiExpress fontSize="2rem" title="Express" />
                <SiMongodb fontSize="2rem" title="MongoDB" />
                <SiSupabase fontSize="2rem" title="Supabase" />
                <SiNestjs fontSize="2rem" title="NestJS" />
                <SiDotnet fontSize="2rem" title=".NET" />
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
              boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.1)",
              color: "#f39c12",
              py: 3,
              "&:hover": {
                boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.2)",
              },
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
                  color: "#ffffff",
                }}
              >
                <SiMongodb fontSize="2rem"  title="MongoDB"/>
                <SiMysql fontSize="2rem"  title="MySQL"/>
                <SiSupabase fontSize="2rem"  title="Supabase"/>
                <SiPostgresql fontSize="2rem"  title="PostgreSQL"/>
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
              boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.1)",
              color: "#f39c12",
              py: 3,
              "&:hover": {
                boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.2)",
              },
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
                  color: "#ffffff",
                }}
              >
                <SiJavascript fontSize="2rem" title="JavaScript" />
                <SiPython fontSize="2rem" title="Python" />
                <DiJava fontSize="2rem" title="Java" />
                <SiC fontSize="2rem" title="C" />
                <SiCplusplus fontSize="2rem" title="C++" />
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
              boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.1)",
              color: "#f39c12",
              py: 3,
              "&:hover": {
                boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.2)",
              },
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
                  color: "#ffffff",
                }}
              >
                <SiGit fontSize="2rem"  title="Git"/>
                <SiDocker fontSize="2rem"  title="Docker"/>

                <BiLogoVisualStudio fontSize="2rem" title="Visual Studio" />
                <SiJira fontSize="2rem" title="Jira" />
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
              boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.1)",
              color: "#f39c12",
              py: 3,
              "&:hover": {
                boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.2)",
              },
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
                  color: "#ffffff",
                }}
              >
                <SiFigma fontSize="2rem" title="Figma" />
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
              boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.1)",
              color: "#f39c12",
              py: 3,
              "&:hover": {
                boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.2)",
              },
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
                  color: "#ffffff",
                }}
              >
                <PiMicrosoftWordLogo fontSize="2rem"  title="Microsoft Word"/>
                <PiMicrosoftExcelLogo fontSize="2rem"  title="Microsoft Excel"/>
                <PiMicrosoftPowerpointLogo fontSize="2rem"  title="Microsoft PowerPoint"/>
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
