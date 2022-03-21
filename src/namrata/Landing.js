import React from "react";
import { Button, Typography } from "@mui/material";

import Grid from "@mui/material/Grid";
// import './landing.css';
import Middle from "./Middle";





export default function Landing() {
  return (
    //topbar section//
    <Grid
      container
      // xs={12}
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      backgroundColor="#f4f5fe"
    >
      <div style={{ alignItems: "center", display: "flex" }}>

        <div style={{ marginLeft: "600px", marginTop: "50px", marginRight: "30px" }}>
          <Typography style={{ color: "#989899", fontWeight: "bold", fontSize: "15px" }}>
            About
          </Typography>
        </div>

        <div style={{ marginLeft: "50px", marginTop: "50px" }}>
          <Typography style={{ color: "#989899", fontWeight: "bold", fontSize: "15px" }}>
            Create Studio
          </Typography>
        </div>

        <div style={{ marginLeft: "70px", marginTop: "50px", marginRight: "40px" }}>
          <Typography style={{ color: "#989899", fontWeight: "bold", fontSize: "15px" }}>
            My Library
          </Typography>
        </div>

        <div style={{ marginLeft: "300px", marginTop: "50px" }}>
          <Typography style={{ color: "black", fontWeight: "bold", fontSize: "15px" }}>
            Tuesday, 1 February 2022
          </Typography>
        </div>




      </div>

      <Middle />



    </Grid>
  )
}