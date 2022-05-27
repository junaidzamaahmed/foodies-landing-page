import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="">
      <div className="d-flex justify-content-center py-5">
        <Link to="/home">
          <img className="logo " src={logo} alt="" />
        </Link>
      </div>
      <div className="d-flex justify-content-center flex-wrap">
        <NavLink
          to="/home"
          className="me-4 nav-item text-light text-decoration-none"
        >
          Home
        </NavLink>
        <NavLink
          to="/product"
          className="me-4 nav-item text-light text-decoration-none"
        >
          Product
        </NavLink>
        <NavLink
          to="/promo"
          className="me-4 nav-item text-light text-decoration-none"
        >
          Promo
        </NavLink>
        <NavLink
          to="/about"
          className="me-4 nav-item text-light text-decoration-none"
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className="nav-item text-light text-decoration-none"
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
