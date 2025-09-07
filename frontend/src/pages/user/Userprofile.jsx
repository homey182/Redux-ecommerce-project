import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  asyncDeleteUser,
  asyncLoggoutUser,
  asyncUpdateUser,
} from "../../store/actions/userActions";

const Userprofile = () => {
  const { user } = useSelector((state) => state.userReducer);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: user?.username,
      email: user?.email,
      password: user?.password,
    },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateUserHandler = (userD) => {
    dispatch(asyncUpdateUser(user.id, userD));

    // navigate("/products");
  };
  function userDeleltHandler() {
    dispatch(asyncDeleteUser(user.id));
    navigate("/login");
  }
  function userLogouttHandler() {
    dispatch(asyncLoggoutUser());
    navigate("/login");
  }
  return user ? (
    <form
      onSubmit={handleSubmit(updateUserHandler)}
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
        placeholder="title"
      />
      <input
        {...register("password")}
        className="bg-transparent outline-0 border-b p-2 text-xl"
        type="password"
        placeholder="password"
      />

      <button className=" w-[30%] bg-green-800 p-2 mt-2">Update User</button>
      <button
        onClick={userDeleltHandler}
        type="button"
        className=" w-[30%] bg-red-800 p-2 mt-2"
      >
        Delete User
      </button>
      <button
        onClick={userLogouttHandler}
        type="button"
        className=" w-[30%] bg-red-800 p-2 mt-2"
      >
        Logout User
      </button>
    </form>
  ) : (
    "Loading..."
  );
};

export default Userprofile;
