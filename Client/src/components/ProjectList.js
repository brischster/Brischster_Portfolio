import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import blackjack from "../Assets/Images/blackjack.png";
import Grid from "@mui/material/Grid";
import melted from "../Assets/Images/meltedcone.png";
import crypt from "../Assets/Images/crypt.png";
import bitcoin from "../Assets/Images/bitcoinquiz.jpeg";
import { maxHeight } from "@mui/system";
import Link from "@mui/material/Link";

const styles = {
  card: {
    // minWidth: "18rem",
    // minHeight: "20rem",
    width: "320px",
    height: "415px",
    margin: "3px",
  },
  button: {
    backgroundColor: "#f2a900",
    size: "small",
    variant: "contained",
  },
  cardMedia: {
    height: "auto",
    maxHeight: "250px",
    width: "auto",
    maxWidth: "250px",
  },
};

const ProjectList = () => {
  return (
    <>
      <Grid container spacing={2} paddingLeft={37} paddingRight={37}>
        <Grid item xs={12} sm={6}>
          <Card style={styles.card}>
            <CardMedia
              style={styles.cardMedia}
              component="img"
              alt="back of card"
              image={blackjack}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bootcamp Blackjack
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learning to use 3rd Party API's. My focus was on API calls on
                the card API, placing the bets and user logic.
              </Typography>
            </CardContent>
            <CardActions>
              <Link href="espn.com" underline="hover">
                <Button
                  style={styles.button}
                  target="_blank"
                  rel="noreferrer"
                  href="https://the-melted-cone.herokuapp.com/"
                >
                  {"Play a Hand of Cards"}
                </Button>
              </Link>
              <Button
                style={styles.button}
                target="_blank"
                rel="noreferrer"
                href="https://the-melted-cone.herokuapp.com/"
              >
                GitHub Repo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card style={styles.card}>
            <CardMedia
              component="img"
              alt="melted cone"
              style={styles.cardMedia}
              image={melted}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                The Melted Cone
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Final project we built a e-commerce site for ice delivery
                company. I focused on GraphQL and Stripe payment integration.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                style={styles.button}
                target="_blank"
                rel="noreferrer"
                href="https://the-melted-cone.herokuapp.com/"
              >
                Shop for Ice Cream
              </Button>
              <Button
                style={styles.button}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/brischster/theMeltedCone"
              >
                GitHub Repo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card style={styles.card}>
            <CardMedia
              component="img"
              alt="screen shot"
              style={styles.cardMedia}
              image={crypt}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                The Learning Crypt
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                style={styles.button}
                target="_blank"
                rel="noreferrer"
                href="https://the-melted-cone.herokuapp.com/"
              >
                Learn About Cryptocurrency
              </Button>
              <Button
                style={styles.button}
                target="_blank"
                rel="noreferrer"
                href="https://the-melted-cone.herokuapp.com/"
              >
                GitHub Repo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card style={styles.card}>
            <CardMedia
              component="img"
              alt="bitcoin"
              style={styles.cardMedia}
              image={bitcoin}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bitcoin Psycho Quiz
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Fun quiz game to work on jQuery, local storage, event listeners
                and JavaScript logic
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                style={styles.button}
                target="_blank"
                rel="noreferrer"
                href="https://the-melted-cone.herokuapp.com/"
              >
                Take the Bitcoin Quiz
              </Button>
              <Button
                style={styles.button}
                target="_blank"
                rel="noreferrer"
                href="https://the-melted-cone.herokuapp.com/"
              >
                GitHub Repo
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ProjectList;
