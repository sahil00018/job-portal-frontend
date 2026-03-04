import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route: redirect to login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Login page */}
        <Route path="/login" element={<Login />} />

        {/* Dashboard page */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Catch all: redirect unknown routes to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
