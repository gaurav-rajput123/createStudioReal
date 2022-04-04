import Middle from "./namrata/Middle";
import { courseArray } from "./Context";
import { useContext, useEffect } from "react";
import { Typography } from "@mui/material";

export default function MyCreatedCourses(){
    const courseContent = useContext(courseArray)
    useEffect(()=>{
        console.log(courseContent)
    })
    return (
        <>
            <Typography>My Courses</Typography>
            <Middle myCourses={true}/>
        </>
    )
}