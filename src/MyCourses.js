import {  Grid, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';

import './CurrentLAnding.css';

import RecipeReviewCard from './Card';
import {UserContext} from './Context'

import './CourseLAyout.css';
import axios from 'axios';
import Topbar from './namrata/Topbar';

// import image from '../../../assets/images/DashImage/Ladka2.png'



export default function MyCourses(props) {
    const userContext = useContext(UserContext)
    const [dataArr, setDataArr] = useState([])
    const sendPostRequest = async (event) => 
    {
        try {
            const courseIds = await axios({
                url: process.env.REACT_APP_localURL + '/db/getcourses',
                method: "POST",
                data: {
                    token: userContext.user.idToken,
                    id: userContext.user.id
                }
            })
            console.log(courseIds.data.data)
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
                <Grid container>
                    <Grid container>
                        <Typography variant="h4" color={'#1a50b2'} paddingTop={'8%'}>
                            COURSES
                        </Typography>
                        <Grid display={'flex'} sx={{ justifyContent: 'space-between' }} container>
                            <Grid>
                                <Typography variant="h3" paddingTop={'8%'}>
                                    Your Course Library
                                </Typography>
                            </Grid>

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
