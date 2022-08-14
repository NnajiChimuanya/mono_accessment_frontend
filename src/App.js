import logo from "./logo.svg";
import "./App.css";
import { IconButton, Avatar, Icon } from "@mui/material";
import MoodIcon from "@mui/icons-material/Mood";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
