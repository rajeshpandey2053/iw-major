import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import logo from "../../images/Logo143x32.svg";
import { connect } from "react-redux";

const NavBar = props => {
  return (
    <div className="navbar">
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top ">
        <div className="container">
          <Link className="navbar-brand logo-image" to="/">
            <img src={logo} alt="alternative" />
          </Link>

          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link page-scroll" to="/">
                  Home{" "}
                </Link>
              </li>
              {props?.token ? (
                <li className="nav-item">
                  <Link className="nav-link page-scroll" to="/logout">
                    Logout
                  </Link>
                </li>
              ) : (
                <div className="no-login">
                  <li className="nav-item">
                    <Link className="nav-link page-scroll" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link page-scroll" to="/register">
                      Register
                    </Link>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    token: state.login.token,
  };
};

export default connect(mapStateToProps)(NavBar);
