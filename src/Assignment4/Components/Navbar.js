import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" >ABOUT</NavLink>
      <NavLink to="/Products" >PRODUCTS</NavLink>
    </nav>
  );
};

export default Navbar;
