import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './ContentCard.css';


export default function ContentCard2(props) {
    let { imgback, imgfront, heading, content } = props;
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <div className="images">
                        <div className="image1" style={{ position: 'relative', zIndex: '-1' }}>
                            <img src={imgback} alt="" style={{ width: '50%', marginLeft: '25%' }} />
                        </div>
                        <div className="image2" style={{ position: 'absolute', marginTop: '-23%', marginLeft: '9%' }}>
                            <img src={imgfront} alt="" style={{ width: '30%', float: 'left', marginBottom: '0%', marginLeft: '0%' }} />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} style={{ padding: '8% 10% 8% 6%' }}>
                    <div className="grid-text" style={{ fontFamily: 'Montserrat' }}>
                        <h1>{heading}</h1>
                        <p>{content}</p>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
}