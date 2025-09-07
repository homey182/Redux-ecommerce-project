import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreatedProduct from "../pages/admin/CreatedProduct";
import ProductDetails from "../pages/admin/ProductDetails";
import Userprofile from "../pages/user/Userprofile";
import AuthWrapper from "./AuthWrapper";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/user-profile" element={<Userprofile />} />

      <Route path="/product-details/:id" element={<ProductDetails />} />

      <Route
        path="/admin/create-product"
        element={
          <AuthWrapper>
            <CreatedProduct />
          </AuthWrapper>
        }
      />
    </Routes>
  );
};

export default Mainroutes;
