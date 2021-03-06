import React,{useState} from "react";
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Grid,Paper,  TextField, Button, Typography,Link } from '@mui/material';
import VectorNew from "../components/VectorNew.png"





const ForgotPassword=() =>  {

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
                <h2>Forgot Password</h2>
                <h6>Verification Code send on Email</h6>
            </Grid>
            <TextField 
            value={code}
            onChange={event=>setCode(event.target.value)}
            variant="outlined" label='Enter Email' fullWidth required/>
            <Button type='submit'  variant="contained" style={{backgroundColor:"#06213F", color:"white", height:"56px",fontSize:"20px", marginTop:"10px", marginBottom:"10px"}} fullWidth>SEND CODE</Button>
            <Grid align="center" >
            <Typography > Didn't receive code?
                 <Link href="#" >
                    Resend Again
                 </Link>
            </Typography>
            </Grid>
            </form>
        </Paper>
)
}

export default ForgotPassword
    