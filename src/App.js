import "./App.css";

import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Signup from "./pages/signup/Signup";
import sidebarContent from "./components/sidebar/sidebarData";
import LinkAccount from "./pages/Link Account/LinkAccount";
import { useContext } from "react";
import AuthContext from "./AuthProvider";

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/dashboard"
          element={auth.data !== null ? <Dashboard /> : <LinkAccount />}
        />
        <Route exact path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/linkAccount" element={<LinkAccount />} />
        {sidebarContent.map((item, id) => {
          return (
            <Route
              path={item.path}
              element={auth.data !== null ? <item.page /> : <LinkAccount />}
              key={id}
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
