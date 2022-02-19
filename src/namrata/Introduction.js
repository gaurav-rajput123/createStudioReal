import * as React from "react";
import {Typography} from "@mui/material";
import { Grid } from "@mui/material";
import Desktop from "./images/Desktop.png";
import {Button} from '@mui/material';
import "./Introduction.css";
import Path from "./images/Path.png";



export default function Introduction() {
    return(
         <Grid
        container
        xs={12}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        backgroundColor="#232340"
        
        // className="coverImage"
        >
        
        <div style={{display:"flex"}}>
          <div>
           <img src={Path} alt="path"/>
          </div>
          <div style={{marginLeft:"-380px", marginTop:"120px"}}>
            <Typography style={{color:"grey",  fontSize:"15px"}}>
             01.<span style={{color:"#ffffff", marginLeft:"20px"}}>Introduction</span>
            </Typography>
          </div>
          <div className="lineUp" style={{marginLeft:"-80px", marginTop:"160px"}}>
            <Typography style={{color:"#ffffff", fontWeight:"bold", fontSize:"60px"}}>
             Features Of Create Studio
            </Typography>
        </div>
        <Typography 
         style={{
             color:"white", 
             fontSize:"15px", 
             fontWeight:"bolder",
             marginLeft:"-1100px",
             marginTop:"500px"
             
         }}>
          Uploaded Courses
        </Typography>
        
        </div>
        <Grid  xs={12}>
          
          <div className= "desktop-image" style={{marginLeft:"340px", marginTop:"-190px"}}>
          <img src={Desktop} alt="desktop"/>
          
          </div>
          
          
          
        </Grid>

        <Grid xs={12}>
          <div  style={{marginLeft:"600px", marginTop:"60px"}}>
           <Typography style={{color:"white", fontSize:"25px", fontWeight:"bolder", fontFamily:"Roboto Slab"}}>
             View your Uploaded Courses<br/>
             in your Library
           </Typography>
          </div>
          <div style={{marginLeft:"600px", marginTop:"40px"}}>
           <Typography style={{color:"grey", fontFamily:"Roboto Slab"}}>
              <p>"Life is our resume. It is our story to tell, and the choices<br/> we make
               write the chapters.Can we live in a way where<br/> we look forward to looking back?"</p>
            </Typography>
          </div>
          <div style={{marginLeft:"600px", marginTop:"40px"}}>
            <Button 
              variant="contained" 
              size="large"
              style={{backgroundColor:"#375DBE", borderRadius:"5px", fontFamily:"Roboto Slab",marginBottom:"40px"}}
              >
              My Library
            </Button>
          </div>
        </Grid>
       
        </Grid>

        // <Grid container style={{marginTop: "40px", overflowX: "hidden",}}>
        //     <div className="rightSwiper" style={ma}>
        //         <img src={Right} alt="rightSwiper" className="rightImage" style={{position: "absolute", right: "-100px", top: "-40px"}}/>
        //         <div className="midContainer" style={{height: "100vh"}}>
        //         <img src={Desktop} alt="desktop"/>
        //         </div>
                
        //     </div>
        
        // </Grid>
    )
}



