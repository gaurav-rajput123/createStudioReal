import React from "react";
import Typography from '@mui/material/Typography';
import { Paper, Grid } from "@mui/material";
import logo from '../MRSSPTU.png'



export default function Ardss() {
    return (
        <Grid container sx={{background: "#660000",height:"100%"}}>
            <img src={logo} alt="as" style={{
          position: "unset",
          top: 0,
          bottom: 0,
          padding:"0px",
          height: "100px",
          width: "100px"
        }}/>

            <Typography  color={"white"}  fontWeight={"bold"}  fontSize={"50px"} fontFamily= {"'Poppins', sans-serif"} marginLeft={"15%"}>
           Start <br/>
           L-Earning<br/>
           With MRSPTU
            </Typography>
            
            </Grid>
    );
}

