import { Box, Stack, Skeleton } from "@mui/material";
import Grid from '@mui/material/Grid';

import React, { useState, useEffect }from "react";
import Offer from "./Offer.jsx";
import CreateOffer from "../components/createOffer";

import Axios from "axios";
import NoOffersCreateOne from "../components/NoOfferCreateOne";

const Feed = props => {
  const [offers, setOffers] = useState([]);

  const fetchOffers = async () => {
    const { data } = await Axios.get(
      "http://localhost:5000/api/offer/"
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
        <CreateOffer/>
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
              <Offer
              key={offre._id}
              id={offre._id}
              image={"http://localhost:5000/images"+offre.image}
              title={offre.title}
              createdAt={offre.createdAt}
              description={offre.description}
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
      <NoOffersCreateOne/>
        
    );
   }

};

export default Feed;