import React from "react";
import "./dashboard.css";
import Sidebar from "../../components/sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-main">
        <h3>oTHERRS</h3>
      </div>
    </div>
  );
};

export default Dashboard;
