import React from "react";
import "./dashboard.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { Avatar, IconButton, Button } from "@mui/material";
import ExpenseTracker from "../../components/Expense Tracker/ExpenseTracker";
import MainBalance from "../../components/Main Balance/MainBalance";
import sidebarContent from "../../components/sidebar/sidebarData";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar sidebarContent={sidebarContent} />
      <div className="dashboard-main">
        <ExpenseTracker />
        <MainBalance />
      </div>
    </div>
  );
};

export default Dashboard;
