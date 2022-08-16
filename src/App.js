import "./App.css";

import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Signup from "./pages/signup/Signup";
import sidebarContent from "./components/sidebar/sidebarData";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {sidebarContent.map((item, id) => {
          return <Route path={item.path} element={<item.page />} key={id} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
