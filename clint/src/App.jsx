import React from "react";
import { Route, Routes } from "react-router-dom";
import Complexs from "./Companent/complex/complex";
import Adminall from "./pages/Adminall";
import Home from "./pages/home";
import Companys from "./Companent/company/company";
import Room from "./Companent/room/room";

import "./App.css";
import Auth from "./Companent/auth/auth";
const App = () => {
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/admin" element={<Adminall />} /> */}
        <Route path="/company" element={<Companys />} />
        <Route path="/complex" element={<Complexs />} />
        <Route path="/room" element={<Room />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
};

export default App;
