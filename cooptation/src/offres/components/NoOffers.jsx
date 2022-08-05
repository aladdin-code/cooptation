import * as React from 'react';

import {
    Card,
    CardContent,
    CardMedia,
    CardHeader,
} from "@mui/material";
import nodata from './nodata.png';
const NoOffers = props => {
    return (
        <Card sx={{ marginLeft: 2 , marginRight: 2, marginTop: 4}}>
            <CardMedia>
                <div class=" center">
                    <img src={nodata} alt="No Data " style={{ center: 'true', margin: 2, height: '200px', width: '200px' }} />
                </div>
            </CardMedia>
            <CardContent style={{ height: '8rem' }}>
            <div class=" center">
                <CardHeader
                    title={"Aucune offre partagée pour l'instant !"}
                    subheader={"Visitez-nous plus tard pour de nouvelles offres."}
                />
            </div>
            </CardContent>
        </Card>
    );
};
export default NoOffers;