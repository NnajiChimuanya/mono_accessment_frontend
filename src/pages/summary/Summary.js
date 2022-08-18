import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./summary.css";
import AuthContext from "../../AuthProvider";
import instance from "../../axios";
import sidebarContent from "../../components/sidebar/sidebarData";

const Summary = () => {
  const { auth } = useContext(AuthContext);
  let { data, transactions } = auth;
  let id = data.account._id;

  const [summary, setSummary] = useState();

  useEffect(() => {
    instance.get(`/code/statement/${id}`).then((data) => {
      setSummary(data.data);
    });
  }, []);

  return (
    <div className="summary">
      <Sidebar sidebarContent={sidebarContent} />
      <div className="summary-main">
        <div className="transactions-header">
          <div className="transactions-header-title">Account Summary</div>
        </div>
        <hr />
        <div className="transaction-list">
          {summary?.data?.map((item, id) => {
            let { type, narration, amount, date } = item;
            return (
              <div key={id} className="list-item">
                <div className="item-info">
                  <div className="item-type-container">
                    {type === "credit" ? (
                      <img
                        className="item-type-img"
                        src="https://banner2.cleanpng.com/20180630/lwy/kisspng-credit-card-bank-credit-limit-debit-card-5b37b62eb0dd78.3158197915303777747245.jpg"
                        alt=""
                      />
                    ) : (
                      <img
                        className="item-type-img"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxCXtKzkntwW4dytiiHD6RftTLPuQjq-OeZG0n_H49q--BI3kxb45qo30IQs83peSeUM0&usqp=CAU"
                        alt=""
                      />
                    )}
                  </div>
                  <div className="item-info-text">
                    <p className="title"> {narration}</p>
                    <p className="time">
                      {" "}
                      {new Date(date).toUTCString()} . <span> {type}</span>
                    </p>
                  </div>
                </div>
                <div className="amount">
                  <p>
                    {type === "debit" ? <span>-</span> : <span>+</span>}{" "}
                    {amount}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Summary;
