import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar-dark bg-dark fixed-top"
        style={{ height: "60px" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand ms-4" href="https://github.com/shreshths">
            Student Management App
          </a>
          {location.pathname !== "/login" && location.pathname !== "/" && (
            <div align="right">
              <Link
                to="/add-student"
                className={`btn btn-dark ${
                  location.pathname === "/add-student" ? "active" : ""
                }`}
              >
                Add
              </Link>
              <Link
                to="/students"
                className={`btn btn-dark ${
                  location.pathname === "/students" ? "active" : ""
                }`}
              >
                Home
              </Link>

              <Link to="/login">
                <button className="btn btn-danger ms-4">Logout</button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
