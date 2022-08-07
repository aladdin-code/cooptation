import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Axios from "axios";
import FormData from "form-data";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  // BoldLink,
  BoxContainer,
  Input,
  MutedLink,
} from "./common";
import { Marginer } from "./marginer";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function ShowCreateOffer(props) {
  // Shwo alert Dialog

  const [errorDescription, changeErrorDescription] = React.useState("");

  const changeErrorDescriptionHandler = txt => {

    changeErrorDescription(txt);

  }
  const [dialogTitle, changeDialogTitle] = React.useState("");

  const changeDialogTitleHandler = txt => {

    changeDialogTitle(txt);

  }
  const [error, setError] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);

  const handleClickOpenAlertSuccess = () => {
    setError(false);
    setOpenAlert(true);
  };
  const handleClickOpenAlertError = () => {
    setError(true);
    setOpenAlert(true);
  };
  const handleCloseAlert = () => {
    if (error) {
      changeErrorDescriptionHandler("");
      changeDialogTitleHandler("");
      setOpenAlert(false);
    } else {
      changeErrorDescriptionHandler("");
      changeDialogTitleHandler("");
      setOpenAlert(false);
      setOpen(false);
      window.location.reload();
    };

  };
  //
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    modedemploi: '',
    expYears: '',
    requiredSkills: '',
    responsabilities: '',
    description: '',
    entreprise: '',
    companyDescription: '',
    startDate: '',
    duration: '',
  });

  const [startDate, setStartDate] = useState(new Date());

   
  const createOffer = (event) => {
    event.preventDefault();
    console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPP");
    console.log(formData);
    console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPP");
    const formDataF = new FormData();
    formDataF.append("image", selectedFile);
    formDataF.append("title", formData.title);
    formDataF.append("modedemploi", formData.modedemploi);
    formDataF.append("expYears", formData.expYears);
    formDataF.append("requiredSkills", formData.requiredSkills);
    formDataF.append("responsabilities", formData.responsabilities);
    formDataF.append("description", formData.description);
    formDataF.append("entreprise", formData.entreprise);
    formDataF.append("companyDescription", formData.companyDescription);
    formDataF.append("duration", formData.duration);
    console.log("DDDDDDDDDDDDDDDDDDDDDD");
 console.log(startDate);
    console.log("DDDDDDDDDDDDDDDDDDDDDD");
    formDataF.append("startDate", startDate);
    Axios.post("http://localhost:5000/api/offer/addOffer", formDataF, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    )
      .then((response) => {

        console.log("OOOOOOOOOOOOOOOOOOOOOOO");
        console.log(response);
        console.log("OOOOOOOOOOOOOOOOOOOOOOO")



        changeErrorDescriptionHandler("Offre créée avec succès !");
        changeDialogTitleHandler("Success");
        handleClickOpenAlertSuccess();
      }).catch((error) => {

        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRR");
        console.log(error.response.data);
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRR");

        console.log("IIIIIIIIIIIIIIIIIIII");
        console.log(error.response.data.error);
        if(error.response.data.error === "User Not Invited !")  {
// Tkharijlo Pop
        } else  if (error.response.data.error === "User Not Invited !")
        console.log("IIIIIIIIIIIIIIIIIIII");
        //  
        changeErrorDescriptionHandler(error.response.data.error);
        changeDialogTitleHandler("Erreur !");
        handleClickOpenAlertError();
      })
      ;
  };


  /*
 & Title Change
 */
  const handleChange = (event) => {
    const { value } = event.target;
    console.log(event);
    setFormData({
      ...formData,
      title: value,
    });
  }
  /*
& Duration Change
*/
  const handleDurationChange = (event) => {
    const { value } = event.target;
    console.log(event);
    setFormData({
      ...formData,
      duration: value,
    });
  }
 
  /*
 & Experience change
 */
  const handleExperChange = (event) => {
    const { value } = event.target;
    console.log(event);
    setFormData({
      ...formData,
      expYears: value,
    });
  }
  /*
 & offer Description
 */
  const handleDescriptionChange = (event) => {
    const { value } = event.target;
    console.log(event);
    setFormData({
      ...formData,
      description: value,
    });
  }
  /*
  Todo Mode Skills
  */
  const handleSkillsChange = (event) => {
    const { value } = event.target;
    console.log(event);
    setFormData({
      ...formData,
      requiredSkills: value,
    });
  }
  /*
   Todo Mode Demploi
   */
  const handleModeDemploiChange = (event) => {
    const { value } = event.target;
    console.log(event);
    setFormData({
      ...formData,
      modedemploi: value,
    });
  }
  /*
 Todo responsabilities
 */
  const handleResponsabilitiesChange = (event) => {
    const { value } = event.target;
    console.log(event);
    setFormData({
      ...formData,
      responsabilities: value,
    });
  }
  /*
 Todo Company Name
 */
  const handleCompanyNameChange = (event) => {
    const { value } = event.target;
    console.log(event);
    setFormData({
      ...formData,
      entreprise: value,
    });
  }

  /*
  Todo Company Name
  */
  const handleCompanyDescriptionChange = (event) => {
    const { value } = event.target;
    console.log(event);
    setFormData({
      ...formData,
      companyDescription: value,
    });
  }
  const [open, setOpen] = React.useState(false);
  const { child } = props;
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>

      <div>
        <Dialog
          open={openAlert}
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

            <Button onClick={handleCloseAlert} variant="contained">Okey</Button>

          </DialogActions>
        </Dialog>
      </div>
      <div class="center" style={{ "height": "80px", "width": "160px" }} >
        <div onClick={handleClickOpen}>
          {child}
        </div>
        <Dialog
          style={{ "height": "85%", "width": "100%" }}
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>
            {"Creer Une Offer"}
          </DialogTitle>
          <Divider />
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <BoxContainer>
                <h5 >Titre</h5>
                <Input value={formData.title} onChange={handleChange} id="titre" type="text" placeholder="Titre" />
                <Marginer direction="vertical" margin={5} />
                <h5 >Mode D'emploi</h5>
                <Input value={formData.modedemploi} onChange={handleModeDemploiChange} id="desc" type="text" placeholder="Mod D'emploi" />
                <Marginer direction="vertical" margin={5} />
                <h5 >Periode Du travail</h5>
                <Input value={formData.duration} onChange={handleDurationChange} id="desc" type="text" placeholder="Période de mission" />
                <Marginer direction="vertical" margin={5} />
                <h5 >Date de début prévue</h5>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {setStartDate(date);  }}
                  locale="fr-FR"
                  isClearable
                  placeholderText="Choisissez la date !" />
                <Marginer direction="vertical" margin={5} />
                <h5 >Experience</h5>
                <Input value={formData.expYears} id="experience" onChange={handleExperChange} type="text" placeholder="Experience recherchee" />
                <Marginer direction="vertical" margin={5} />
                <h5 >Competence</h5>
                <textarea value={formData.requiredSkills} onChange={handleSkillsChange} name="Text1" cols="40" rows="5" placeholder="Competence  Rechercher" ></textarea>
                <Marginer direction="vertical" margin={5} />
                <h5 >Responsabilte</h5>
                <textarea value={formData.responsabilities} onChange={handleResponsabilitiesChange} name="Text1" cols="40" rows="5" placeholder="Responsabiltee" ></textarea>
                <Marginer direction="vertical" margin={5} />
                <h5 >Description Du l'offre</h5>
                <textarea value={formData.description} onChange={handleDescriptionChange} name="Text1" cols="40" rows="5" placeholder="Ddescription Du L'offre " ></textarea>
                <Marginer direction="vertical" margin={5} />
                <h5 >Nom Du Lentreprise</h5>
                <Input value={formData.entreprise} onChange={handleCompanyNameChange} type="text" placeholder="Non De L'ntreprise" />
                <Marginer direction="vertical" margin={5} />
                <h5 >Description D'entreprise</h5>
                <textarea value={formData.companyDescription} onChange={handleCompanyDescriptionChange} name="Text1" cols="40" rows="5" placeholder="Description de l'entreprise " ></textarea>
                <Marginer direction="vertical" margin={5} />
                <div class="ta-left mT10">
                  <label>Image</label>  <Input
                    onChange={(e) => {
                      setSelectedFile(e.target.files[0]);
                      console.log(e.target.files[0])
                    }} type="file" />
                </div>
                <MutedLink href="#">Format autorisé : PNG , GPG , Poids maximum : 2 Mo</MutedLink>
                <Marginer direction="vertical" margin="10em" />
              </BoxContainer>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Annuler</Button>
            <Button onClick={createOffer} variant="contained">Creer</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>


  );
}
