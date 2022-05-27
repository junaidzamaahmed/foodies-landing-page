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
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>
      <div className="d-flex justify-content-center">
        <NavLink
          to="/home"
          className="me-5 nav-item text-light text-decoration-none fs-5"
        >
          Home
        </NavLink>
        <NavLink
          to="/product"
          className="me-5 nav-item text-light text-decoration-none fs-5"
        >
          Product
        </NavLink>
        <NavLink
          to="/promo"
          className="me-5 nav-item text-light text-decoration-none fs-5"
        >
          Promo
        </NavLink>
        <NavLink
          to="/about"
          className="me-5 nav-item text-light text-decoration-none fs-5"
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className="nav-item text-light text-decoration-none fs-5"
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
