import "./expenseTracker.css";
import { Avatar } from "@mui/material";
import React from "react";
import {
  CreditCard,
  MoreHoriz,
  PlayCircleFilled,
  Add,
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
import data from "../../pages/dashboard/barchatData";

const ExpenseTracker = () => {
  return (
    <div className="dashboard-main-expense">
      <div className="expense-header">
        <div className="user">
          <Avatar src="https://i0.wp.com/businessday.ng/wp-content/uploads/2021/10/Abdul-Hassan.png?fit=700%2C400&ssl=1" />
          <p>
            Good morning, <span>Ola</span>
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
            <BarChart
              defaultShowTooltip
              barGap={5}
              width={450}
              height={120}
              data={data}
            >
              <Bar barSize={15} dataKey="uv" fill="#dbeff0" />
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
          <div className="list-item">
            <div className="item-info">
              <PlayCircleFilled />
              <div className="item-info-text">
                <p className="title"> Netflix subscription</p>
                <p className="time">
                  {" "}
                  07/08/22 . 08 : 22pm . <span> Credit </span>
                </p>
              </div>
            </div>
            <div className="amount">
              <p> -10800 </p>
            </div>
          </div>
          <div className="list-item">
            <div className="item-info">
              <PlayCircleFilled />
              <div className="item-info-text">
                <p className="title"> Netflix subscription</p>
                <p className="time">
                  {" "}
                  07/08/22 . 08 : 22pm . <span> Credit </span>
                </p>
              </div>
            </div>
            <div className="amount">
              <p> -10800 </p>
            </div>
          </div>
          <div className="list-item">
            <div className="item-info">
              <PlayCircleFilled />
              <div className="item-info-text">
                <p className="title"> Netflix subscription</p>
                <p className="time">
                  {" "}
                  07/08/22 . 08 : 22pm . <span> Credit </span>
                </p>
              </div>
            </div>
            <div className="amount">
              <p> -10800 </p>
            </div>
          </div>
          <div className="list-item">
            <div className="item-info">
              <PlayCircleFilled />
              <div className="item-info-text">
                <p className="title"> Netflix subscription</p>
                <p className="time">
                  {" "}
                  07/08/22 . 08 : 22pm . <span> Credit </span>
                </p>
              </div>
            </div>
            <div className="amount">
              <p> -10800 </p>
            </div>
          </div>
          <div className="list-item">
            <div className="item-info">
              <PlayCircleFilled />
              <div className="item-info-text">
                <p className="title"> Netflix subscription</p>
                <p className="time">
                  {" "}
                  07/08/22 . 08 : 22pm . <span> Credit </span>
                </p>
              </div>
            </div>
            <div className="amount">
              <p> -10800 </p>
            </div>
          </div>
          <div className="list-item">
            <div className="item-info">
              <PlayCircleFilled />
              <div className="item-info-text">
                <p className="title"> Netflix subscription</p>
                <p className="time">
                  {" "}
                  07/08/22 . 08 : 22pm . <span> Credit </span>
                </p>
              </div>
            </div>
            <div className="amount">
              <p> -10800 </p>
            </div>
          </div>
          <div className="list-item">
            <div className="item-info">
              <PlayCircleFilled />
              <div className="item-info-text">
                <p className="title"> Netflix subscription</p>
                <p className="time">
                  {" "}
                  07/08/22 . 08 : 22pm . <span> Credit </span>
                </p>
              </div>
            </div>
            <div className="amount">
              <p> -10800 </p>
            </div>
          </div>
          <div className="list-item">
            <div className="item-info">
              <PlayCircleFilled />
              <div className="item-info-text">
                <p className="title"> Netflix subscription</p>
                <p className="time">
                  {" "}
                  07/08/22 . 08 : 22pm . <span> Credit </span>
                </p>
              </div>
            </div>
            <div className="amount">
              <p> -10800 </p>
            </div>
          </div>
          <div className="list-item">
            <div className="item-info">
              <PlayCircleFilled />
              <div className="item-info-text">
                <p className="title"> Netflix subscription</p>
                <p className="time">
                  {" "}
                  07/08/22 . 08 : 22pm . <span> Credit </span>
                </p>
              </div>
            </div>
            <div className="amount">
              <p> -10800 </p>
            </div>
          </div>
          <div className="list-item">
            <div className="item-info">
              <PlayCircleFilled />
              <div className="item-info-text">
                <p className="title"> Netflix subscription</p>
                <p className="time">
                  {" "}
                  07/08/22 . 08 : 22pm . <span> Credit </span>
                </p>
              </div>
            </div>
            <div className="amount">
              <p> -10800 </p>
            </div>
          </div>
          <div className="list-item">
            <div className="item-info">
              <PlayCircleFilled />
              <div className="item-info-text">
                <p className="title"> Netflix subscription</p>
                <p className="time">
                  {" "}
                  07/08/22 . 08 : 22pm . <span> Credit </span>
                </p>
              </div>
            </div>
            <div className="amount">
              <p> -10800 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
