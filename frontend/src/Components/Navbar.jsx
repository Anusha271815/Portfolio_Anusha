import React, { use, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from "react-router-dom";

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Certificates", path: "/certificates" },
  { name: "Contact", path: "/contact" }
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    const navbar = document.getElementById("navbar");
  
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setNavBg("#fff");
      } else {
        setNavBg("transparent");
      }
    };
    
  
    window.addEventListener("scroll", handleScroll);
  
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <AppBar
    id="navbar"
    position="fixed"
    color="transparent"
    elevation={0}
    sx={{ transition: "0.3s ease", backgroundColor: "rgba(255, 255, 255, 0.25)" ,
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
    }}
  >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none'
            }}
          >
            Portfolio
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>

                  {/* Mobile navigation links */}
                  <Typography
                    component={Link}
                    to={page.path}
                    sx={{
                      textAlign: 'center',
                      color: "black",
                      textDecoration: "none"
                    }}
                  >
                    {page.name}
                  </Typography>

                </MenuItem>
              ))}
            </Menu>

          </Box>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            Portfolio
          </Typography>

          {/* Desktop Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {pages.map((page) => (
                <Button
                key={page.name}
                component={Link}
                to={page.path}
                sx={{
                  my: 2,
                  color: "black",
                  fontSize: "0.95rem",
                  textTransform: "capitalize",
                  fontWeight: 500,
                  letterSpacing: "0.5px",
                  paddingX: 1.5,
                  position: "relative",     // like 'relative group'
                  overflow: "hidden",
                  transition: "color 0.3s ease",
              
                  "&:hover": {
                    color: "#0d9488",        // your 'accent' color
                  },
              
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "0%",
                    height: "3px",
                    backgroundColor: "#0d9488",
                    transition: "width 0.3s ease",
                  },
              
                  "&:hover::after": {
                    width: "100%",           // underline expands on hover
                  }
                }}
              >
                {page.name}
              </Button>
              
            ))}
            </Box>



          {/* User Avatar */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Anusha Kesarwani">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="User" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>

          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;

