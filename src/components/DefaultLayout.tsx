import React from "react";
import { Outlet, Link } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/users"}>Users</Link>
      <Link to={"/products"}>Products</Link>
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
