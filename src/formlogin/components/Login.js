import React,{useContext, useState} from "react";
import { Typography,Box, Button, Grid, TextField, Link, InputLabel, OutlinedInput, IconButton, InputAdornment, FormControl } from "@mui/material";
import PasswordBox from "./PasswordBox";
import img from './crest.png'
import { NavLink, useNavigate } from "react-router-dom";
import { Visibility } from "@mui/icons-material";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from "axios";
import { userContext } from "../../App";


export default function Login() {
  const userScope = useContext(userContext)
  const navigate = useNavigate();
  const [user, setUser] = useState()
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
          // axios.get('http://localhost:8080/user/currentuser').then((resp)=>{
          //   const user=resp.data;
          //   console.log(resp.data);
          //   user.getSession((err,session)=>{
          //     if(err){
          //         console.log(err)
          //     }
          //     else{
          //         console.log(session.isValid());
          //       }
          //     })
          //   })
          // })
          // console.log(response)
          // navigate("/land")
          console.log(response)
          if(response.data==="UserNotConfirmedException"){
            navigate("/verify",{state:{user:email}})
          }
          else if(response.data.accessToken !== undefined){
            setUser(response.data)
            userScope.setUser(true)
            localStorage.setItem('user', response.data)
            // navigate('/')
          }else{
            alert('Invalid Credentials')
          }
        })}

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
              sx={{backgroundColor:"#660000", borderRadius:'4px',textTransform: 'none'}} >Sign In</Button>
              <Button onClick={handleForgotPassword} fullWidth sx={{color:"#660000",textTransform: 'none'}}>Forgot Password</Button>
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