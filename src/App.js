import "./App.css";

import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Signup from "./pages/signup/Signup";
import sidebarContent from "./components/sidebar/sidebarData";
import LinkAccount from "./pages/Link Account/LinkAccount";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/linkAccount" element={<LinkAccount />} />
        {sidebarContent.map((item, id) => {
          return <Route path={item.path} element={<item.page />} key={id} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
