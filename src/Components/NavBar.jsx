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
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#f39c12", borderBottom: "2px solid #f39c12" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left-aligned title */}
        <Typography variant="h6" sx={{ fontSize: "24px" }}>
          Muhammad Abrar
        </Typography>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              component={Link}
              to="/"
              color="inherit"
              sx={{ fontSize: "18px" }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/introduction"
              color="inherit"
              sx={{ fontSize: "18px" }}
            >
              About Me
            </Button>
            <Button
              component={Link}
              to="/skills"
              color="inherit"
              sx={{ fontSize: "18px" }}
            >
              Skills
            </Button>
            <Button
              component={Link}
              to="/myprojects"
              color="inherit"
              sx={{ fontSize: "18px" }}
            >
              Projects
            </Button>
            <Button
              component={Link}
              to="/contact"
              color="inherit"
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
              <MenuItem component={Link} to="/" onClick={handleMenuClose}>
                Home
              </MenuItem>
              <MenuItem
                component={Link}
                to="/introduction"
                onClick={handleMenuClose}
              >
                About Me
              </MenuItem>
              <MenuItem component={Link} to="/skills" onClick={handleMenuClose}>
                Skills
              </MenuItem>
              <MenuItem
                component={Link}
                to="/myprojects"
                onClick={handleMenuClose}
              >
                Projects
              </MenuItem>
              <MenuItem
                component={Link}
                to="/contact"
                onClick={handleMenuClose}
              >
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
