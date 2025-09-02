import React from "react";
import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";
import axios from "./api/axios";

const App = () => {

  let a=0
  const getData = async () => {
    const res = await axios.get("/comments");
    console.log(res);
  };
  getData();

  return (
    <div className="bg-gray-600 h-screen  w-screen">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;

