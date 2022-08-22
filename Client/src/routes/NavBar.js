import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import selfie from "../Assets/Images/selfie.jpg";
import { NavLink } from "react-router-dom";

const settings = [
  <NavLink to="/about">About Me</NavLink>,
  <NavLink to="/projectList">Recent Projects</NavLink>,
  <NavLink to="/resume">Download My Resume</NavLink>,
];
// const aboutMe = <NavLink to="/about">Learn A Little About Me</NavLink>;

const styles = {
  header: {
    backgroundColor: "var(--bitgrey)",
    display: "flex",
    borderBottom: "2px solid var(--bitorange)",
    display: "flex",
  },
  navbarLinks: {
    listStyle: "none",
    display: "flex",
  },
  title: {
    color: "var(--bitorange)",
    fontFamily: "Bellefair",
    fontWeight: "bold",
  },
};

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static" style={styles.header}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <NavLink
              to="/"
              style={{
                textDecoration: "none",
                color: "var(--bitorange)",
                fontWeight: "bold",
              }}
            >
              <h1>
                Ryan{" "}
                <span id="bit-logo">
                  <span>₿</span>
                </span>
                risch
              </h1>
            </NavLink>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: -45,
                display: { xs: "none", md: "flex" },
                fontFamily: "Bellefair",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            ></Typography>
            <h1 style={styles.title}>Heal the World with Orange Pills</h1>
            <Box>
              <Tooltip title="Click for Options" anchor="top-end">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Ryan Brisch" src={selfie} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default NavBar;
