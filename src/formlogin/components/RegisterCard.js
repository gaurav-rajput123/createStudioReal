import * as React from 'react';
import Card from '@mui/material/Card';
import { Grid, Typography } from '@mui/material';
// import Ards from './fullpage';
import Ardss from './Ardss';
import Register from "./Register";
import logo from '../MRSSPTU.png'
import TabComponent from './TabComponent copy';

export default function RegisterCard() {
  return (
    <Card sx={{display:"flex",backgroundImage: "-webkit-linear-gradient(10deg, #660000 43%, #FFFFFF 43%)", height: "100vh"
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
                <Ardss />
                </div>
               
            </Grid>
            <Grid xs={1} />
            <Grid xs={6} >
                
                  <TabComponent/> 
              
              
               
            </Grid  >

            </Grid>
    </Card>
  );
}
