import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/LandingPage" />} />
      <Route path="/LandingPage" element={<Home />} />
      <Route path="/login" element={<div>Login Page</div>} />
      <Route path="/signup" element={<div>Signup Page</div>} />
    </Routes>
  );
};

export default App;
