import React,{useContext} from "react";
import { Route, Routes } from "react-router-dom";
import { HealthContext } from "./Context/HealthCareContext";

const App = () => {
  const { yourStakinginINR} =useContext(HealthContext);
  console.log(yourStakinginINR);
  return (
    <div>
      hello to this word
    </div>
  );
};

export default App;
