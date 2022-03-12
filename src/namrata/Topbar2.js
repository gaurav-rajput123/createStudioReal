import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import profile from './images/profile.jpg';
import { Link, NavLink } from "react-router-dom";


// const handleMenuprofile = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

const Topbar = () => {
    const handleLogout=()=>{
        localStorage.clear();  
        window.location.reload(true);
      }
    return <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: '#80808000', color: 'black' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}

                    >

                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    </Typography>
                    <Typography sx={{ flexGrow: 1 }} style={{ display: 'flex' }} >
                        {/* <Typography variant="h6" style={{ paddingRight: '30px' }}>
                            <Button sx={{color:"black"}} variant='text'>About</Button>
                        </Typography> */}
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        {/* Create Studio */}
                        <NavLink to={'/create'} style={{
                            textDecoration: "none",
                            color: "black",
                        }}>
                        <Button variant='contained' sx={{borderRadius: 0}}>
                        Let's Create
                        </Button>
                        </NavLink>
                        </Typography>
                    </Typography>
                    <IconButton

                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        // onClick={handleMenuprofile }
                        color="inherit"
                    >
                         <Avatar alt="Gaurav" src={profile} />
                    </IconButton >
                    <Button onClick={handleLogout}>LogOut</Button>
                </Toolbar>
            </AppBar>
        </Box>
    </>;
};

export default Topbar;
