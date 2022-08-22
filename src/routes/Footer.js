import React from "react";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
// import { makeStyles } from "@mui/material";
import { alpha } from "@mui/material/styles";

const styles = {
  contactinfo: {
    backgroundColor: "var(--bitgrey)",
    paddingLeft: "30px",
    paddingRight: "10px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    typography: "body1",
    position: "relative",
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

export default function Footer() {
  //   const classes = useStyles();

  return (
    <>
      <footer>
        <Box style={styles.contactinfo}>
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
      </footer>
    </>
  );
}
