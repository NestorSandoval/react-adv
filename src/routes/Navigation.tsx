import { BrowserRouter } from "react-router-dom";
import { Routes, NavLink, Navigate, Route } from "react-router-dom";

import logo from "../logo.svg";

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />

          <ul>
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                User
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="about" element={<h1>About</h1>} />
          <Route path="users" element={<h1>Users</h1>} />
          <Route path="home" element={<h1>Main Page</h1>} />

          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
