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
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import selfie from "../Assets/Images/selfie.jpg";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

// const pages = ["About Me", "Work", "Resume", "Contact Me"];
const settings = ["About Me", "Work", "Resume", "Contact Me"];

// function MediaCard(props) {
//     const { classes } = props;
//     <Grid
//     container
//     spacing={1}
//     direction="column"
//     alignItems="center"

// };

const styles = {
  header: {
    width: "100%",
    backgroundColor: "var(--bitgrey)",
    paddingLeft: "30px",
    paddingRight: "10px",
    // display: "flex",
    // justifyContent: "space-between",
    //   alignItems: "center",
    borderBottom: "2px solid var(--bitorange)",
  },
  //   card: {
  //     maxWidth: "300",
  //     direction: "column",
  //     alignItems: "center",
  //   },

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
  contactinfo: {
    backgroundColor: "var(--bitgrey)",
    paddingLeft: "30px",
    paddingRight: "10px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    typography: "body1",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
  },
  links: {
    listStyle: "none",
    display: "inline-block",
    padding: "10px 15px",
    color: "var(--bitorange)",
  },
};

const Home = () => {
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
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            ></Typography>
            {/* 
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
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
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            ></Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box> */}

            <Box>
              {/* <Grid container justifyContent="flex-end">
                <Grid item> */}
              <Tooltip title="Click for Options" anchor="top-end">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Ryan Brisch" src={selfie} />
                </IconButton>
              </Tooltip>
              {/* </Grid>
              </Grid> */}
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
      <body>
        <div>
          <Grid container spacing={1} paddingLeft={40} paddingRight={40}>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={selfie}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={selfie}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ pb: 1 }}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={selfie}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ pb: 1 }}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={selfie}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </div>
      </body>

      <footer>
        <toolbar paddingTop={1}>
          <Box style={styles.contactinfo} sx={{ mt: 2 }}>
            <Link
              style={styles.links}
              href="https://github.com/brischster"
              target="_blank"
            >
              <GitHubIcon />
            </Link>
            <Link
              style={styles.links}
              key="Email"
              component="a"
              href="mailto:brischster@gmail.com"
            >
              <EmailIcon />
            </Link>
            <Link
              style={styles.links}
              href="https://www.linkedin.com/in/ryan-brisch-2492259/"
              target="_blank"
            >
              <LinkedInIcon />
            </Link>
            <Link style={styles.links} href="tel:773-793-4582">
              <LocalPhoneIcon />
            </Link>
          </Box>
        </toolbar>
      </footer>
    </>
  );
};
export default Home;
