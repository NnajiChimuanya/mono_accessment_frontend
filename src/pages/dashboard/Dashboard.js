import React from "react";
import "./dashboard.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { Avatar } from "@mui/material";
import { CreditCard, MoreHoriz } from "@mui/icons-material";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import data from "./barchatData";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-main">
        <div className="dashboard-main-expense">
          <div className="expense-header">
            <div className="user">
              <Avatar src="https://i0.wp.com/businessday.ng/wp-content/uploads/2021/10/Abdul-Hassan.png?fit=700%2C400&ssl=1" />
              <p>
                Good morning, <span>Ola</span>
              </p>
            </div>
            <div className="day">
              <p>Today</p>

              <CreditCard />
            </div>
          </div>

          <div className="chart">
            <div className="chart-title">Expense Tracker</div>
            <div className="barchat">
              <div className="barchat-container">
                <BarChart barGap={5} width={450} height={120} data={data}>
                  <Bar barSize={15} dataKey="uv" fill="#dbeff0" />
                </BarChart>
              </div>
            </div>
          </div>

          <div className="transactions">
            <div className="transactions-header">
              <div className="transactions-header-title">
                {" "}
                Latest Transactions
              </div>
              <div className="more">
                <MoreHoriz />
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-main-balance"> Balance</div>
      </div>
    </div>
  );
};

export default Dashboard;
