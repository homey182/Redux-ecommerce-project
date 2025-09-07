import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const user = useSelector((state) => state.userReducer.user);

  return (
    <nav className="text-2xl flex items-center justify-center gap-5">
      <NavLink to="/">home</NavLink>
      {user ? (
        <>
          {user && user?.isAdmin && (
            <NavLink to="/admin/create-product">Create product</NavLink>
          )}
          <NavLink to="/user-profile">Setting</NavLink>
          <NavLink to="/cart">Cart</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
    </nav>
  );
};

export default Navbar;
