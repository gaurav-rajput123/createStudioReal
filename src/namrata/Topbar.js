import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { MenuItem, Tooltip, Menu } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import Avatar from '@mui/material/Avatar';
import profile from './images/profile.jpg';
import { Link, NavLink, useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';



const Topbar = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.clear();
        window.location.reload(true);
    }
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
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
                        
                        

                    </Typography>
                    {/* <Button color="inherit" variant='contained'>Watch Tutorial</Button> */}
                    <div style={{marginRight:'20px'}}> 
                        <IconButton
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <Box sx={{ width: '80px', borderRadius: '30px', ':hover':{backgroundColor: '#2196f3',color:'white'}, display: 'flex', height: '40px',justifyContent:'center' }}>
                                <Avatar sx={{ width: '30px', height: '30px', marginTop: '5px' }} src={profile} />
                                <SettingsIcon fontSize='medium' sx={{ marginTop:'7px',marginLeft:'5px' }} />
                            </Box>
                        </IconButton>
                       <Box >
                       <Menu 
                            
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            
                            
                            
                        >
                            <Link to={'/Profile'} style={{textDecoration:'none',color:'black'}}><MenuItem sx={{':hover':{backgroundColor:'#edf1fd'}}}><PersonIcon sx={{marginRight:'10px'}}/>Profile</MenuItem></Link>

                            <MenuItem sx={{':hover':{backgroundColor:'#edf1fd'}}} onClick={handleLogout}><LogoutIcon sx={{marginRight:'10px'}}/>Logout</MenuItem>
                        </Menu>
                       </Box>
                    </div>
                </Toolbar>


            </AppBar>
        </Box>
    </>;
};

export default Topbar;
