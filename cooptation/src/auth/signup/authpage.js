import React from 'react';
import { useEffect, useState, } from 'react';
import './authStyle.css'
//import svg from '../image/svg.svg'
import animation from './animationClass';
import axios from 'axios';
import InputGroup from './InputGroup';
import { useNavigate } from 'react-router-dom';
import { ButtonGroup } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
function AuthPage() {
  const [salarie, setSalarie] = React.useState('');
  const handleChange = (event) => {
    setSalarie(event.target.value);
  };
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [errorDescription, changeErrorDescription] = React.useState("");
  const changeErrorDescriptionHandler = txt => {
    changeErrorDescription(txt);
  }
  const [dialogTitle, changeDialogTitle] = React.useState("");
  const changeDialogTitleHandler = txt => {
    changeDialogTitle(txt);
  }
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  // const test = {
  //   "firstName": "Dhia",
  //   "lastName": "Mejri",
  //   "email": "x@gmail.com",
  //   "password": "0000",
  //   "sexe": "Homme",
  //   "isVerified" : true,
  //   "age": 15,
  //   "profession": "Network Engineer",
  //   "admin" : true
  // }
  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await axios.post(
      "http://localhost:5000/api/user/signup", form,Select
    ).then((res) => {
      // changeErrorDescriptionHandler(" bienvenue sur votre espace utilisateur");
      // changeDialogTitleHandler("Succès");
      navigate("/signin");
      console.log(res)
    }).catch((error) => {
      console.log("RRRRRRRRRRRRRRRRRRRRRRRRRR");
      console.log(error.response.data);
      console.log("RRRRRRRRRRRRRRRRRRRRRRRRRR");
        changeErrorDescriptionHandler("utilisateur deja existant ! OU utilisateur n'est pas invité !");
      changeDialogTitleHandler("Success");
                }
    ); ////
    // console.log(data)
    // console.log(form)
    // axios.get('/api/offer')
    // .then((res) => {
    //     setForm(res);
    // })
  }
  // useEffect( ()=> {
  //     animation.animateCvFile()
  // }, [])
  return (
    <form className="recForm" onSubmit={onSubmitHandler} >
      <h5>S'il vous plait register vous pour acceder au espace utilisateur </h5>
      <InputGroup type="text" placeholder="Nom " name="lastName" onChangeHandler={onChangeHandler} />
      <InputGroup type="text" placeholder="Prenom" name="firstName" onChangeHandler={onChangeHandler} />
      <InputGroup type="text" placeholder="Email" name="email" onChangeHandler={onChangeHandler} />
      <InputGroup type="text" placeholder="mot de passe" name="password" onChangeHandler={onChangeHandler} />
      <input type="text" placeholder="confirmer le mot de passe" name="password"/>
      <Box sx={{ minWidth: 170 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Salarié</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={salarie}
          label="Salarié"
          onChange={handleChange}
        >
          <MenuItem value={10}>Porté</MenuItem>
          <MenuItem value={20}>Non Porté</MenuItem>
        </Select>
      </FormControl>
    </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {dialogTitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          {errorDescription}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus >
            OKk
          </Button>
        </DialogActions>
      </Dialog>
      <input variant="outlined" onClick={handleClickOpen} type="submit" id="submitBtn" value="registrer " />
    </form>
  )
}
export default AuthPage;