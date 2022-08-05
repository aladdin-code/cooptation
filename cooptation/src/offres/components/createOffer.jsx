import * as React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    CardHeader,
} from "@mui/material";
import {
    CenterBtn,
} from '../../shared/components/Navigation/NavbarElements';
 
import ShowCreateOffer from './showCreateOffer';

const CreateOffer = props => {
    return (
        <div>
            <Card sx={{ marginLeft: 2, marginRight: 2, marginTop: 4 }}>
 
                <CardContent style={{ height: '6rem' }}>
                    <div>
                    <div class=" center">
                        <CardHeader
                            title={"Nouvelle Offer"}
                            subheader={"Créez une nouvelle offre et partagez-la maintenant."}
                        />
                    </div>    
          </div>
                </CardContent>    
                <div class="center" >
                    <ShowCreateOffer
                        child={
                                <CenterBtn >Creer Offer</CenterBtn>
                        }
                    />
                    </div>
            </Card>
        </div>
    );
}; 
export default CreateOffer; 