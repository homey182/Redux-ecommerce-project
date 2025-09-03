import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";
import { useEffect } from "react";
import { asyncCurrentUser } from "./store/actions/userActions";
import { asyncLoadProduct } from "./store/actions/productActions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncCurrentUser());
    dispatch(asyncLoadProduct());
  }, []);
  return (
    <div className="bg-gray-700 h-screen  w-screen text-white font-thin px-[10%] overflow-auto">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;
