import React from 'react';
import { useEffect,useState } from 'react';
import './invitpage.css'
//import svg from '../image/svg.svg'
import animation from './InputGroup';
import axios from 'axios';
import InputGroup from './InputGroup';
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


function InvitPage() {

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
      const onSubmitHandler = async (e)=>{
        e.preventDefault();
        

         await axios.post(
          "http://localhost:5000/api/invit/checkInvitation",form
        ).then((res)=>{
      //     changeErrorDescriptionHandler(" code validé avec succes !");
      // changeDialogTitleHandler("Success");
      
      navigate("/signup");
      
      console.log(res)

         
            
            
             
          }).catch((error) => {

            console.log("RRRRRRRRRRRRRRRRRRRRRRRRRR");
            console.log(error.response.data);
            console.log("RRRRRRRRRRRRRRRRRRRRRRRRRR");
            
              changeErrorDescriptionHandler(" code d'invitation incorrect ou cette invitation ne correspond a votre email!");
            changeDialogTitleHandler("Success");
            
                      }
      
           
      
            
              
                       
              
          ); ////
          
      }

    return (
    
    
    
    
      


        

            <form className="recForm" onSubmit={onSubmitHandler}  >

                <h5>S'il vous plait connecter-vous pour acceder au espace utilisateur </h5>

                <InputGroup type="text"  placeholder="Email" name="invitedEmail" onChangeHandler={onChangeHandler} />
                <InputGroup type="text" placeholder="Code d'invitation" name="code"onChangeHandler={onChangeHandler} />
                
                
                <input  variant="outlined" onClick={handleClickOpen} type="submit" className="btn btn-danger" id="submitBtn" value=" Valider " />

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
               
                 
                
            </form>
            
                
             
            
            
            

             
          
        
          
            


       
    )
}



export default InvitPage;