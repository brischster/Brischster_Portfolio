import { Link, Outlet } from "react-router-dom";
import Home from "./pages/Home";
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
        <Home />
      </ThemeProvider>
      <Outlet />
    </>
  );
}

export default App;
