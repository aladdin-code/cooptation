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
import nodata from './nodata.png';
import ShowCreateOffer from './showCreateOffer';
const NoOffersCreateOne = props => {
    return (
        <div>
            <Card sx={{ marginLeft: 2, marginRight: 2, marginTop: 4 }}>
                <CardMedia>
                    <div class=" center">
                        <img src={nodata} alt="No Data " style={{ center: 'true', margin: 2, height: '95%', width: '200px' }} />
                    </div>
                </CardMedia>
                <CardContent style={{ height: '6rem' }}>
                    <div>
                    <div class=" center">
                        <CardHeader
                            title={"Aucune offre !"}
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
export default NoOffersCreateOne; 