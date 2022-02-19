import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import bg from './images/bg.png';
import Grid1 from './images/unnamed.png';
import './fstcntnr.css';
import Dekstop from './images/Desktop2.png';
import Hand_1 from './images/Hand_1.png';
import Hand_ from './images/Hand_.png';
import { NavLink } from 'react-router-dom';

function img2() {
    var img2 = document.querySelectorAll(".img2");
  
    for (var i = 0; i < img2.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = img2[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        img2[i].classList.add("active");
      } else {
        img2[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", img2);

  function img1() {
    var img1 = document.querySelectorAll(".img1");
  
    for (var i = 0; i < img1.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = img1[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        img1[i].classList.add("active");
      } else {
        img1[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", img1);

  function img4() {
    var img4 = document.querySelectorAll(".img4");
  
    for (var i = 0; i < img4.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = img4[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        img4[i].classList.add("active");
      } else {
        img4[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", img4);

  function img5() {
    var img5 = document.querySelectorAll(".img5");
  
    for (var i = 0; i < img5.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = img5[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        img5[i].classList.add("active");
      } else {
        img5[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", img5);

const Fstcntnr = () => {
  return <>
      <Grid container >
          <Grid style={{padding:'7%'}} xs={6}>
            <Typography variant='h1' style={{fontWeight:'700'}}>
                Welcome
            </Typography>
            <Typography variant='h1' style={{fontWeight:'700'}}>
            to Create 
            </Typography>
            <Typography variant='h1' style={{fontWeight:'700'}}>
            Studio
            </Typography>
            <Typography width={'80%'} padding={'2%'}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </Typography>
            <Grid paddingTop={'4%'}>
            <NavLink to={"/create"} style={{
              textDecoration: "none"
            }}>
            <Button variant='contained'>
                Skip Tour
            </Button>
            </NavLink>
            </Grid>
          </Grid>
          <Grid xs={6} padding={'3%'}>
                <div className='img1'>
                <img src={bg} alt="gh" />
                </div>
                <div>
                <img src={Grid1} alt='hu' className='img2'/>
                </div>
                <div>
                    <img src={Dekstop} alt='' className='img3' />
                </div>
                <div>
                <img src={Hand_1} alt='' className='img4' />
                </div>
                <img src={Hand_} alt='' className='img5' />
          </Grid>
      </Grid>
  </>;
};

export default Fstcntnr;
