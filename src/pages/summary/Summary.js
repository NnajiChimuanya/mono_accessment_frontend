import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./summary.css";

const Summary = () => {
  return (
    <div className="summary">
      <Sidebar />
      <div className="summary-main">Summary</div>
    </div>
  );
};

export default Summary;
