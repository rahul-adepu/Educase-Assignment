import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/LandingPage" />} />
      <Route path="/LandingPage" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<div>Signup Page</div>} />
    </Routes>
  );
};

export default App;
