import Dashboard from "../../pages/dashboard/Dashboard";
import Expenses from "../../pages/expenses/Expenses";
import Wallets from "../../pages/wallets/Wallets";
import Summary from "../../pages/summary/Summary";
import Accounts from "../../pages/Accounts/Accounts";
import Settings from "../../pages/settings/Settings";

const sidebarContent = [
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
    name: "Logout",
    path: "/logout",
    page: Settings,
  },
];

export default sidebarContent;
