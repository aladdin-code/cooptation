import React from 'react';
import { useContext,  useState } from 'react';
import { UserContext } from "../../shared/context/AuthContext";
import './signinpage.css'
//import svg from '../image/svg.svg'
import animation from './InputGroup';
import Axios from '../../api/axios';
import InputGroup from './InputGroup';
import { Link, useNavigate } from 'react-router-dom';
import { ButtonGroup } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
function SigninPage() {
  // the context

  const { user, setUser } = useContext(UserContext);
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
  // const [form, setForm] = useState({});
  // const onChangeHandler = (e) => {
  //     setForm({
  //       ...form,
  //       [e.target.name]: e.target.value,
  //     });
  //   };
  //   const onSubmitHandler = (e)=>{
  //     e.preventDefault();
  //     axios.post('/auth', form)
  //     .then((res) => {
  //         setForm(res.data[0]);
  //     })
  //   }
  // useEffect( ()=> {
  //     animation.animateCvFile()
  // }, [])
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await Axios.post(
      "/api/user/login", form
    ).then((res) => {
      console.log("Successs login");

      console.log(res);
      console.log("Successs login");
        changeErrorDescriptionHandler(" bienvenue sur votre espace utilisateur");
      changeDialogTitleHandler("Succès");
      // vhange context then navite
      const user = res.data;
      setUser(user);
      // 
      console.log("uuuuuseeer::::" , user)
      navigate("/offers");
      console.log(res)
    }).catch((error) => {
      console.log("RRRRRRRRRRRRRRRRRRRRRRRRRR");
      console.log(error.response.data);
      console.log("RRRRRRRRRRRRRRRRRRRRRRRRRR");
        changeErrorDescriptionHandler(" Email ou mot de passe incorrect");
       changeDialogTitleHandler("Success");
                }
    ); ////
    ///
  }
  ////
  return (
   <>
    <form className="recForm" onSubmit={onSubmitHandler}  >
      <h5>S'il vous plait connecter-vous pour acceder au espace utilisateur </h5>
      <InputGroup type="text" placeholder="Email" name="email" onChangeHandler={onChangeHandler} />
      <InputGroup type="text" placeholder="Mot de passe" name="password" onChangeHandler={onChangeHandler} />
    <input   variant="outlined" onClick={handleClickOpen} type="submit" id="submitBtn" value="se connecter "  />
       {/* <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button>  */}
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
          <Button  onClick={handleClose} autoFocus >
            OKk
          </Button>
        </DialogActions>
      </Dialog>
      <Link to="/invitpage">
        <ButtonGroup  type="button">
          S'inscrire 
        </ButtonGroup>
      </Link>
    </form>
</>
  )
}
export default SigninPage;
