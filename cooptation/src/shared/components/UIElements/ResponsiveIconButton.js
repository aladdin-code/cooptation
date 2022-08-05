import React from "react";

import {   PersonAdd } from "@mui/icons-material";
import {
  Button,
} from "@mui/material";

import  "./ResponsiveIConButton.css";
 

const ResponsiveIConButton = props => {
    return (
        <Button variant="contained" endIcon={<PersonAdd />}>
        <div class="text-responsive">
            Recommander
          </div>
      </Button>
    );
}

export default ResponsiveIConButton;