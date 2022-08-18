import "./mainBalance.css";
import React, { useContext, useEffect, useState } from "react";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Avatar, Button } from "@mui/material";
import {
  CreditCard,
  MoreHoriz,
  PlayCircleFilled,
  Add,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import AuthContext from "../../AuthProvider";
import instance from "../../axios";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MainBalance = () => {
  const { auth, setAuth } = useContext(AuthContext);

  let { data } = auth;
  const navigate = useNavigate();

  const handleUnlink = async () => {
    instance
      .post(`/code/unlink/${data.account._id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    setAuth({ ...auth, data: null, transactions: null });
    navigate("/linkAccount");
  };

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 8,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "#ffb1b1",
    },
  }));
  return (
    <div className="dashboard-main-balance">
      <div className="total-balance-container">
        <div className="total-balance">
          <div className="total-balance-title">
            <p>TOTAL BALANCE</p>
          </div>
          <div className="total-amount">
            <p>{data.account.balance}</p>
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
            <Button onClick={handleUnlink} className="unlink-button">
              {" "}
              Unlink BANK Account{" "}
            </Button>
          </div>
        </div>
      </div>

      <div className="details">
        <div className="details-title">
          <div className="details-title-main">
            <p> Where your money go?</p>
          </div>
          <MoreHoriz />
        </div>

        <hr />

        <div className="details-main">
          <div className="details-item">
            <div className="details-item-info">
              <div className="details-item-info-name"> Food and Drinks</div>
              <div className="details-item-info-amount"> 872,400</div>
            </div>
            <div className="details-item-progressbar">
              <BorderLinearProgress variant="determinate" value={50} />
            </div>
          </div>

          <div className="details-item">
            <div className="details-item-info">
              <div className="details-item-info-name"> Food and Drinks</div>
              <div className="details-item-info-amount"> 872,400</div>
            </div>
            <div className="details-item-progressbar">
              <BorderLinearProgress variant="determinate" value={50} />
            </div>
          </div>

          <div className="details-item">
            <div className="details-item-info">
              <div className="details-item-info-name"> Food and Drinks</div>
              <div className="details-item-info-amount"> 872,400</div>
            </div>
            <div className="details-item-progressbar">
              <BorderLinearProgress variant="determinate" value={50} />
            </div>
          </div>

          <div className="details-item">
            <div className="details-item-info">
              <div className="details-item-info-name"> Food and Drinks</div>
              <div className="details-item-info-amount"> 872,400</div>
            </div>
            <div className="details-item-progressbar">
              <BorderLinearProgress variant="determinate" value={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBalance;
