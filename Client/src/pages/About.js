import selfie from "../Assets/Images/selfie.jpg";
import Avatar from "@mui/material/Avatar";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import family from "../Assets/Images/family.jpg";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

const lightTheme = createTheme({ palette: { mode: "light" } });

export default function About() {
  return (
    <>
      <Paper
        variant="outlined"
        sx={{
          width: "300",
          height: "550",
          padding: "3",
          margin: "3",
        }}
      >
        <img src={family} />
        <Typography>
          My name is Ryan Brisch. I am brand new to coding but I am very
          exciting about the opportunity to learn and then apply what I have
          leared to helping make the world a better place! I am currently
          enrolled at the University of Denver's Full Stack Coding Bootcamp
          Cohort APR-AUG 2022.
          <br />I live in Villa Park neighborhood of Denver, CO. I live with my
          wife, Nicole, and our two wonderful daughters, Joni and Hadley and our
          dog Bunches. I believe that that Bitcoin and its unintended scope of
          influence will be the greatest invention of my lifetime.
        </Typography>
      </Paper>
    </>
  );
}
