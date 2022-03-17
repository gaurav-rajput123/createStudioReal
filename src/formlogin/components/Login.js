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


    e.preventDefault()
    axios({
      url: 'http://13.233.142.106:8080/signin',
      data: {
        email: email,
        // fullName: name,
        password: password
      },
      method: "POST"
    }).then(res => {
      console.log(res.data)
      if (res.data.isAuthenticated == true) {
        userScope.setUser(true)
        localStorage.setItem("user", JSON.stringify(res.data.userObj))
      } else {
        console.log(res)
      }
    }).catch(err => console.log('error', err))
  }
  return (

    <Grid container sx={{ width: "auto" }}>
      <form >
        <Grid item xs={9} sx={{ margin: "40px 0 20px 0 " }}>
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

        <Grid xs={3} />
        <Grid item xs={9}>

          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              Width="90%"
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
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#660000",
              borderRadius: '0px',
              marginTop:"15px",
              padding: '10px 15px'
            }}
            onClick={(e) => onSubmit(e)}>Sign In</Button>
            <div style={{marginTop : "40px",marginLeft:"0px"}}>
          <Link sx={{ color: "#660000",  textDecoration: "none", fontSize: "14px" }}>Forgot Password</Link>
          </div>
        </Grid>
        <Grid xs={4} />
        <Grid item xs={6} sx={{ margin: "20px" }}>

        </Grid>

        <Grid xs={12} sx={{ position: 'absolute', bottom: 0, right: 0 }}>
          <img src={img} width="250px" height={"105px"} />
        </Grid>
      </form>
    </Grid>

  )
}