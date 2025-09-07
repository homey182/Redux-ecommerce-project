import axios from "../../api/axios";
import { loadUser, removeUser } from "../reducers/userSlice";
export const asyncRegisterUser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/users", user);
  } catch (error) {
    console.log(error);
  }
};

export const asyncLoginUser = (user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );
    console.log(data);
    if (data.length > 0) {
      localStorage.setItem("user", JSON.stringify(data[0]));
    } else console.log("user not logged in");
  } catch (error) {
    console.log("User not logged in", error);
  }
};

export const asyncLoggoutUser = () => async (dispatch, getState) => {
  try {
    localStorage.removeItem("user");
    dispatch(removeUser());
    console.log("User logout successfuly");
  } catch (error) {
    console.log(error);
  }
};

export const asyncCurrentUser = () => async (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem("user")) || null;
    if (user) {
      dispatch(loadUser(user));
      console.log("user logged in successully");
    } else console.log("user not logged in");
  } catch (error) {
    console.log(error);
  }
};

export const asyncUpdateUser = (id, user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.patch("/users/" + id, user);
    console.log(data);
    localStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

export const asyncDeleteUser = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.delete("/users/" + id);
    dispatch(asyncLoggoutUser());
  } catch (error) {
    console.log(error);
  }
};
