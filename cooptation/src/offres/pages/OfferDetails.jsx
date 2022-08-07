import React, { useState, useEffect }from "react";

import { Favorite, FavoriteBorder, MoreVert, Share, Delete } from "@mui/icons-material";
import { useParams } from 'react-router-dom';
import {
  Button,
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
  Divider,
  Dialog,
} from "@mui/material";
 
import './Offer.css'
import ResponsiveIConButton from '../../shared/components/UIElements/ResponsiveIconButton';
 

  
 
import Axios from "axios";

const OfferDetails = props => {
    const offerId = useParams()._id;


    const [loadedOffer, setOffer] = useState([]);

    const fetchOffer = async () => {
      let url =  `http://localhost:5000/api/offer/${offerId}`
      console.log("thhheeee iiddd");
      console.log(url)
      console.log("thhheeee iiddd");
      const { data } = await Axios.get(
       url
      );
      const loadedOffer = data;
      setOffer(loadedOffer);
   //   console.log(loadedOffer);
  
    };
  
    useEffect(() => {
      fetchOffer();
    },  );
 
 
  return (
    <Card sx={{ width: '95%' , marginRight:'auto' , marginLeft:'auto', marginTop: '20px'}}>

      <CardHeader
        sx={{ bgcolor: "#d3d3d3" }}
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={loadedOffer.title}
        subheader={loadedOffer.createdAt}
        
      />
      <CardMedia

        component="img"
        style={{ height: '30rem', objectFit: 'cover' }}

        image={"http://localhost:5000/images"+loadedOffer.image}
        alt={loadedOffer.title}
      />
      <CardContent style={{ height: '15rem' }}>
        <Typography variant="body2" color="text.secondary">
          <div>
            {loadedOffer.description}
          </div>
        </Typography>
      </CardContent>
      <Divider></Divider>
      <CardActions disableSpacing>
        <IconButton sx={{ marginRight: 1 }} aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton sx={{ marginRight: 2 }} aria-label="share">
          <Share />

        </IconButton>

        <Dialog title={"title"}
          text={"Après avoir supprimé cette offre, vous ne pouvez pas la récupérer, souhaitez-vous continuer ?"}
          child={<IconButton sx={{ marginRight: 2 }} aria-label="Delete">
            <Delete />
          </IconButton>} />
        <Button  sx={{ marginRight: 2 }} variant="outlined" onClick={() => { }} >Voir Plus</Button>
        <Button  sx={{ marginRight: 2 }} variant="outlined" onClick={() => { alert('clicked'); }} >Editer</Button>
       <ResponsiveIConButton/>
      </CardActions>
    </Card>
  );
};
export default OfferDetails;