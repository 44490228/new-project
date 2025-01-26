import React, {useState,useEffect} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const pages = [
  { name: "Home", path: "/" },
  { name: "Our Course", path: "/Courses" },
  { name: "Fees Plan", path: "/Fees-plan" },
  { name: "Registration", path: "/Registration" },
  { name: "About", path: "/About-us" },
  {name:'contact us',path:"/Contact-us"}
];

function ResponsiveAppBar() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 780)
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 780);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#ffffff",
        boxShadow: "none",
        borderBottom: "1px solid #ddd",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", mr: { md: 5 } }}>
            <img
              src="/Images/toplogo.svg"
              alt="Logo"
              style={{ height: "50px", marginRight: "10px" }}
            />
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1 }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black" // Change burger button color to black
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => {
                    navigate(page.path);
                    handleCloseNavMenu();
                  }}
                >
                  <Typography
                    textAlign="center"
                    sx={{
                      fontFamily: "Inte-semibold",
                      fontSize: "16px",
                      fontWeight: "600",
                      textTransform: "capitalize",
                      color: "linear-gradient(to right, #004d40, #00251a)",
                    }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Links */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              gap: "35px",
              alignItems: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => navigate(page.path)}
                sx={{
                  fontFamily: "Inte-semibold",
                  fontSize: "18px",
                  fontWeight: "600",
                  textTransform: "capitalize",
                  color: "transparent",
                  background: "linear-gradient(to right, #004d40, #00251a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  "&:hover": {
                    background: "linear-gradient(to right, #2BA59B, #103F3B)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Contact Us Button for Desktop */}
          {!isSmallScreen && (<Box sx={{ display: { md: "none", lg: "block" } }}>
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(to right, #2BA59B, #103F3B)",
                color: "#fff",
                padding: "8px 20px",
                borderRadius: "20px",
                textTransform: "none",
                fontWeight: "bold",
                fontSize: "1rem",
                "&:hover": {
                  background: "linear-gradient(to right, #004d40, #00251a)",
                },
              }}
              onClick={() => {
                window.location.href = "https://wa.me/923194908790"; // Open WhatsApp
              }}
            >
              Contact Us
            </Button>
          </Box>)}

          {/* Contact Us Button for Mobile */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(to right, #2BA59B, #103F3B)",
                color: "#fff",
                padding: "8px 20px",
                borderRadius: "20px",
                textTransform: "none",
                fontWeight: "bold",
                fontSize: "1rem",
                position: "absolute", // To fix the position on top-right
                right: "10px", // Adjust to your desired distance from the right
                top: "10px", // Adjust to your desired distance from the top
                zIndex: 1000, // Ensure the button is on top
                "&:hover": {
                  background: "linear-gradient(to right, #004d40, #00251a)",
                },
              }}
              onClick={() => {
                window.location.href = "https://wa.me/923194908790"; // Open WhatsApp
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
