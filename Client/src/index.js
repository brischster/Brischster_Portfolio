import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./routes/Footer";
import NavBar from "./routes/NavBar";
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
          <Route path="navbar" element={<NavBar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
