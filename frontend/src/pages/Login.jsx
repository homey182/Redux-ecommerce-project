import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { asyncLoginUser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginHandler = (user) => {
    dispatch(asyncLoginUser(user));
    navigate("/");
  };
  return (
    <form
      onSubmit={handleSubmit(loginHandler)}
      className="flex flex-col w-1/2 mt-5"
    >
      <input
        {...register("email", {
          required: "Email can not be empty",
        })}
        className="bg-transparent outline-0 border-b p-2 text-xl"
        type="email"
        placeholder="email"
      />
      <input
        {...register("password", {
          required: "password can not empty",
        })}
        className="bg-transparent outline-0 border-b p-2 text-xl"
        type="password"
        placeholder="password"
      />
      <button className=" w-[30%] bg-green-800 rounded p-2 mt-2">Login</button>
      <p>
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-200">
          Register
        </Link>
      </p>
    </form>
  );
};

export default Login;
