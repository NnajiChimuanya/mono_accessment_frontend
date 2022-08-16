import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./wallets.css";

const Wallets = () => {
  return (
    <div className="wallets">
      <Sidebar />
      <div className="wallets-main">Wallets</div>
    </div>
  );
};

export default Wallets;
