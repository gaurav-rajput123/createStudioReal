import React from "react";
import Typography from '@mui/material/Typography';
import { Paper, Grid } from "@mui/material";
import logo from '../MRSSPTU.png'



export default function Ardss() {
    return (
        <Grid container direction="column" sx={{background: "#660000",height:"100%"}}>
            <Grid item >
            <img src={logo} alt="as" style={{
          position: "unset",
          top: 0,
          bottom: 0,
          padding:"0px",
          height:"fit-content",
          width: "100px"

        }}/>
        </Grid>
        <Grid item lg={2} />
        <Grid item alignSelf="center">
               <Typography  alignSelf= "center" color={"white"}  fontWeight={"bold"}  fontSize={"50px"} fontFamily= {"'Poppins', sans-serif"}>
           Start <br/>
           L-Earning<br/>
           With MRSPTU
            </Typography>
            </Grid>
            
            </Grid>
    );
}

