import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
// import Ards from './fullpage';
import Ardss from './Ardss';
import Register from "./Register";
import logo from '../MRSSPTU.png'
import TabComponent from './TabComponent copy';

export default function RegisterCard() {
  return (
        <Grid container sx={{height:"100vh",width:"100%"}}>
            <Grid item xs={12} md={4} lg={4}>
                <Ardss />
            </Grid>
            <Grid item md={1} lg={1.5} sx={{backgroundImage:"linear-gradient(to bottom right, #660000 50%,white 50%)"}}>
            </Grid>
            <Grid item md={0.5} lg={0.5} />

            <Grid item xs={12} md={5} lg={5}>
                  <TabComponent/>  
            </Grid  >

            </Grid>
  );
}
