import React, { useState, useEffect } from "react";
import Axios from "axios";
import Grid from '@mui/material/Grid';


import Offer from "../offres/pages/Offer";

function Bye() {
  const [offers, setOffers] = useState([]);

  const fetchOffers = async () => {
    const { data } = await Axios.get(
      "http://localhost:5000/api/offer/"
    );
    const offers = data;
    setOffers(offers);
    console.log(offers);

  };

  useEffect(() => {
    fetchOffers();
  }, []);

  return (
    <div>
      
      {offers.map((offre , index) => (
        <Grid item xs={12} sm={12} md={6} key={index}>
          <Offer
            key={offre.id}
            id={offre.id}
            image={offre.image}
            title={offre.title}
            description={offre.description}
          />
        </Grid> ))}
    </div>

  );
}

export default Bye;