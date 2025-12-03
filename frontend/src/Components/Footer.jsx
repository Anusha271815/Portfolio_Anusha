import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter"; // optional
import InstagramIcon from "@mui/icons-material/Instagram"; // optional

function Footer() {
  return (
    <footer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 40px",
          boxShadow:"2px 2px 10px rgba(0,0,0,0.1)",
          borderTop: "1px solid #e5e7eb",
        //   marginTop: "40px"
        }}
      >
        {/* Left Side */}
        <Typography sx={{ fontSize: "0.9rem", color: "gray" }}>
          © {new Date().getFullYear()} Anusha's Portfolio
        </Typography>

        {/* Right Side Social Icons */}
        <Box>
          <IconButton
            component="a"
            href="https://github.com/your-username"
            target="_blank"
            sx={{ color: "black", "&:hover": { color: "#0d9488" } }}
          >
            <GitHubIcon />
          </IconButton>

          <IconButton
            component="a"
            href="https://linkedin.com/in/your-username"
            target="_blank"
            sx={{ color: "black", "&:hover": { color: "#0d9488" } }}
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            component="a"
            href="https://twitter.com/your-username"
            target="_blank"
            sx={{ color: "black", "&:hover": { color: "#0d9488" } }}
          >
            <TwitterIcon />
          </IconButton>

          <IconButton
            component="a"
            href="https://instagram.com/your-username"
            target="_blank"
            sx={{ color: "black", "&:hover": { color: "#0d9488" } }}
          >
            <InstagramIcon />
          </IconButton>
        </Box>
      </Box>
    </footer>
  );
}

export default Footer;
