import { Link, Outlet } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import "./App.css";
import { Typography } from "@mui/material";

let theme = createTheme({
  typography: {
    fontFamily: ["Bellefair", "serif"].join(","),
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <h1>Links</h1>
        <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
          <Link to="/footer">footer</Link>
          <Link to="/navbar">navbar</Link>
        </nav>
      </ThemeProvider>
      <Outlet />
    </>
  );
}

export default App;
