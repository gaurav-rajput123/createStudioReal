import {  Grid, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';

import './CurrentLAnding.css';

import RecipeReviewCard from './Card';
import {UserContext} from './Context'

import './CourseLAyout.css';
import axios from 'axios';
import Topbar from './namrata/Topbar';




export default function MyCourses(props) {
    const userContext = useContext(UserContext)
    const [dataArr, setDataArr] = useState([])
    console.log(userContext);
    const sendPostRequest = async (event) => 
    {
        try {
            const courseIds = await axios({
                url: process.env.REACT_APP_localURL +'/db/getcourses',
                method: "POST",
                data: {
                    token: userContext.user.idToken,
                    id: userContext.user.id
                }
            })
            console.log(courseIds.data)
            const courseData = await axios({
                url: process.env.REACT_APP_localURL + "/db/fetchcoursedata",
                method: "POST",
                data: { 
                    token: userContext.user.idToken,
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
           <Topbar/>
                            <Grid sx={{textAlign: 'center'}}>
                                <Typography variant="h3">
                                    Course Library
                                </Typography>
                            </Grid>
                <Grid container sx={{marginTop: '3%'}}>
                    <Grid container>
                        <Grid display={'flex'} sx={{ justifyContent: 'space-between' }} container>

                        </Grid>
                        <Grid display={'flex'} container sx={{ justifyContent: 'flex-start'}}>
                            {dataArr?.map(product =>{ 
                                
                                
                                return (
                                <RecipeReviewCard key={product.id} {...product} />
                            )})}
                        </Grid>
                        
                        


                    </Grid>



                    
                    
                </Grid>
        </>
    );

}
