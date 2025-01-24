import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  Box,
  Button, // Import Button component
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = ({ onNavClick }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavItemClick = (component) => {
    handleMenuClose(); // Close the menu
    onNavClick(component); // Call parent component function to change active component
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#16a085", borderBottom: "2px solid #12876f" }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontSize: "24px" }}>
          Muhammad Abrar
        </Typography>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              color="inherit"
              onClick={() => handleNavItemClick("home")}
              sx={{ fontSize: "18px" }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              onClick={() => handleNavItemClick("introduction")}
              sx={{ fontSize: "18px" }}
            >
              About Me
            </Button>
            <Button
              color="inherit"
              onClick={() => handleNavItemClick("skills")}
              sx={{ fontSize: "18px" }}
            >
              Skills
            </Button>
            <Button
              color="inherit"
              onClick={() => handleNavItemClick("myprojects")}
              sx={{ fontSize: "18px" }}
            >
              Projects
            </Button>
            <Button
              color="inherit"
              onClick={() => handleNavItemClick("contact")}
              sx={{ fontSize: "18px" }}
            >
              Contact Me
            </Button>
          </Box>
        )}

        {/* Mobile Navigation */}
        {isMobile && (
          <>
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
              sx={{ fontSize: "24px" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{ mt: "45px" }}
            >
              <MenuItem onClick={() => handleNavItemClick("home")}>
                Home
              </MenuItem>
              <MenuItem onClick={() => handleNavItemClick("introduction")}>
                About Me
              </MenuItem>
              <MenuItem onClick={() => handleNavItemClick("skills")}>
                Skills
              </MenuItem>
              <MenuItem onClick={() => handleNavItemClick("myprojects")}>
                Projects
              </MenuItem>
              <MenuItem onClick={() => handleNavItemClick("contact")}>
                Contact Me
              </MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;