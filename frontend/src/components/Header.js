import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

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
            <div align="right" className="d-flex">
              <Link
                to="/add-student"
                className={`btn btn-dark ${
                  location.pathname === "/add-student" ? "active" : ""
                }`}
              >
                Add a Student
              </Link>
              <Link
                to="/students"
                className={`btn btn-dark ${
                  location.pathname === "/students" ? "active" : ""
                }`}
              >
                Home
              </Link>
              <div
                className="vr ms-4 me-4"
                style={{
                  color: "white",
                }}
              ></div>
              <Link to="/login">
                <button className="btn btn-outline-light" title="Logout">
                  Logout&ensp;
                  <FontAwesomeIcon icon={faRightFromBracket} />
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
