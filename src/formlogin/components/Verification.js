import React,{useState} from "react";
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Grid,Paper,  TextField, Button, Typography,Link } from '@mui/material';
import VectorNew from "../components/VectorNew.png"





const Verification=() =>  {

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}


    const navigate = useNavigate();
    const [code,setCode]=useState("");
    const location = useLocation();
   if(location.state!=null){
    console.log(location.state.user)
   }

   const onSubmit=event=>{
    event.preventDefault();
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
        if(response.data==="SUCCESS"){
            navigate('/land');
        }
        }
    );
    }
    return(
        <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
               
                <h2>Verification</h2>
                <div align="center">
                <img src={VectorNew} alt="image" style={{width: "-webkit-fill-available"}}/>
                </div>
            </Grid>
            <TextField variant="outlined" label='Verify OTP' placeholder='Enter username' fullWidth required/>
            <Button type='submit'  variant="contained" style={{backgroundColor:"#630000", color:"white", height:"56px",fontSize:"20px", marginTop:"10px", marginBottom:"10px"}} fullWidth>VERIFY</Button>
           
            
            
            <Grid align="center" >
            <Typography > Didn't receive OTP?
                 <Link href="#" >
                    Resend Again
                 </Link>
            </Typography>
            </Grid>
        </Paper>
    </Grid>
)
}

export default Verification
    