import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./index.css";
import "typeface-bellefair";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="footer" element={<Footer />} />
          <Route path="navabar" element={<NavBar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
