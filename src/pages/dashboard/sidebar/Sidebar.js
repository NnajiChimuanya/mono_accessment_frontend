import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import Dashboard from "../Dashboard";
import Expenses from "../../expenses/Expenses";
import Wallets from "../../expenses/Expenses";
import Summary from "../../summary/Summary";
import Accounts from "../../Accounts/Accounts";
import Settings from "../../settings/Settings";

const Sidebar = () => {
  const sidebarContent = [
    {
      name: "Dashboard",
      path: "/",
      page: Dashboard,
    },
    {
      name: "Expenses",
      path: "/expenses",
      page: Expenses,
    },
    {
      name: "Wallet",
      path: "/wallets",
      page: Wallets,
    },
    {
      name: "Summary",
      path: "/summary",
      page: Summary,
    },
    {
      name: "Accounts",
      path: "/accounts",
      page: Accounts,
    },
    {
      name: "Settings",
      path: "/settings",
      page: Settings,
    },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-div">
        <div className="logo-container">
          <img
            className="sidebar-logo"
            src="https://media-exp1.licdn.com/dms/image/C560BAQGS_xwbmUbSCQ/company-logo_200_200/0/1633425384122?e=2147483647&v=beta&t=33Cc7QtlWzIYohpTdzhMkqwEmaJnwxTU0WuH5He66Fc"
            alt=""
          />
        </div>
        <div className="sidebar-content">
          {sidebarContent?.map((item) => {
            return <div className="sidebar-content-item"> {item.name}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
