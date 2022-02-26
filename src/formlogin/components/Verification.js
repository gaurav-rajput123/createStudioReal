import React,{useState} from "react";
import {Card, Box, CardContent, Typography, Button} from "@mui/material";
import PasswordBox from "./PasswordBox";
import Vector from "./Vector.png";
import {useLocation} from 'react-router-dom';
import { TextField } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




export default function Verification() {
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
    <div style={{padding:"60px"}}>
        <form onSubmit={onSubmit}>
        <Card sx={{width:"500px", height:"600px" , marginLeft:"450px", marginBottom:"20px", borderRadius:"20px"}}>
            <Box sx={{ display:"flex", flexDirection: 'column', marginLeft:"190px", marginTop:"200px"}}>
               <CardContent sx={{ width:"200px" }}>
                 <div style={{marginTop:"-200px", marginLeft:"-140px"}}>
                   <img src={Vector} alt="image" />
                 </div>
                 <Typography component="div" variant="h5" style={{fontFamily:"'Poppins' , sans-serif", fontWeight:"bold", fontSize:"20px", marginLeft:"-10px"}}>
                 Verification
                 </Typography>
                 <Typography variant="subtitle1" color="text.secondary" component="div" style={{marginLeft:"-60px",marginTop:"-10px", fontFamily:"'Poppins' , sans-serif", fontSize:"15px"}}>
                 <p>
                 You will get an OTP via SMS
                 </p>
                </Typography>
               </CardContent>
            </Box>
            <TextField
            value={code} 
            onChange={event=>setCode(event.target.value)}
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
             />
            <Button
            type="submit"

             variant="contained" style={{width:"300px",height:"55px", padding:"10px", marginLeft:"100px", marginBottom:"30px", backgroundColor:"#4C0070"
             }}>Verify</Button>
            <Typography style={{fontFamily:" 'Poppins',sans-serif", color:"#00000099", marginLeft:"50px"}}>
               Didn't recieve the verification OTP ? <span style={{color:"#4C0070", fontWeight:"bold"}}>Resend again</span>
            
            </Typography>
   
        </Card>
        </form>
    </div>
    )
}
