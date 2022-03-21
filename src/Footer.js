import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram'; 
import TwitterIcon from '@mui/icons-material/Twitter'; 
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import { Box, Card, Grid, Link, Typography } from "@mui/material";
import { styled } from "@mui/system";
const link1=styled(Link)({
  fontSize:"20px",
  textDecoration:"none"

})

const Footer = () => {
  return (
    <Card display="flex" sx={{border: "none", boxShadow: "none",paddingTop:"5%"}}>
        <Grid container columns={12} backgroundColor="#E0E3E7"  padding="30px">
          <Grid item xs={1}/>
          <Grid item xs={3}>
            <Typography variant="h4" paddingBottom="10px">Contact Us</Typography>
            <link1 href="#" >
              <Typography>Maharaja Ranjit Singh Punjab Technical University</Typography>
           <Typography>Dabwali Road</Typography> 
            <Typography>Bathinda - 151001</Typography>
            <Typography><PhoneIcon/>   8725072333</Typography>
           <Typography><MailIcon/>supportexam@mrsptu.ac.in</Typography> 
            </link1>
          </Grid>
          <Grid item xs={1}/>
          <Grid item xs={3}>
          <Typography variant="h4" paddingBottom="10px">About Us</Typography>
            <Typography>Aim</Typography>
            <Typography>Help Desk</Typography>
            <Typography>Cookie policy</Typography>
          </Grid>
          <Grid item xs={1}/>
          <Grid item xs={3}>
            
            <Typography variant="h3">Social Media</Typography>
            <Link href="https://www.facebook.com/login.php/"  sx={{fontSize:"20px"}}> 
              <i className="fab fa-facebook-f">
                <FacebookIcon/><br/>
              </i>
            </Link>
            <Link href="https://www.instagram.com/accounts/login/"  sx={{fontSize:"20px" , color:"red"}}>
              <i className="fab fa-instagram">
                <InstagramIcon/><br/>
                
              </i>
            </Link>
            <Link href="https://twitter.com/i/flow/login"  sx={{fontSize:"20px"}}>
              <i className="fab fa-twitter">
                <TwitterIcon/><br/>
              </i>
            </Link>
            <Link href="https://www.youtube.com/"  sx={{fontSize:"20px" , color:"red"}}>
              <i className="fab fa-youtube">
               <YouTubeIcon/><br/> 
              </i>
            </Link>
          </Grid>
          <Grid item xs={1.5}/>
        </Grid>
    </Card>
  );
};
export default Footer;