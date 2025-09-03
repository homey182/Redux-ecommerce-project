import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncCreateProduct } from "../../store/actions/productActions";

const CreatedProduct = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const createProductHandler = (product) => {
    product.id = nanoid();
    dispatch(asyncCreateProduct(product));

    navigate("/products");
  };
  return (
    <form
      onSubmit={handleSubmit(createProductHandler)}
      className="flex flex-col w-1/2 mt-5"
    >
      <input
        {...register("image")}
        className="bg-transparent outline-0 border-b p-2 text-xl"
        type="url"
        placeholder="image Url"
      />
      <input
        {...register("title")}
        className="bg-transparent outline-0 border-b p-2 text-xl"
        type="text"
        placeholder="title"
      />
      <input
        {...register("price")}
        className="bg-transparent outline-0 border-b p-2 text-xl"
        type="text"
        placeholder="price"
      />
      <textarea
        className="bg-transparent outline-0 border-b p-2 text-xl"
        {...register("description")}
        placeholder="descriptions"
      ></textarea>

      <input
        {...register("category")}
        className="bg-transparent outline-0 border-b p-2 text-xl"
        type="text"
        placeholder="category"
      />

      <button className=" w-[30%] bg-green-800 p-2 mt-2">Create Product</button>
    </form>
  );
};

export default CreatedProduct;
