import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import sidebarContent from "./sidebarData";

const Sidebar = () => {
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
            return (
              <div className="sidebar-content-item">
                <Link to={<item.path />}> {item.name}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
