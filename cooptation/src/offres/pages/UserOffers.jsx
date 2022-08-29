import { Box, Stack, Skeleton } from "@mui/material";
import Grid from '@mui/material/Grid';
import React, { useContext , useState, useEffect } from "react";
import { UserContext } from "../../shared/context/AuthContext";
import UserOffer from "./UserOffer";
import CreateOffer from "../components/createOffer";
import NoOffers from "../components/NoOffers"

import Axios from "../../api/axios";
import NoOffersCreateOne from "../components/NoOfferCreateOne";

const UsersOffers = props => {
 // const [user, setUser] = useState(null);
 // const value = useMemo(() => ({ user, setUser }), [user, setUser]);
 const { user } = useContext(UserContext);

  const [offers, setOffers] = useState([]);

  const fetchOffers = async () => {
    const { data } = await Axios.get(
      "/api/offer/usersOffers"
    );
    const offers = data;
    setOffers(offers);
    

  };

  useEffect(() =>  {
     fetchOffers();
  }, []);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [5000]);

  if (offers.length > 0) {
     
    return (
      <div>
        {
          user.user.isAdmin?   <CreateOffer/> : null
        }``   
     <Box flex={4} p={{ xs: 0, md: 2 }}>
        {loading ? (
          <Stack spacing={1}>
            <Skeleton variant="text" height={100} />
            <Skeleton variant="text" height={20} />
            <Skeleton variant="text" height={20} />
            <Skeleton variant="rectangular" height={300} />
          </Stack>
        ) : (       
          <Grid container  columns={{ xs: 4, sm: 8, md: 12 }}>  
          {offers.slice(0).reverse().map((offre, index) => (
            <Grid   item xs={12} sm={12} md={6} key={index}>
              <UserOffer
                  key={offre._id}
                  id={offre._id}
                  image={"http://localhost:5000/images"+offre.image}
                  title={offre.title}
                  modedemploi={offre.modedemploi}
                  expYears={offre.expYears}
                  requiredSkills={offre.requiredSkills}
                  responsabilities={offre.responsabilities}
                  description={offre.description}
                  company={offre.company}
                  companyDescription={offre.companyDescription}
                  startDate={offre.startDate}
                  duration={offre.duration}
                  createdAt={offre.createdAt}
                  status={offre.status}
              />     
            </Grid>
          ))}
        </Grid>
        )}
      </Box>
      </div>


    );

   
  } else { 
    return (
      <div>

     
        <NoOffers/>
       
      
      
      </div>
    
        
    );
   }

};

export default UsersOffers;