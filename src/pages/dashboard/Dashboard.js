import React, { useState, useContext, useEffect } from "react";
import "./dashboard.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { Avatar, IconButton, Button } from "@mui/material";
import ExpenseTracker from "../../components/Expense Tracker/ExpenseTracker";
import MainBalance from "../../components/Main Balance/MainBalance";
import sidebarContent from "../../components/sidebar/sidebarData";
import AuthContext from "../../AuthProvider";
import instance from "../../axios";

const Dashboard = () => {
  const { auth } = useContext(AuthContext);
  let { data, barchartData } = auth;
  let id = data.account._id;
  const [userData, setUserData] = useState({});
  const [barchat, setBarchat] = useState(null);

  useEffect(() => {
    instance.get(`/code/expenses/${id}`).then((data) => {
      setBarchat(data.data.history);
    });
  }, []);

  return (
    <div className="dashboard">
      <Sidebar sidebarContent={sidebarContent} />
      <div className="dashboard-main">
        <ExpenseTracker barchat={barchat} />
        <MainBalance />
      </div>
    </div>
  );
};

export default Dashboard;
