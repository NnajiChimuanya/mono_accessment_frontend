import React from "react";
import "./dashboard.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { Avatar, IconButton, Button } from "@mui/material";
import AvatarGroup from "@mui/material/AvatarGroup";
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
import data from "./barchatData";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-main">
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
              <div className="transactions-header-title">
                {" "}
                Latest Transactions
              </div>
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
        <div className="dashboard-main-balance">
          <div className="total-balance-container">
            <div className="total-balance">
              <div className="total-balance-title">
                <p>TOTAL BALANCE</p>
              </div>
              <div className="total-amount">
                <p>30,000,000</p>
              </div>
              <div className="total-amount-text">
                <p id="text"> Your balance across all Banks</p>
              </div>
              <div className="banks-container">
                <AvatarGroup className="avatar-group">
                  <Avatar
                    className="bank"
                    alt="Guaranty Trust Bank"
                    src="https://nairametrics.com/wp-content/uploads/2015/05/Guaranty_Trust_Bank.jpg"
                  />
                  <Avatar
                    className="bank"
                    alt="First Bank"
                    src="https://upload.wikimedia.org/wikipedia/en/6/62/First_Bank_of_Nigeria_logo.png"
                  />
                  <Avatar
                    className="bank"
                    alt="Access Bank"
                    src="https://pbs.twimg.com/profile_images/1112702246326845445/a-CBpIyN_400x400.png"
                  />
                  <Avatar
                    className="bank"
                    alt="Zenith Bank"
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Zenith_Bank_logo.svg/1200px-Zenith_Bank_logo.svg.png"
                  />
                </AvatarGroup>
                <div className="add">
                  <Add />
                </div>
              </div>

              <div className="unlink-button-container">
                <Button className="unlink-button"> Unlink BANK Account </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
