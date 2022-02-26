import React from "react";
import { Typography, Button, Grid, TextField, Link } from "@mui/material";
import PasswordBox from "./PasswordBox";
import img from './crest.png'
import { NavLink } from "react-router-dom";


export default function Login() {

    const handleClick = ()=> {
        alert("path not set")
    }
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
           <Grid  item xs={6} sx={{marginTop:"30px", marginBottom:"20px"}}>
           <NavLink to={'/land'}style={{
              textDecoration: "none"
           }}><Button variant="contained" sx={{backgroundColor:"#660000", borderRadius:'0px', padding:'10px 30px'}} >Sign In</Button></NavLink>
                <Link sx={{color:"#660000", marginLeft: "12px", textDecoration: "none"}}>Forgot Password</Link>
           </Grid>
           <Grid xs={4} />
      <Grid item xs={6} sx={{ marginBottom: "20px" }}>
        <Link
          sx={{
            color: "black",
            fontSize: "20px",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Or sign in with:
        </Link>
      </Grid>

      <Grid xs={4} />

      <Grid container item xs={8}>
      <Grid item xs={6} sx={{ marginTop: "10px" }} sx={{
          padding: "4px"
      }}>
        <NavLink
          to={"/"}
          style={{
            textDecoration: "none",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000000",
              borderRadius: "0px",
              height: "100%",
              width: "100%",
            }}
            onClick={()=>{
                handleClick()
            }}
          >
            Apple
          </Button>
        </NavLink>
      </Grid>

      <Grid item xs={6}  sx={{
        padding: "4px"
    }}>
        <NavLink
          to={"/"}
          style={{
            textDecoration: "none",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1877f2",
              borderRadius: "0px",
              height: "100%",
              width: "100%",
            }}
            onClick={()=>{
                handleClick()
            }}
          >
            Facebook
          </Button>
        </NavLink>
      </Grid>

      <Grid item xs={6}  sx={{
        padding: "4px"
    }}>
        <NavLink
          to={"/"}
          style={{
            textDecoration: "none",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#4285f4",
              borderRadius: "0px",
              height: "100%",
              width: "100%",
            }}
            onClick={()=>{
                handleClick()
            }}
          >
            Google
          </Button>
        </NavLink>
      </Grid>
      <Grid item xs={6}  sx={{
        padding: "4px"
    }}>
        <NavLink
          to={"/"}
          style={{
            textDecoration: "none",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2f2f2f",
              borderRadius: "0px",
              height: "100%",
              width: "100%",
            }}
            onClick={()=>{
                handleClick()
            }}
          >
            Microsoft
          </Button>
        </NavLink>
      </Grid></Grid>
           <Grid xs={12} sx={{position: 'absolute', bottom: 0, right: 0}}>
               <img src={img} width="250px" height={"105px"}/>
           </Grid>

           

           
        
        </Grid>

    )
}