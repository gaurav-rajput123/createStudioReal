import React, { useEffect } from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import Navbar from "./Navbar";
import { stepNumber } from "./Context";
// import v4 from "uuid/dist/v4";
import { courseArray } from "./Context";
import { createTheme, duration } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { v4 } from "uuid";
import { minHeight } from "@mui/system";
import { Description } from "@mui/icons-material";
export default function Courseinfo({ setShowOutlineForm }) {

    const counter = React.useContext(stepNumber)
    const [newSkill, setNewSkill] = React.useState('')
    const courseContext = React.useContext(courseArray)
    const [courseOut, setCourseOut] = useState({
        courseTitle: "",
        courseNumber: "",
        courseDescription: "",
        courseDuration: "",
        courseOrganisation: "",
        skillsGained: []
    })

    const handleNext = () => {
        counter.increment()
        let newC = {
            ...courseContext, data: [{
                name: "Module 1",
                id: v4(),
                topics: [

                ]
            }]
        }
        newC.courseTitle = courseOut.courseTitle
        newC.courseDesciption = courseOut.courseDescription
        newC.courseDuration = courseOut.courseDuration
        newC.courseNumber = courseOut.courseNumber
        newC.organisation = courseOut.courseOrganisation
        newC.skillsGained = [...courseOut.skillsGained]
        courseContext.setCourseState(newC)
        setShowOutlineForm(false)
    }


    // states
    const [title, setTitle] = useState('')
    const [taught, setTaught] = useState('')
    const [skill, setSkill] = useState('')
    const [requirements, setRequirements] = useState('')
    const [description, setDescription] = useState('')
   
    const newTheme = createTheme({
        palette: {
            primary: {
                main: "#000000"
            }
        }
    })
    return (
        <div style={{marginTop: "12px", marginBottom: "12px", paddingLeft:"40px",paddingRight:"40px", borderRadius: "12px", background: "white", width: "90%", marginX: "auto"}} >
            <div style={{marginTop: "12px", marginBottom: "12px"}} >
                <Typography fontSize={"24px"} sx={{ color: "#660000", textAlign: 'center' }}>
                    Course Details
                </Typography>
            </div>
            <div style={{marginTop: "12px", marginBottom: "24px"}} >
                <Typography fontSize={"16px"} >
                    Course Title*
                </Typography>
                <TextField
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                    sx={{ width: "610px" }}
                    // margin="dense"
                    variant="outlined"
                    label="E.g.Basic of Python"
                    id="Title"
                    value={title}
                />
            </div>
            <div style={{marginTop: "12px", marginBottom: "24px"}} >
                <Typography fontSize={"16px"} >
                    Course Number*
                </Typography>
                <TextField
                    onChange={(e) => {
                        setCourseNumber(e.target.value)
                    }}
                    sx={{ width: "610px" }}
                    // margin="dense"
                    variant="outlined"
                    label="Course Number"
                    id="Number"
                    value={number}
                />
            </div>
            <div style={{marginTop: "12px", marginBottom: "24px"}} >
                <Typography fontSize={"16px"} >
                    Course Organisation*
                </Typography>
                <TextField
                    onChange={(e) => {
                        setOrganisation(e.target.value)
                    }}
                    sx={{ width: "610px" }}
                    // margin="dense"
                    variant="outlined"
                    label="Organisation"
                    id="Organisationsa"
                    value={organisation}
                />
            </div>
            <div style={{marginTop: "12px", marginBottom: "24px"}} >
                <Typography fontSize={"16px"} >
                    Course Duration*
                </Typography>
                <TextField
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                    sx={{ width: "610px" }}
                    // margin="dense"
                    variant="outlined"
                    label="course duration in months"
                    // id="Title"
                    value={duration}
                />
            </div>
            <div style={{marginTop: "12px", marginBottom: "24px"}} >
                <Typography fontSize={"16px"} sx={{}}>
                    What is primarily taught in your course*
                </Typography>
                <TextField
                    onChange={(e) => {
                        setTaught(e.target.value)
                    }}
                    sx={{ width: "610px" }}
                    margin="dense"
                    variant="outlined"
                    label="E.g.Programming Language"
                    id=" About Course"
                    value={taught}
                />
            </div>
            <div style={{marginTop: "12px", marginBottom: "24px"}} >
                <Typography fontSize={"16px"} >
                    What will the students learn about the course*
                </Typography>
                <div style={{marginTop: "12px", marginBottom: "12px"}} >
                    <TextField
                        onChange={(e) => {
                            setSkill(e.target.value)
                        }}
                        sx={{ width: "610px"}}
                        margin="dense"
                        variant="outlined"
                        label="Type the skills gained here"
                        id=" skill gained"
                        value={skill}
                    />
                </div>
                <div style={{marginTop: "12px", marginBottom: "12px"}} >
                    <Button sx={{}} variant="outlined" startIcon={<AddIcon />}>
                        Add more to your response
                    </Button>
                </div>
            </div>

            <div style={{marginTop: "12px", marginBottom: "24px"}} >
                <Typography fontSize={"16px"} sx={{}}>
                    What are the requirements or prerequisites for taking your course*
                </Typography>
                <TextField
                    onChange={(e) => {
                        setRequirements(e.target.value)
                    }}
                    sx={{ width: "610px" }}
                    margin="dense"
                    variant="outlined"
                    label="E.g. No programming experience needed.You will learn everything you need need to know"
                    id="requirement"
                    value={requirements}
                />
            </div>

            <div style={{marginTop: "12px", marginBottom: "24px"}} >
                <Typography fontSize={"16px"} sx={{}}>
                    Course Description*
                </Typography>
                <TextField
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }}
                    sx={{ width: "610px"}}
                    margin="dense"
                    variant="outlined"
                    label="Write about the course in detail"
                    id=" Description"
                    value={description}
                />
            </div>

        
            <div  style={{marginTop: "12px", marginBottom: "24px"}} 
                sx={{
                    paddingX: "25%",
                    paddingBottom: "24px",
                    background: "#f0f5f1 !important"
                }}
            >
                <Button sx={{
                    background: "#660000",
                    color: "white",
                    marginTop: "20px"
                }}
                    onClick={handleNext}
                    fullWidth>
                    Create course
                </Button>
            </div>

        </div>

    )
}
