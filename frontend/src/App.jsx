import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";
import { useEffect } from "react";
import { asyncCurrentUser } from "./store/actions/userActions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncCurrentUser());
  });
  return (
    <div className="bg-gray-700 h-screen  w-screen text-white font-thin px-[10%]">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;
