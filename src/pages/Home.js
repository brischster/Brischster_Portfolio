import * as React from "react";

import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import selfie from "../Assets/Images/selfie.jpg";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { NavLink } from "react-router-dom";

import blackjack from "../Assets/Images/blackjack.png";
import meltedcone from "../Assets/Images/meltedcone.png";
import bitcoin from "../Assets/Images/bitcoinquiz.jpeg";
import crypt from "../Assets/Images/crypt.png";
import Carousel from "better-react-carousel";
import family from "../Assets/Images/family.jpg";

const styles = {
  header: {
    width: "100%",
    backgroundColor: "var(--bitgrey)",
    paddingLeft: "30px",
    paddingRight: "10px",

    borderBottom: "2px solid var(--bitorange)",
  },

  navbarLinks: {
    listStyle: "none",
    display: "flex",
  },
  photos: {
    hideArrow: true,
    autoplay: "1000",
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
  media: {
    height: 100,
    width: 100,
    margin: "auto",
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
                  image={family}
                  alt="image of Ryan's family"
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
                <span style={styles.photos}>
                  <Carousel hideArrow={true} autoplay={2000} loop>
                    <Carousel.Item>
                      <img
                        component="img"
                        style={styles.media}
                        src={blackjack}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        component="img"
                        style={styles.media}
                        src={meltedcone}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img component="img" style={styles.media} src={bitcoin} />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img component="img" style={styles.media} src={crypt} />
                    </Carousel.Item>
                  </Carousel>
                </span>
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
