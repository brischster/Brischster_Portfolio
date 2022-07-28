import { Link, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import "./App.css";
import { Typography } from "@mui/material";
import NavBar from "./routes/NavBar";
import Footer from "./routes/Footer";

let theme = createTheme({
  typography: {
    fontFamily: ["Bellefair", "serif"].join(","),
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <>
      <NavBar />
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
      <Footer />
      <Outlet />
    </>
  );
}

export default App;
