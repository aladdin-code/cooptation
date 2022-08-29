import { Box, Stack, Skeleton } from "@mui/material";
import Grid from '@mui/material/Grid';
import React, { useContext , useState, useEffect } from "react";
import { UserContext } from "../../shared/context/AuthContext";
import Offer from "./Offer.jsx";
import CreateOffer from "../components/createOffer";
import NoOffers from "../components/NoOffers"

import UsersOffers from "./UserOffers";
import AdminOffers from "./adminOffers";

const OffersScreen = props => {
 // const [user, setUser] = useState(null);
 // const value = useMemo(() => ({ user, setUser }), [user, setUser]);
 const { user } = useContext(UserContext);



 return (
  <div>
    {
      user.user.isAdmin?  <AdminOffers/> : <UsersOffers/>  
    }  
 
  </div>


);

  

};

export default OffersScreen;