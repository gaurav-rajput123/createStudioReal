import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './ContentCard.css';

function image2() {
    var image2 = document.querySelectorAll(".image2");

    for (var i = 0; i < image2.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = image2[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            image2[i].classList.add("active");
        } else {
            image2[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", image2);




export default function ContentCard(props) {
    let { imgback, imgfront, heading, content } = props;
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6} style={{ padding: '8% 6% 8% 12%' }}>
                    <div className="grid-text" style={{ fontFamily: 'Montserrat' }}>
                        <h1>{heading}</h1>
                        <p>{content}</p>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="images" style={{}}>
                        <div className="image1" style={{ position: 'relative', zIndex: 10, }}>
                            <img src={imgback} alt="" style={{ width: '50%', marginLeft: '25%' }} />
                        </div>
                        <div className="image2" style={{ position: 'absolute', marginTop: '-23%', marginLeft: '9%', zIndex: "12" }}>
                            <img src={imgfront} alt="" style={{width: '70%', float: 'left', marginBottom: '0%', marginLeft: '0%', }} />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
}
