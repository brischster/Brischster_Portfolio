import * as React from "react";

import Typography from "@mui/material/Typography";
// import {
//   ThemeProvider,
//   createTheme,
//   responsiveFontSizes,
// } from "@mui/material/styles";
import Card from "@mui/material/Card";
import selfie from "../Assets/Images/selfie.jpg";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
// import About from
// import Projects from "./pages/Projects";
// import Resume from "./pages/Resume";

// let theme = createTheme({
//   typography: {
//     fontFamily: ["Bellefair", "serif"].join(","),
//   },
// });

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
  return (
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
                    <NavLink to="/about">Learn A Little About Me</NavLink>
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
                    <NavLink to="/resume">Download My Resume</NavLink>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sx={{ pb: 1 }}>
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
                    <NavLink to="/projectList">Recent Projects</NavLink>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
    </body>
  );
};
export default Home;
