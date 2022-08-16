import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./summary.css";

const Settings = () => {
  return (
    <div className="summary">
      <Sidebar />
      <div className="settings-main">Settings</div>
    </div>
  );
};

export default Settings;
