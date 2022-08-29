import React, { useContext , useState, useEffect } from "react";
import { UserContext } from "../../shared/context/AuthContext";
import { Link } from 'react-router-dom';
import Axios from "axios";
import { Favorite, FavoriteBorder, MoreVert, Share, Delete } from "@mui/icons-material";
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
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Dialog,
} from "@mui/material";
import './Offer.css';
import ShowUpdateOffer from'../components/showUpdateOffer';
import ResponsiveIConButton from '../../shared/components/UIElements/ResponsiveIconButton';
import Slide from '@mui/material/Slide';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const UserOffer = props => {
 
 
  
  return (
    <div>
      
      <Card sx={{ margin: 2 }}>
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
          title={props.title}
          subheader={`Doit commencer le : ${props.startDate}`}
        />
        <CardMedia
          component="img"
          style={{ height: '20rem', objectFit: 'cover' }}
          image={props.image}
          alt={props.title}
        />
        <CardContent style={{ height: '5rem' }}>
          <Typography variant="body2" color="text.secondary">
            <div class="text">
              {props.description}
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
          
 
          <Link to={`/offers/${props.id}`}>
            <Button sx={{ marginRight: 2 }} variant="outlined" onClick={() => { }} >Voir Plus</Button>
          </Link>
          
             <ResponsiveIConButton />
          
        </CardActions>
      </Card>
    </div>
  );
};
export default UserOffer;