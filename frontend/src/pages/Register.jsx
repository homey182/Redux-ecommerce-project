import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncRegisterUser } from "../store/actions/userActions";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registerHandler = (user) => {
    user.id = nanoid();
    user.isAdmin = true;
    dispatch(asyncRegisterUser(user));
    navigate("/login");
  };
  return (
    <form
      onSubmit={handleSubmit(registerHandler)}
      className="flex flex-col w-1/2 mt-5"
    >
      <input
        {...register("username")}
        className="bg-transparent outline-0 border-b p-2 text-xl"
        type="text"
        placeholder="username"
      />
      <input
        {...register("email")}
        className="bg-transparent outline-0 border-b p-2 text-xl"
        type="email"
        placeholder="email"
      />
      <input
        {...register("password")}
        className="bg-transparent outline-0 border-b p-2 text-xl"
        type="password"
        placeholder="password"
      />
      <button className=" w-[30%] bg-green-800 p-2 mt-2">Register User</button>
      <p>
        Already have an account?{" "}
        <Link to="/login" className="text-blue-300">
          Log In
        </Link>
      </p>
    </form>
  );
};

export default Register;
