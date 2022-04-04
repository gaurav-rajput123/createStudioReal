import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';



const Topbar = () => {
    const navigate = useNavigate()
  return <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{backgroundColor:'#80808000', color:'black'}}>
                <Toolbar>
                
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                </Typography>
                <Typography sx={{ flexGrow: 1 }} style={{display:'flex'}} >
                {/* <Typography variant="h6" style={{paddingRight:'30px'}}>
                        <Button variant='text'>About</Button>
                </Typography> */}
                <Typography variant="h6"  sx={{ flexGrow: 1 }}>
                {/* <Button disabled variant='containeda' sx={{
                    fontSize: "16px",
                    fontFamily: 'sans-serif',
                   
                }}>Create Studio</Button> */}
                <span>
                    Create Studio
                    </span>
                    <span onClick={()=>navigate('/mycourses')}>
                        My Courses
                    </span>
                    </Typography>
                </Typography>
                {/* <Button color="inherit" variant='contained'>Watch Tutorial</Button> */}
                </Toolbar>
                
            </AppBar>
        </Box>
  </>;
};

export default Topbar;
