import Middle from "./namrata/Middle";
import { courseArray } from "./Context";
import { useContext, useEffect } from "react";
import { Typography } from "@mui/material";
import Topbar from "./namrata/Topbar";

export default function MyCreatedCourses(){
    const courseContent = useContext(courseArray)
    useEffect(()=>{
        console.log(courseContent)
    })
    return (
        <>  
            <Topbar/>
            <Typography>My Courses</Typography>
            <Middle myCourses={true} isOnCoursePage={true}/>
        </>
    )
}