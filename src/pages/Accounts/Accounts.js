import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./accounts.css";
import AuthContext from "../../AuthProvider";
import instance from "../../axios";
import sidebarContent from "../../components/sidebar/sidebarData";

const Accounts = () => {
  const { auth } = useContext(AuthContext);
  let { data, transactions } = auth;

  const [shareholderDetails, setshareholderDetails] = useState();

  useEffect(() => {
    instance.get(`/code/shareholder`).then((data) => {
      setshareholderDetails(data.data);
    });
  }, []);
  return (
    <div className="accounts">
      <Sidebar sidebarContent={sidebarContent} />
      <div className="accounts-main">
        <div className="transactions-header">
          <div className="transactions-header-title">
            Company's shareholders
          </div>
        </div>
        {shareholderDetails?.map((item, id) => {
          let { firstname, surname, email, nationality } = item;
          return (
            <div key={id} className="list-item">
              <div className="item-info">
                <div className="item-info-text">
                  <p className="title">
                    {" "}
                    {surname} {firstname}{" "}
                  </p>
                  <p className="time">{email}</p>
                </div>
              </div>
              <div className="amount">
                <p>{nationality}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accounts;
