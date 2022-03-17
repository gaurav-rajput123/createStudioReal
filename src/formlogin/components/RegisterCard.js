import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
// import Ards from './fullpage';
import Ardss from './Ardss';
import Register from "./Register";
import logo from '../MRSSPTU.png'
import TabComponent from './TabComponent copy';
import "./register.css";
import { styled } from '@mui/material';

const StyledCard = styled(Card)(({theme})=>({
  [theme.breakpoints.up('lg')]: {
    backgroundImage: "-webkit-linear-gradient(10deg, #660000 43%, #FFFFFF 43%)"
  }
  ,
  [theme.breakpoints.down('lg')]: {
    backgroundImage: "white"
  }
}))

export default function RegisterCard(props) {
  return (
<<<<<<< HEAD
    
   
    <StyledCard sx={{display:"flex", height: "100vh"
    }}>
        
        <img src={logo} alt="as" style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          height: "96px",
          width: "96px"
        }}/>
        
        
        <Grid container>
            <Grid item xs={1}/>
            <Grid item xs={4}>
                <div  style={{paddingTop:"200px"}}>
=======
        <Grid container sx={{height:"100vh",width:"100%"}}>
            <Grid item xs={12} md={4} lg={5}>
>>>>>>> 3a046d74c30e323d3e38b7caff97d298ad915909
                <Ardss />
            </Grid>
            <Grid item md={1} lg={1} sx={{backgroundImage:"linear-gradient(to bottom right, #660000 50%,white 50%)"}}>
            </Grid>
            <Grid item md={0.5} lg={0.5} />

            <Grid item xs={12} md={5} lg={5}>
                  <TabComponent id={props.id}/>  
            </Grid  >

            </Grid>
<<<<<<< HEAD
          
    </StyledCard>
 
 
=======
>>>>>>> 3a046d74c30e323d3e38b7caff97d298ad915909
  );
}
