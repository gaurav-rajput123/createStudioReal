import * as React from "react";
import { Typography } from "@mui/material";
import { Grid, Paper, Box } from "@mui/material";
import "./Introduction.css";
import Line2 from "./images/Line2.png";
import Podcast from "./images/Podcast.png";
import Video from "./images/Video.png";
import Slides from "./images/Slides.png";
import PDF from "./images/PDF.png";

import "./features.css";

export default function Features() {
//   const arr = ["podcast", "video", "slides", "pdf"];

  return (
    <Grid
      container
      xs={12}
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      backgroundColor="#ffebf9"
      // className="coverImage"
    >
      <div
        style={{
          minHeight: "900px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minWidth: "100%",
          position: "relative",
        }}
      >
        <img
          src={Line2}
          alt="path"
          style={{ position: "absolute", left: "140px", top: "0px", zIndex: 0 }}
        />

        <div style={{ minWidth: "60%", marginTop: "150px" }}>
          <Typography style={{ color: "#375DBE", fontSize: "15px" }}>
            02.
            <span style={{ color: "#375DBE", marginLeft: "120px" , marginTop:"40px"}}>
              What you can do
            </span>
          </Typography>
        </div>
        <div className="lineUp" style={{}}>
          <Typography
            style={{ color: "#232340", fontWeight: "bold", fontSize: "60px" }}
          >
            Create Courses in any
            <br />
            Format
          </Typography>
        </div>
        <Box className="box-list"style={{ marginTop: "100px", width:"900px", zIndex: 2, marginLeft:"50px"}}>
          <Paper style={{ backgroundColor: "white", display: "flex",height:"400px",borderRadius:"35px"}}>
            
        
                 <div style={{ display: "flex" , marginLeft:"70px", marginTop:"50px"}}>
                  <div className="image-1">
                    <img src={Podcast} alt="image" className="responsive" style={{padding:"30px"}} />
                    <Typography
                      style={{ color: "#375dbe", fontWeight: "bold", marginLeft:"60px"}}
                    >
                    Podcast
                    </Typography>
                   </div>

                   <div className="image-2">

                    <img src={Video} alt="image" className="responsive" style={{padding:"30px"}} />
                    <Typography
                      style={{ color: "#375dbe", fontWeight: "bold", marginLeft:"70px"}}
                    >
                    Video
                    </Typography>
                    </div>

                    <div className="image-3">
                    <img src={Slides} alt="image" className="responsive" style={{padding:"30px"}} />
                    <Typography
                      style={{ color: "#375dbe", fontWeight: "bold",marginLeft:"70px"}}
                    >
                    Slides
                    </Typography>
                    </div>

                    <div className="image-4">
                    
                    <img src={PDF} alt="image" className="responsive" style={{padding:"30px"}} />
                    <Typography
                      style={{ color: "#375dbe", fontWeight: "bold", marginLeft:"80px"}}
                    >
                    PDF
                    </Typography>
                    </div>
                    
                  
                </div>
              
            
          </Paper>
        </Box>
      </div>
    </Grid>
  );
}
