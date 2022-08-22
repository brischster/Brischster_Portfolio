import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import "./App.css";
import NavBar from "./routes/NavBar";
import Footer from "./routes/Footer";
import About from "./pages/About";
import Resume from "./pages/Resume";
import ProjectList from "./components/ProjectList";

let theme = createTheme({
  typography: {
    fontFamily: ["Bellefair", "serif"].join(","),
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="projectList" element={<ProjectList />} />
            <Route path="/resume" element={<Resume />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There is nothing here that you are looking for!</p>
                </main>
              }
            />
          </Routes>
        </ThemeProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
