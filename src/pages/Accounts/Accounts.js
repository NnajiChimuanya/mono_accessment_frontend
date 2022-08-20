import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./accounts.css";
import AuthContext from "../../AuthProvider";
import instance from "../../axios";
import sidebarContent from "../../components/sidebar/sidebarData";

const Accounts = () => {
  const { auth } = useContext(AuthContext);
  let { data, transactions } = auth;
  let { account } = data;
  let { name, institution, type, balance, currency, accountNumber } = account;

  return (
    <div className="accounts">
      <Sidebar sidebarContent={sidebarContent} />
      <div className="accounts-main">
        <div className="transactions-header">
          <div className="transactions-header-title">Accounts</div>
        </div>

        <div>
          <div className="list-item">
            <div className="item-info">
              <div className="item-info-text">
                <p className="title"> {name}</p>
                <p className="time">
                  {" "}
                  {institution.name} . <span> {accountNumber}</span>
                </p>
                <p className="time"> {type}</p>
              </div>
            </div>
            <div className="amount">
              <p>
                {" "}
                <span> {currency} </span> {balance}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
