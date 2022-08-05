import * as React from 'react';
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
} from "@mui/material";
import Dialog from '../../shared/components/UIElements/Dialog';
import './Offer.css'
import ResponsiveIConButton from '../../shared/components/UIElements/ResponsiveIconButton';
const Offer = props => {
  const [openAlert, setOpenAlert] = React.useState(false);
const handleOpenAlert  = () => {
  setOpenAlert(true);
};
const handleCloseAlert  = () => {
  setOpenAlert(false);
};
const deletOffer = id => {
  console.log("DELLLLLEEETING");
  Axios.delete("http://localhost:5000/api/offer/deleteOne", {
    data: {
      _id: id
    },
  }
   )
  .then((response) => {
    let success =  response.data ;
    console.log("RESSSPONE");
    console.log(response);

    if (success==="success") {
      console.log("success deleting");
      handleCloseAlert();
      // window.location.reload();
    
    } else {
      console.log("Delelte 0000000");
      console.log("idddddddddddddddddddd");
      console.log(id);
      console.log("idddddddddddddddddddd");
      handleOpenAlert();
      // window.location.reload();
    }
    
  }).catch((error) => {
    console.log("errer deleting");
    handleOpenAlert();
  })
  ;
}
  return (
    <div>
    <div>
    <Dialog
      open={openAlert}
      onClose={handleCloseAlert}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Erreur !"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {" Somme Errur has occured"}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseAlert} variant="contained">Okey</Button>
      </DialogActions>
    </Dialog>
  </div>
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
        subheader={props.createdAt}
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
        <Dialog title={"Supprimer cette Offre?"}
          text={"Après avoir supprimé cette offre, vous ne pouvez pas la récupérer, souhaitez-vous continuer ?"}
          child={<IconButton  onClick={() => { deletOffer(props.id)}}  sx={{ marginRight: 2 }} aria-label="Delete">
            <Delete />  
          </IconButton>} 
          />
          <Link to={`/offers/${props.id}`}>
        <Button  sx={{ marginRight: 2 }} variant="outlined" onClick={() => { }} >Voir Plus</Button>
        </Link>
        <Button  sx={{ marginRight: 2 }} variant="outlined" onClick={() => { alert('clicked'); }} >Editer</Button>
       <ResponsiveIConButton/>
      </CardActions>
    </Card>
    </div>
  );
      };
export default Offer;