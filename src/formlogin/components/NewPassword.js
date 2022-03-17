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
    
   


<<<<<<< HEAD
    const paperStyle={padding :20,height:'80vh',width:"max-content", margin:"20px auto"}
=======
    const paperStyle={padding :50,height:'80vh',width:"min-content", margin:"20px auto"}
>>>>>>> 3a046d74c30e323d3e38b7caff97d298ad915909


    const navigate = useNavigate();
    const [code,setCode]=useState("");
<<<<<<< HEAD
    const location = useLocation();
   if(location.state!=null){
    console.log(location.state.user.username)
=======
    const [newpassword,setNewpassword]=useState("");
    const location = useLocation();
   if(location.state!=null){
    console.log(location.state.user)
>>>>>>> 3a046d74c30e323d3e38b7caff97d298ad915909
   }

   const onSubmit=event=>{
    event.preventDefault();
<<<<<<< HEAD
    console.log(code);
    axios({
        url:'http://localhost:8080/user/confirm',
        method:'POST',
        data:{
        username:location.state.user.username,
        code:code
=======
    axios({
        url:'http://13.233.142.106:8080/user/forgotpasswordchange',
        method:'POST',
        data:{
        username:location.state.user,
        code:code,
        newPassword:newpassword
>>>>>>> 3a046d74c30e323d3e38b7caff97d298ad915909
        }
    })
    .then(
        (response) => {
<<<<<<< HEAD
            console.log(response)
        if(response.data==="SUCCESS"){
            navigate('/');
        }
=======
        if(response.data==="CodeMismatchException"){
          alert("Enter a Valid Code")
        }
        else if(response.data==="LimitExceededException"){
          alert("Limit Exceeded")
        }
        else if(response.data==="InvalidPasswordException"){
          alert("Enter a valid Password")
        }
        else if(response.data==="SUCCESS"){
            navigate('/');
        }
        else{
          alert("something went wrong")
        }
>>>>>>> 3a046d74c30e323d3e38b7caff97d298ad915909
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
<<<<<<< HEAD
=======
            <TextField 
            value={code}
            onChange={event=>setCode(event.target.value)}
            variant="outlined" label='Verify OTP' fullWidth required/>
>>>>>>> 3a046d74c30e323d3e38b7caff97d298ad915909
            <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
            fullWidth
            id="outlined-adornment-password"
            label="password"
<<<<<<< HEAD
            onChange={event=>setPassword(event.target.value)}
            type={showPassword ? 'text' : 'password'}
            value={password}
            fullWidth
            
=======
            onChange={event=>setNewpassword(event.target.value)}
            type={showPassword ? 'text' : 'password'}
            value={newpassword}
>>>>>>> 3a046d74c30e323d3e38b7caff97d298ad915909
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
<<<<<<< HEAD

            
            <Button type='submit'  variant="contained" style={{backgroundColor:"#630000", color:"white", height:"56px",fontSize:"20px", marginTop:"10px", marginBottom:"10px"}} fullWidth>CONFIRM</Button>
            <Grid align="center" >
            <Typography > Incorrect Password?
                 <Link href="#" >
                    Set Again
                 </Link>
            </Typography>
            </Grid>
=======
            <Button type='submit'  variant="contained" style={{backgroundColor:"#630000", color:"white", height:"56px",fontSize:"20px", marginTop:"10px", marginBottom:"10px"}} fullWidth>CONFIRM</Button>
>>>>>>> 3a046d74c30e323d3e38b7caff97d298ad915909
            </form>
        </Paper>
)
}

export default NewPassword
    