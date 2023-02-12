import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/App.css";
import Color from "./components/Color";
import Nav from "./components/Nav";
import Mode from "./components/Mode";
import Setting from "./components/Setting";
import Home from "./components/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/color" element={<Color />} />
        <Route path="/mode" element={<Mode />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
