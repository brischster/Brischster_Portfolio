import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import "./index.css";
import "typeface-bellefair";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There is nothing here that you are looking for!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
