import React from "react";
import { Typography, Button, Grid, TextField, Link } from "@mui/material";
import PasswordBox from "./PasswordBox";
import img from './crest.png'
import { NavLink } from "react-router-dom";


export default function Login() {
    return(

        <Grid container sx={{width:"auto"}}>
           <Grid item xs={8} sx={{marginBottom:"20px"}}>
            <TextField fullWidth label="Username or Email" id="fullWidth" />
           </Grid>
            <Grid xs={4}/>
           <Grid item xs={8}>
            <PasswordBox/>
           </Grid>
           <Grid xs={4}/>
           <Grid  item xs={6} sx={{marginTop:"10px"}}>
           <NavLink to={'/user'}><Button variant="contained" sx={{backgroundColor:"#660000", borderRadius:'0px'}} >Sign In</Button></NavLink>
                <Link sx={{color:"#660000", marginLeft: "12px"}}>Forgot Password</Link>
           </Grid>
           <Grid xs={12} sx={{position: 'absolute', bottom: 0, right: 0}}>
               <img src={img} width="250px" height={"105px"}/>
           </Grid>

           

           
        
        </Grid>

    )
}