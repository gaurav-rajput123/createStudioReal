import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ContentCard from './ContentCard';
import ContentCard2 from './ContentCard2';
import ContentCard3 from './ContentCard3';
import ContentCard4 from './ContentCard4';
import bg1 from '../namrata/images/bg1.png';
import bg2 from '../namrata/images/bg2.png';
import bg3 from '../namrata/images/bg3.png';
import bg4 from '../namrata/images/bg4.png';
import ImgBg1 from '../namrata/images/ImgBg1.png';
import ImgBg2 from '../namrata/images/ImgBg2.png';
import ImgBg3 from '../namrata/images/ImgBg3.png';
import ImgBg4 from '../namrata/images/ImgBg4.png';


export default function AnimationGrid() {
    return (
        <Box sx={{ flexGrow: 1 }} style={{ display: 'inline-block', fontFamily: 'Montserrat' }}>

            <Grid container rowSpacing={15} columnSpacing={{ xs: 1, sm: 2, md: 3 }} direction='column'>
                <Grid item xs style={{ position: 'relative', left: '10%' }}>
                    <h4 className='guidelines'>04. Guidelines</h4>
                    <div className="main-head" style={{ display: 'flex', marginTop: '-3%' }}>
                        <div className="bold" style={{ fontSize: '30px' }}>
                            <h1>Uploading Formats</h1>
                        </div>
                        <div className="btn" style={{ marginLeft: '30%' }}>
                            <Button variant='contained'>Contact Us</Button>
                        </div>
                    </div>
                    <Grid item xs={6} style={{ float: 'left', fontSize: '20px', marginTop: '-2%' }}>
                        <p>There are certain guidelines that one must keep in mind while uploading the courses.</p>
                    </Grid>

                </Grid>
                <Grid item xs style={{ marginTop: '-7%' }}>
                    <ContentCard
                        heading="Audio Content or Podcast"
                        content="There are certain guidelines that one must keep in mind while uploading the courses."
                        imgback={bg1}
                        imgfront={ImgBg1}
                    />
                </Grid>
                {/* </Grid>
            <Grid container> */}
                <Grid item xs style={{ marginTop: '-7%' }}>
                    <ContentCard2
                        heading="Video Content"
                        content="Agency is a full-service agency, busy designing and building beautiful digital products, brands and experiences."
                        imgback={bg2}
                        imgfront={ImgBg2}
                    />
                </Grid>
                {/* </Grid>
            <Grid container> */}
                <Grid item xs style={{ marginTop: '-7%' }}>
                    <ContentCard3
                        heading="Content in the form of PDF"
                        content="Agency is a full-service agency, busy designing and building beautiful digital products, brands and experiences."
                        imgback={bg3}
                        imgfront={ImgBg3}
                    />
                </Grid>
                {/* </Grid>
            <Grid container> */}
                <Grid item xs style={{ marginTop: '-7%' }}>
                    <ContentCard4
                        heading="Content in the form of Slides"
                        content="Agency is a full-service agency, busy designing and building beautiful digital products, brands and experiences."
                        imgback={bg4}
                        imgfront={ImgBg4}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
