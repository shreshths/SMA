import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const location = useLocation();

  return (
    <div>
      <nav
        className="navbar navbar-dark bg-dark navbar-expand-md fixed-top "
        style={{ height: "60px" }}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand ms-1 ms-md-4"
            href="https://github.com/shreshths"
          >
            Student Management App
          </a>
          {location.pathname !== "/login" && location.pathname !== "/" && (
            <>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
              <div
                className="collapse navbar-collapse bg-dark p-2 p-md-0"
                id="navbarNav"
              >
                <div className=" ms-auto d-flex flex-column flex-md-row align-items-start align-items-md-end">
                  <Link
                    to="/add-student"
                    className={`btn btn-dark mb-2 mb-md-0 ${
                      location.pathname === "/add-student" ? "active" : ""
                    }`}
                  >
                    Add a Student
                  </Link>
                  <Link
                    to="/students"
                    className={`btn btn-dark mb-2 mb-md-0 ${
                      location.pathname === "/students" ? "active" : ""
                    }`}
                  >
                    Home
                  </Link>
                  <div
                    className="vr ms-4 me-4 d-none d-md-block"
                    style={{
                      color: "white",
                    }}
                  ></div>
                  <Link to="/login" className="mb-2 mb-md-0 me-md-4">
                    <button className="btn btn-outline-light" title="Logout">
                      Logout&ensp;
                      <FontAwesomeIcon icon={faRightFromBracket} />
                    </button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
