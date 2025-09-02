import axios from "../../api/axios";
import { loadUser } from "../reducers/userSlice";
export const asyncRegisterUser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/users", user);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const asyncLoginUser = (user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );
    localStorage.setItem("user", JSON.stringify(data[0]));
  } catch (error) {
    console.log(error);
  }
};

export const asyncCurrentUser = () => (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    dispatch(loadUser(user));
  } catch (error) {
    console.log(error);
  }
};
