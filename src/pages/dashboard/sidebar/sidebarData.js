import Dashboard from "../Dashboard";
import Expenses from "../../expenses/Expenses";
import Wallets from "../../expenses/Expenses";
import Summary from "../../summary/Summary";
import Accounts from "../../Accounts/Accounts";
import Settings from "../../settings/Settings";

const sidebarContent = [
  {
    name: "Dashboard",
    path: "/",
    page: Dashboard,
  },
  {
    name: "Expenses",
    path: "/expenses",
    page: Expenses,
  },
  {
    name: "Wallet",
    path: "/wallets",
    page: Wallets,
  },
  {
    name: "Summary",
    path: "/summary",
    page: Summary,
  },
  {
    name: "Accounts",
    path: "/accounts",
    page: Accounts,
  },
  {
    name: "Settings",
    path: "/settings",
    page: Settings,
  },
];

export default sidebarContent;
