import React from "react";
import "./dashboard.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { Avatar, IconButton, Button } from "@mui/material";
import ExpenseTracker from "../../components/Expense Tracker/ExpenseTracker";
import MainBalance from "../../components/Main Balance/MainBalance";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-main">
        <ExpenseTracker />
        <MainBalance />
      </div>
    </div>
  );
};

export default Dashboard;
