import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  const sidebarContent = [
    "Dashboard",
    "Expenses",
    "Wallets",
    "Summary",
    "Accounts",
    "Settings",
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-div">
        <div>
          <img
            className="sidebar-logo"
            src="https://media-exp1.licdn.com/dms/image/C560BAQGS_xwbmUbSCQ/company-logo_200_200/0/1633425384122?e=2147483647&v=beta&t=33Cc7QtlWzIYohpTdzhMkqwEmaJnwxTU0WuH5He66Fc"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
