import axios from "../../api/axios";
import { loadProduct } from "../reducers/productSlice";

export const asyncLoadProduct = () => async (dispatch, getState) => {
  const { data } = await axios.get("/products");
  dispatch(loadProduct(data));
};

export const asyncCreateProduct = (product) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/products", product);
    console.log("product created", res);
    dispatch(asyncLoadProduct());
  } catch (error) {
    console.log(error);
  }
};

export const asyncUpdateProduct =
  (id, product) => async (dispatch, getState) => {
    try {
      await axios.patch("/products/" + id, product);
      dispatch(asyncLoadProduct());
    } catch (error) {
      console.log(error);
    }
  };

export const asyncDeletProduct = (id) => async (dispatch, getState) => {
  try {
    await axios.delete("/products/" + id);
    dispatch(asyncLoadProduct());
  } catch (error) {
    console.log(error);
  }
};
