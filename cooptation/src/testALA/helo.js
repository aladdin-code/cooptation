import React, { useContext } from "react";
import { UserContext } from "../shared/context/AuthContext";



const Hello = () => {

  const { user } = useContext(UserContext);



  return   <div>
    <h1>Hello</h1>
    <h1>{JSON.stringify(user, null, 2)}</h1>
    </div>
};

export default Hello;