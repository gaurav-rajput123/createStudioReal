import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import profile from './images/profile.jpg';



const Topbar = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.clear();
        window.location.reload(true);
    }
    return <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: '#80808000', color: 'black' }}>
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    </Typography>
                    <Typography sx={{ flexGrow: 1 }} style={{ display: 'flex', alignItems: "center" }} >
                        <Button variant='contained' onClick={() => navigate('/mycourses')} sx={{ borderRadius: 0 }}>
                            My Courses
                        </Button>
                        <div style={{ flexGrow: 0.02 }} />
                        <Button variant='outlined' onClick={() => navigate('/create')} sx={{ borderRadius: 0 }}>
                            Create Studio
                        </Button>
                        <div style={{ flexGrow: 1 }} />
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

                    </Typography>
                    {/* <Button color="inherit" variant='contained'>Watch Tutorial</Button> */}
                </Toolbar>


            </AppBar>
        </Box>
    </>;
};

export default Topbar;
