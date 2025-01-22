// import React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import Container from "@mui/material/Container";
// import MenuIcon from "@mui/icons-material/Menu";

// function ResponsiveAppBar() {
//   const pages = ["Home", "Our Course", "Fees Plan", "Registration", "About"];
//   const [anchorElNav, setAnchorElNav] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   return (
//     <AppBar
//       position="static"
//       sx={{
//         backgroundColor: "#ffffff",
//         boxShadow: "none",
//         borderBottom: "1px solid #ddd",
//       }}
//     >
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           {/* Logo Section */}
//           <Box sx={{ display: "flex", alignItems: "center", mr: { xs: 0, md: 5 } }}>
//             <img
//               src="/Images/toplogo.svg" // Replace with your logo URL
//               alt="Logo"
//               style={{ height: "50px", marginRight: "10px" }}
//             />
//           </Box>

//           {/* Mobile Menu Icon */}
//           <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1 }}>
//             <IconButton
//               size="large"
//               aria-label="menu"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{ display: { xs: "block", md: "none" } }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography
//                     textAlign="center"
//                     sx={{
//                       fontFamily: "Inte-semibold",
//                       fontSize: "16px",
//                       fontWeight: "600",
//                       textTransform: "capitalize",
//                       color: "linear-gradient(to right, #004d40, #00251a)",
//                     }}
//                   >
//                     {page}
//                   </Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//           {/* Navbar Links for Larger Screens */}
//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: "35px" }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 sx={{
//                   fontFamily: "Inte-semibold",
//                   fontSize: "18px",
//                   fontWeight: "600",
//                   textTransform: "capitalize",
//                   color: "transparent",
//                   background: "linear-gradient(to right, #004d40, #00251a)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   "&:hover": {
//                     background: "linear-gradient(to right, #2BA59B, #103F3B)",
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                   },
//                 }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           {/* Contact Us Button */}
//           <Box sx={{ display: "flex", flexGrow: { xs: 0, md: 0 } }}>
//             <Button
//               variant="contained"
//               sx={{
//                 background: "linear-gradient(to right, #00796b, #004d40)",
//                 color: "#fff",
//                 padding: "8px 20px",
//                 borderRadius: "20px",
//                 textTransform: "none",
//                 fontWeight: "bold",
//                 fontSize: "1rem",
//                 "&:hover": {
//                   background: "linear-gradient(to right, #004d40, #00251a)",
//                 },
//               }}
//             >
//               Contact Us
//             </Button>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default ResponsiveAppBar;




import React from "react";
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
{name:"Home",path:"/"},
{name:"Our Course",path:"/"},
{name:"Fees Plan",path:"/Fees_plan"},
{name:"Registration",path:"/Registration"},
{name:"About",path:"/About-us"},
];



function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const navigate = useNavigate();
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

          {/* Menu Button for Mobile */}
          <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1 }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    sx={{
                      fontFamily: "Inte-semibold",
                      fontSize: "16px",
                      fontWeight: "600",
                      textTransform: "capitalize",
                      color: "linear-gradient(to right, #004d40, #00251a)",
                    }}
                    onClick={()=>{navigate(page.path)}}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Navbar Links for Desktop */}
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
                key={page}
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
                {page}
              </Button>
            ))}
          </Box>

          {/* Contact Us Button */}
          <Box>
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

