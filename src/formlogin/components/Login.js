import React, { useContext, useState } from "react";
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
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClick = () => {

  }

  const onSubmit = (e) => {
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
    
 
    e.preventDefault()
  axios({
    url: 'https://api.keewesolutions.com/signin',
    data: {
      email: email,
      // fullName: name,
      password: password
    },
    method: "POST"
  }).then(res=>{
    console.log(res.data)
    if(res.data.isAuthenticated == true){
      userScope.setUser(true)
      localStorage.setItem("user", JSON.stringify(res.data.userObj))
    }else{
      console.log(res)
    }
    }).catch(err=>console.log('error', err))}
  return (

    <Grid container sx={{ width: "auto" }}>
      <form >
        <Grid item xs={8} sx={{ marginBottom: "20px" }}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
            <OutlinedInput
              fullWidth
              id="outlined-adornment-password"
              label="Email"
              onChange={event => setEmail(event.target.value)}
              value={email}

            />
          </FormControl>
        </Grid>

        <Grid xs={4} />
        <Grid item xs={8}>

          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              fullWidth
              id="outlined-adornment-password"
              label="password"
              onChange={event => setPassword(event.target.value)}
              type={showPassword ? 'text' : 'password'}
              value={password}

              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => { setShowPassword("authed") }}
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
        <Grid xs={4} />
        <Grid item xs={6} sx={{ marginTop: "30px", marginBottom: "20px" }}>
          {/* <NavLink to={'/land'}style={{
              textDecoration: "none"
           }}> */}
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#660000",
              borderRadius: '0px',
              padding: '10px 15px'
            }} 
            onClick={(e)=>onSubmit(e)}>Sign In</Button>
          {/* </NavLink> */}
          <Link sx={{ color: "#660000", marginLeft: "8px", textDecoration: "none", fontSize: "14px" }}>Forgot Password</Link>
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
          <Grid item xs={6} sx={{ marginTop: "10px", padding: "4px" }} >
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
                onClick={(e) => {
                  handleClick(e)
                }}
              >
                Apple
              </Button>
            </NavLink>
          </Grid>

          <Grid item xs={6} sx={{
            padding: "4px"
          }}>
            <a
              href={"https://www.facebook.com/"}
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
                onClick={() => {
                  handleClick()
                }}
              >
                Facebook
              </Button>
            </a>
          </Grid>

          <Grid item xs={6} sx={{
            padding: "4px"
          }}>
            <a
              href={"https://accounts.google.co.in"}
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
                onClick={() => {
                  handleClick()
                }}
              >
                Google
              </Button>
            </a>
          </Grid>
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
                  backgroundColor: "#2f2f2f",
                  borderRadius: "0px",
                  height: "100%",
                  width: "100%",
                }}
                onClick={() => {
                  handleClick()
                }}
              >
                Microsoft
              </Button>
            </NavLink>
          </Grid></Grid>
        <Grid xs={12} sx={{ position: 'absolute', bottom: 0, right: 0 }}>
          <img src={img} width="250px" height={"105px"} />
        </Grid>




      </form>
    </Grid>

  )
}