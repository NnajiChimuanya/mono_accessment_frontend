import React from "react";
import "./dashboard.css";
import Sidebar from "./sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main"></div>
    </div>
  );
};

export default Dashboard;
