import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Schemes from "./pages/Scheme";
import CropDoctor from "./pages/CropDoctor";
import Mandi from "./pages/Mandi";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schemes" element={<Schemes />} />
        <Route path="/crop-doctor" element={<CropDoctor />} />
        <Route path="/mandi" element={<Mandi />} />
      </Routes>
    </Router>
  );
}

export default App;