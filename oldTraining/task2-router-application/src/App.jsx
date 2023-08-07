import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import HeaderNav from "./components/Header/HeaderNav";

import HeroRender from "./components/HeroImage/HeroRender";
import AbstractRender from "./routes/AbstractImage/AbstractRender";
import GalaxyRender from "./routes/GalaxyImages/GalaxyRender";

//Hello

function App() {
  return (
    <>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<HeroRender />} />
        <Route path="/abstract" element={<AbstractRender />} />
        <Route path="/galaxy" element={<GalaxyRender />} />
      </Routes>
    </>
  );
}

export default App;
