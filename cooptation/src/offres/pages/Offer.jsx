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


import './Offer.css'
import ResponsiveIConButton from '../../shared/components/UIElements/ResponsiveIconButton';
import Slide from '@mui/material/Slide';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Offer = props => {

  const { user } = useContext(UserContext);

  /*
  ^ open The decission Dialog , Delete or Not
  */
  const [openAlert, setOpenAlert] = React.useState(false);
  const handleOpenAlert = () => {
    console.log("Oppppeeeeeeen   aleeerttttt ");
    setOpenAlert(true);
  };
  const handleCloseAlert = () => {
    console.log("CCCLLLLLLLOOOOOOOOOOOSEEE ALERT");
    setOpenAlert(false);
  };
  const [openErrorAlert, setOpenErrorAlert] = React.useState(false);
  const handleOpenErrorAlert = () => {
    console.log("Oppppeeeeeeen   aleeerttttt ");
    setOpenErrorAlert(true);
  };
  const handleCloseErrorAlert = () => {
    console.log("CCCLLLLLLLOOOOOOOOOOOSEEE ALERT");
    setOpenErrorAlert(false);
    setOpenAlert(false);
  };
    /*
  ^ open The Erreur Dialog , Delete or Not
  */
  const deletOffer = id => {
  console.log(".............. DElete is caled with the following ID");
  console.log(id);
    Axios.delete("http://localhost:5000/api/offer/deleteOne", {
      data: {
        _id: id
      },
    }
    ).then((response) => {
        let success = response.data;
        if (success === "success") {
          console.log("Reached Success");
           handleCloseAlert();
             window.location.reload();
        } else {
          console.log("not success !! Else Is reached ")
          openErrorAlert()
          // window.location.reload();
        }
      }).catch(
         (error) => {
          handleOpenErrorAlert()
         }
      )
      ;
  }
  return (
    <div>
      <div>
        
        <Dialog
          open={openErrorAlert}
          onClose={handleCloseErrorAlert}
          aria-labelledby="error-alert-dialog-title"
          aria-describedby="error-alert-dialog-description"
        >
          <DialogTitle id="error-alert-dialog-title">
            {"Erreur !"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="error-alert-dialog-description">
              {" Somme Errur has occured"}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseErrorAlert} variant="contained">Okey</Button>
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
          {
            // delete this offer dialog
            user.user.isAdmin? <IconButton  onClick= {handleOpenAlert} sx={{ marginRight: 2 }} aria-label="share">
            <Delete />
          </IconButton> :  null
          }
           
<Dialog
        open={openAlert}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseAlert}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Supprimer cette Offre?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          {"Après avoir supprimé cette offre, vous ne pouvez pas la récupérer, souhaitez-vous continuer ?"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button  onClick={handleCloseAlert}>Annuler</Button>
          <Button color='error' onClick ={() => deletOffer(props.id) }>Supprimer</Button>
        </DialogActions>
      </Dialog>
          <Link to={`/offers/${props.id}`}>
            <Button sx={{ marginRight: 2 }} variant="outlined" onClick={() => { }} >Voir Plus</Button>
          </Link>
          {
            // delete this offer dialog
            user.user.isAdmin?  <Button sx={{ marginRight: 2 }} variant="outlined" onClick={() => { alert('clicked'); }} >Editer</Button> :   <ResponsiveIConButton />
          }


         
         
        </CardActions>
      </Card>
    </div>
  );
};
export default Offer;