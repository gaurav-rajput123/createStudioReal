import { Button, Grid } from "@mui/material";
import Middle from "./namrata/Middle";
import Progress from './vikram/Progress';
import CardAnim from "./namrata/CardAnim";
import Header from "./namrata/Topbar";
import { stepNumber } from "./Context";
import React, { useContext, useEffect, useState } from "react";
import { courseArray } from "./Context";
import Footer from "./Footer";
import Corseinfo from "./Courseinfo";
import Courseinfo from "./CourseInfoCopy";
export default function Home() {
    let context = useContext(stepNumber)
    const courseContext = useContext(courseArray)
    useEffect(()=>{
        const newCourseContext = {...courseContext}
        newCourseContext.courseDesciption = ''
        newCourseContext.courseDuration = ''
        newCourseContext.courseId = ''
        newCourseContext.courseNumber=''
        newCourseContext.courseTitle = ''
        newCourseContext.data = []
        newCourseContext.organisation = []
        newCourseContext.skillsGained = []
        courseContext.setCourseState(newCourseContext)
    },[])

    const [showOutlineForm, setShowOutlineForm] = useState(false)

    
    return (
        
            <Grid container>
                <Grid item xs={12} sx={{ paddingBottom: "30px" }}>
                    <Header />
                </Grid>
                <Grid item xs={0.5} />
                <Grid item xs={7} sx={{ backgroundColor: "whitesmoke", borderTopLeftRadius: "12px", paddingTop: "10px" }}>
                    <CardAnim name={""} showOutlineForm={setShowOutlineForm} />
                </Grid>
                <Grid item xs={4} sx={{ backgroundColor: "whitesmoke", borderTopRightRadius: "12px" }}>
                    <Progress />
                </Grid>
                <Grid item xs={0.5} />
                <Grid item xs={0.5} />
                <Grid item xs={11}
                    sx={{ backgroundColor: "whitesmoke", borderBottomLeftRadius: "12px", borderBottomRightRadius: "12px", marginBottom: "36px" }}
                >
                    <div style={{display: "flex", justifyContent: "center"}}>
                    {showOutlineForm ? (<Courseinfo setShowOutlineForm={setShowOutlineForm} />) : null}
                    </div>
                    <Middle />

                </Grid>
                <Grid item xs={0.5} />
                <Grid xs={12} item>
                    <Footer />
                </Grid>
            </Grid>
        
    )
}