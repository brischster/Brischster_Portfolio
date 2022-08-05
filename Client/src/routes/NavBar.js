import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import selfie from "../Assets/Images/selfie.jpg";

const settings = ["About Me", "Work", "Resume", "Contact Me"];

const styles = {
  header: {
    width: "100%",
    backgroundColor: "var(--bitgrey)",
    paddingLeft: "30px",
    paddingRight: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "2px solid var(--bitorange)",
    display: "flex",
  },

  navbarLinks: {
    listStyle: "none",
    display: "flex",
  },

  navItem: {
    display: "inline-block",
    padding: "10px 15px",
    textDecoration: "none",
    color: "rgb(255, 255, 255)",
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
        <Container maxWidth="xl" sx={{ mb: 2 }}>
          <Toolbar disableGutters>
            <h1>
              Ryan{" "}
              <span id="bit-logo">
                <span>₿</span>
              </span>
              risch
            </h1>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Bellefair",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            ></Typography>

            <Box sx={{ flexGrow: 1 }}>
              {/* <Grid container justifyContent="flex-end">
                <Grid item> */}
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
