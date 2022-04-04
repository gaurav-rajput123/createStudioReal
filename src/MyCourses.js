import {  Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import './CurrentLAnding.css';

import RecipeReviewCard from './Card';


import './CourseLAyout.css';
import axios from 'axios';

// import image from '../../../assets/images/DashImage/Ladka2.png'



export default function MyCourses(props) {

    const [dataArr, setDataArr] = useState([])
    const sendPostRequest = async (event) => 
    {
        try {
            const courseIds = await axios({
                url: process.env.REACT_APP_localURL + '/db/getcourses',
                method: "POST",
                data: {
                    id: "12345"
                }
            })
            console.log(courseIds.data.data)
            const courseData = await axios({
                url: process.env.REACT_APP_localURL + "/db/fetchcoursedata",
                method: "POST",
                data: {
                    courseIds: JSON.stringify(courseIds.data.data)
                }

            })
            if(courseData.data == "no course for your accounts"){
                return
            }
            console.log(courseData.data)

            setDataArr(courseData.data.data)
            
        } catch (err) {
            console.log(err)
        }
    };

    
    useEffect(() => {
        sendPostRequest()
    }, [])




    return (
        <>
           
                <Grid container>
                    <Grid container>
                        <Typography variant="h3" color={'#1a50b2'} paddingTop={'8%'}>
                            COURSES
                        </Typography>
                        <Grid display={'flex'} sx={{ justifyContent: 'space-between' }} container>
                            <Grid>
                                <Typography variant="h1" paddingTop={'8%'}>
                                    Your Course Library
                                </Typography>
                            </Grid>

                        </Grid>
                        <Grid display={'flex'} container sx={{ justifyContent: 'flex-start'}}>
                            {dataArr.map(product =>{ 
                                
                                
                                return (
                                <RecipeReviewCard key={product.id} {...product} />
                            )})}
                        </Grid>
                        
                        


                    </Grid>



                    
                    
                </Grid>
        </>
    );

}
