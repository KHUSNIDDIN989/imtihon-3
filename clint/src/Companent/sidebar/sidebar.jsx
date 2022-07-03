import React from "react";
import { NavLink } from "react-router-dom";
NavLink;

const Sidebar = () => {
  return (
    <div className="col-2">
      <div className="card bg-light w-100 h-100 d-flex ">
        <ul className="list-group nav-item">
          <NavLink to="/company">
            <li className="list-group my-2 fw-bold bg-dark text-light p-3">
              Company
            </li>
          </NavLink>
          <NavLink to="/complex">
            <li className="list-group my-2 fw-bold bg-dark text-light p-3">
              Complex
            </li>
          </NavLink>
          <NavLink to="/room">
            <li className="list-group my-2 fw-bold bg-dark text-light p-3">
              Room
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
