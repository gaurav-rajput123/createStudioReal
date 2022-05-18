import React,{useContext, useState} from "react";
import { Typography,Box, Button, Grid, TextField, Link, InputLabel, OutlinedInput, IconButton, InputAdornment, FormControl } from "@mui/material";
import PasswordBox from "./PasswordBox";
import img from './crest.png'
import { NavLink, useNavigate } from "react-router-dom";
import { Visibility } from "@mui/icons-material";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from "axios";

import { UserContext } from "../../Context";

export default function Login() {
  
  
  const navigate = useNavigate();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const contextUser = useContext(UserContext)

    const handleClick = ()=> {
        alert("path not set")
    }

    const onSubmit=(event)=>{
      event.preventDefault();
      axios({
        url:'https://api.keewesolutions.com/user/login',
        method:'POST',
        data:{
          username:email,
          password:password
        }
      })
      .then((response) => {
          console.log(response)
          if(response.data==="UserNotConfirmedException"){
            navigate("/verify",{state:{user:email}})
          }
          else if(response.data.accessToken !== undefined){
            let userData = response.data
            let newUserContext = {...contextUser}
            newUserContext.authenticated = true
            let newUser = {
              id: userData.idToken.payload['cognito:username'],
              email: userData.idToken.payload.email,
              idToken: userData.idToken.jwtToken,
              refreshToken: userData.refreshToken
            }
            newUserContext.user = newUser
            contextUser.setNewUser(newUserContext)
            
            let localStorageObject = JSON.stringify({
              isAuthenticated: true,
              user: newUser
            })
            localStorage.setItem("keewe.cmsStorage", localStorageObject)
            
            navigate('/')
          }else{
            alert('Invalid Credentials')
          }
        })
      }

        const handleForgotPassword=()=>{
          navigate('/forgotpassword')
        }
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
             <Box display="flex">
             <Button fullWidth
             type="submit"
              variant="contained" 
              sx={{backgroundColor:"#06213F", borderRadius:'4px',textTransform: 'none'}} >Sign In</Button>
              <Button onClick={handleForgotPassword} fullWidth sx={{color:"#06213F",textTransform: 'none'}}>Forgot Password</Button>
              </Box>
           </Grid>
           <Grid xs={4} />
      <Grid item xs={6} sx={{ marginBottom: "20px", visibility: 'hidden' }}>
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

      <Grid container item xs={8} sx={{visibility:"hidden"}}>
      <Grid item xs={6} sx={{
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
           </form>
        </Grid>

    )
}