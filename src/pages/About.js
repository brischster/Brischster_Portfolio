import * as React from "react";
import Paper from "@mui/material/Paper";

import { Typography } from "@mui/material";

import family from "../Assets/Images/family.jpg";

const styles = {
  imgSizing: {
    width: "100%",
    height: "100%",
    padding: "3",
    margin: "auto",
  },
  personal: {
    fontSize: "18px",
  },
};

export default function About() {
  return (
    <>
      <Paper
        variant="outlined"
        sx={{
          width: "100%",
          height: "100%",
          padding: "3",
          margin: "auto",
        }}
      >
        <img style={styles.imgSizing} src={family} />
        <Typography style={styles.personal}>
          My name is Ryan Brisch. I am a recent graduate of Denver University's
          Full Stack Coding bootcamp. I am excited to continue this educational
          journey and keeping learning as much as I possibly can. I believe my
          previous sales experience in real estate and passion and knowledge for
          regenerative agriculture which was developed during my time at
          Patagonia will allow me to provide unique perspectives and solutions
          to my future work. I am a lifelong learner, take pleasure is solving
          problems and passionate about using software to help elevate the
          quality of people's lives.
          <br />
          <br />
          I live in Villa Park neighborhood of Denver, CO, with my wife, Nicole,
          our two wonderful daughters, Joni and Hadley and our dog Bunches. I
          love the outdoors: camping, hiking, skiing and moutian biking. Even
          though I am original from Wisconsin, which is wonderful, am huge
          Chicago sports fan, especially the Bears. I believe that that Bitcoin
          and its unintended scope of influence will be the greatest invention
          of my lifetime.
          <br />
          <br />
          Thank you reading more about me and I would love to share more or
          answer any questions you may have for me. Please feel free to reachout
          and contact me using any of the icons in the below footer.
        </Typography>
      </Paper>
    </>
  );
}
