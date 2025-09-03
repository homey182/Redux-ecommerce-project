import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { asyncLoggoutUser } from "../store/actions/userActions";

const Navbar = () => {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function userLogoutHandler() {
    dispatch(asyncLoggoutUser());
    navigate("/login");
  }
  return (
    <nav className="text-2xl flex items-center justify-center gap-5">
      <NavLink to="/">home</NavLink>
      <NavLink to="/products">Products</NavLink>
      {user ? (
        <>
          <NavLink to="/admin/create-product">Create product</NavLink>
          <button onClick={userLogoutHandler}>LogOut</button>
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
