import * as React from 'react';
import Card from '@mui/material/Card';
import { Grid, Typography } from '@mui/material';
// import Ards from './fullpage';
import Ardss from './Ardss';
import TabComponent from './TabComponent';
import Sub from './sub';
import Login from './Login';


export default function BasicCard() {
  return (
    <Card sx={{display:"flex", height: "100vh" ,backgroundImage: "-webkit-linear-gradient(10deg, #660000 43%, #FFFFFF 43%)"
    }}>
        <Grid container>
            <Grid item xs={1}/>
            <Grid item xs={4}>
                <div  style={{paddingTop:"200px"}}>
                <Ardss />
                </div>
               
            </Grid>
            <Grid xs={1} />
            <Grid xs={6}>
                <div style={{paddingTop:"200px"}}>
                  {/* <TabComponent/> */}
              <Login/>
                </div>
            </Grid  >

            </Grid>
    </Card>
  );
}
