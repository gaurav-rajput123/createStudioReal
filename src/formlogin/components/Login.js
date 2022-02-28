import React,{useContext, useState} from "react";
import { Typography, Button, Grid, TextField, Link, InputLabel, OutlinedInput, IconButton, InputAdornment, FormControl } from "@mui/material";
import PasswordBox from "./PasswordBox";
import img from './crest.png'
import { NavLink, useNavigate } from "react-router-dom";
import { Visibility } from "@mui/icons-material";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from "axios";
import { userContext } from "../../App";
export default function Login() {
  const navigate = useNavigate();
  const userScope = useContext(userContext)
  const [email,setEmail]=useState("");
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

    const handleClick = ()=> {
        alert("path not set")
    }

    const onSubmit=(event)=>{
      // event.preventDefault();
      // axios({
      //   url:'http://localhost:8080/user/login',
      //   method:'POST',
      //   data:{
      //     username:email,
      //     password:password
      //   }
      // })
      // .then((response) => {
      //     console.log(response)
      //     if(response.data.accessToken !== undefined){
      //       navigate('/land')
      //     }else{
      //       alert('Invalid Credentials')
      //     }
      //   })
      if(email === "academics@crestbellsupport.com" && password === "Academics@123"){
        userScope.setUser(true)
      }else{
        alert("Invalid Credentials")
      }}
    return(

        <Grid container sx={{width:"auto"}}>
          <form onSubmit={onSubmit}>
           <Grid item xs={8} sx={{marginBottom:"20px"}}>
           <FormControl fullWidth variant="outlined">
           <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
          <OutlinedInput
          fullWidth
            id="outlined-adornment-password"
            label="Email"
            onChange={event=>setEmail(event.target.value)}
            value={email}
            
          />
             </FormControl>
           </Grid>
           
            <Grid xs={4}/>
           <Grid item xs={8}>
            
           <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
          fullWidth
            id="outlined-adornment-password"
            label="password"
            onChange={event=>setPassword(event.target.value)}
            type={showPassword ? 'text' : 'password'}
            value={password}
            
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={()=>{setShowPassword(true)}}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            
          />
          </FormControl>
           </Grid>
           <Grid xs={4}/>
           <Grid  item xs={6} sx={{marginTop:"30px", marginBottom:"20px"}}>
           {/* <NavLink to={'/land'}style={{
              textDecoration: "none"
           }}> */}
             <Button
             type="submit"
              variant="contained" 
              sx={{backgroundColor:"#660000", 
              borderRadius:'0px', 
              padding:'10px 15px'}} >Sign In</Button>
             {/* </NavLink> */}
              <Link sx={{color:"#660000", marginLeft: "8px", textDecoration: "none",fontSize:"14px"}}>Forgot Password</Link>
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

           

           
           </form>
        </Grid>

    )
}