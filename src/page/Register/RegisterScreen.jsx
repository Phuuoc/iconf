import { Grid } from "@mui/material";
import React from "react";
import InputComponent from "../../components/Input.components";
import "./register.css";


export default function RegisterScreens() {
    return ( 
    <Grid className="wrap-register">
        <span className="content">Welcome to Registration Page</span>
        <Grid  container spacing={0.5}>
        <Grid className="sub-content" item lg={4}>
            <span className="mr-4">Home</span>
            <span className="mr-4">News</span>
            <span>Information</span>
            <span>More</span>

        </Grid>
        </Grid>
        <Grid className="wrap1">
            <InputComponent className="content1"/>
        </Grid>
    </Grid>
    );
}