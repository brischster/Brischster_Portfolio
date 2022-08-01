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

const preventDefault = (event) => event.preventDefault();

const ProjectList = () => {
  return (
    <>
      <Grid container spacing={1} paddingLeft={40} paddingRight={40}>
        <Grid item xs={12} sm={6}>
          <Card sx={{ maxWidth: 425, maxHeight: 425, margin: "3px" }}>
            <CardMedia
              height="140"
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
            <CardActions onClick={preventDefault}>
              <Link href="espn.com" underline="hover">
                <Button size="small">{"Play a Hand"}</Button>
              </Link>
              <Button size="small">GitHub Repo</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card sx={{ maxWidth: 425, maxHeight: 425, margin: "3px" }}>
            <CardMedia
              component="img"
              alt="melted cone"
              height="140"
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
                size="small"
                variant="contained"
                target="_blank"
                rel="noreferrer"
                href="https://the-melted-cone.herokuapp.com/"
              >
                Shop for Ice Cream
              </Button>
              <Button
                size="small"
                variant="contained"
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
          <Card sx={{ maxWidth: 425, maxHeight: 425, margin: "3px" }}>
            <CardMedia
              component="img"
              alt="screen shot"
              height="140"
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
              <Button size="small">Learn About Cryptocurrency</Button>
              <Button size="small">GitHub Repo</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card sx={{ maxWidth: 425, maxHeight: 425, margin: "3px" }}>
            <CardMedia
              component="img"
              alt="bitcoin"
              height="140"
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
              <Button size="small">Take the Bitcoin Quiz</Button>
              <Button size="small">GitHub Repo</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ProjectList;
