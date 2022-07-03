import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar ">
      <div className="logo d-flex justify-content-center align-items-center">
        <i className="bi bi-house-fill fs-2 text-primary"></i>
        <p>CredoHouse</p>
        <span className="bg-primary"></span>
      </div>
      <div className="nav-list w-25 d-flex  justify-content-evenly align-items-center px-5">
        <NavLink to="/">
          <button className="btn btn-primary">Home Page</button>
        </NavLink>
        <NavLink to="/complex">
          <button className="btn btn-primary">Admin</button>
        </NavLink>
      </div>
      <div className="lenguage d-flex w-25">
        <h5 className="w-75 text-secondary">99 871 242-00-00</h5>
        <select className="form-select w-25">
          <option value="">UZ</option>
          <option value="">EN</option>
          <option value="">RU</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
