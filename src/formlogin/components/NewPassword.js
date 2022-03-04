import React,{useState} from "react";
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Grid,Paper,  TextField, Button, Typography,Link, IconButton, FormControl, InputLabel } from '@mui/material';
import VectorNew from "../components/VectorNew.png";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';





const NewPassword=() =>  {

    const [password,setPassword]=useState("");
    const [showPassword, setShowPassword] = React.useState(false);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    
   


    const paperStyle={padding :20,height:'80vh',width:"max-content", margin:"20px auto"}


    const navigate = useNavigate();
    const [code,setCode]=useState("");
    const location = useLocation();
   if(location.state!=null){
    console.log(location.state.user.username)
   }

   const onSubmit=event=>{
    event.preventDefault();
    console.log(code);
    axios({
        url:'http://localhost:8080/user/confirm',
        method:'POST',
        data:{
        username:location.state.user.username,
        code:code
        }
    })
    .then(
        (response) => {
            console.log(response)
        if(response.data==="SUCCESS"){
            navigate('/');
        }
        }
    );
    }
    return(
        <Paper elevation={10} style={paperStyle}>
            <form onSubmit={onSubmit}>
            <Grid align='center'>
               
                
                <div align="center">
                <img src={VectorNew} alt="image" style={{width: "-webkit-fill-available"}}/>
                </div>
                <h2>New Password</h2>
                <h6>Set new password for your account</h6>
            </Grid>
            <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
            fullWidth
            id="outlined-adornment-password"
            label="password"
            onChange={event=>setPassword(event.target.value)}
            type={showPassword ? 'text' : 'password'}
            value={password}
            fullWidth
            
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

            
            <Button type='submit'  variant="contained" style={{backgroundColor:"#630000", color:"white", height:"56px",fontSize:"20px", marginTop:"10px", marginBottom:"10px"}} fullWidth>CONFIRM</Button>
            <Grid align="center" >
            <Typography > Incorrect Password?
                 <Link href="#" >
                    Set Again
                 </Link>
            </Typography>
            </Grid>
            </form>
        </Paper>
)
}

export default NewPassword
    