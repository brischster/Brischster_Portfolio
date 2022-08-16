import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export default function About() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        <Paper />
        <Paper elevation={3} />
      </Box>
      <p>DownLoad Me</p>
    </>
  );
}
