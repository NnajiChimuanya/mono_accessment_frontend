import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./expenses.css";
import instance from "../../axios";
import AuthContext from "../../AuthProvider";
import sidebarContent from "../../components/sidebar/sidebarData";

const Expenses = () => {
  const { auth } = useContext(AuthContext);
  let { data, transactions, expenses } = auth;
  const [expensesList, setExpensesList] = useState();
  let id = data.account._id;

  useEffect(() => {
    instance.get(`/code/expenses/${id}`).then((data) => {
      setExpensesList(data.data);
    });
  }, []);

  return (
    <div className="expenses">
      <Sidebar sidebarContent={sidebarContent} />
      <div className="summary-main">
        <div className="transactions-header">
          <div className="transactions-header-title">Expenses List</div>
        </div>
        <hr />
        <div className="transaction-list">
          {expensesList?.history?.map((item, id) => {
            let { period, amount } = item;
            return (
              <div key={id} className="list-item">
                <div className="item-info">
                  <div className="item-type-container">
                    <img
                      className="item-type-img"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxCXtKzkntwW4dytiiHD6RftTLPuQjq-OeZG0n_H49q--BI3kxb45qo30IQs83peSeUM0&usqp=CAU"
                      alt=""
                    />
                  </div>
                  <div className="item-info-text">
                    <p className="title"> {period}</p>
                  </div>
                </div>
                <div className="amount">
                  <p>{amount}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Expenses;
