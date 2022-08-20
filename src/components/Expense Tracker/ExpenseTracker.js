import "./expenseTracker.css";
import { Avatar } from "@mui/material";
import React, { useContext, useState } from "react";
import {
  CreditCard,
  MoreHoriz,
  PlayCircleFilled,
  Add,
  Key,
  DensityMedium,
} from "@mui/icons-material";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import AuthContext from "../../AuthProvider";

const ExpenseTracker = ({ barchat }) => {
  const { auth, setAuth } = useContext(AuthContext);
  let { data, transactions, showSidebar, barchatData } = auth;
  const [show, setShow] = useState(showSidebar);
  console.log(barchat);

  return (
    <div className="dashboard-main-expense">
      <div className="expense-header">
        <div className="user">
          <DensityMedium
            onClick={() => {
              setShow(!show);
              setAuth({ ...auth, showSidebar: show });
            }}
            className="expense-header-density"
          />
          <Avatar
            className="user-avatar"
            src="https://st2.depositphotos.com/3310833/7828/v/380/depositphotos_78289624-stock-illustration-flat-hipster-character.jpg?forcejpeg=true"
          />
          <p>
            Good morning, <span>{data.account.name}</span>
          </p>
        </div>
        <div className="day">
          <p>Today</p>

          <CreditCard />
        </div>
      </div>

      <div className="chart">
        <div className="chart-title">Expense Tracker</div>
        <div className="barchat">
          <div className="barchat-container">
            <BarChart width={450} height={120} data={barchat}>
              <Bar barSize={15} dataKey="amount" fill="#dbeff0" />
            </BarChart>
          </div>
        </div>
      </div>

      <div className="transactions">
        <div className="transactions-header">
          <div className="transactions-header-title"> Latest Transactions</div>
          <div className="more">
            <MoreHoriz />
          </div>
        </div>
        <hr />
        <div className="transaction-list">
          {transactions.data?.map((item, id) => {
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

export default ExpenseTracker;
