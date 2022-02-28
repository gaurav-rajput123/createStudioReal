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
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { v4 } from "uuid";
import { minHeight } from "@mui/system";
export default function Corseinfo({ setShowOutlineForm }) {

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
    const [textData, setTextData] = useState('')
    const [department, setDepartment] = useState('')
    const [email, setEmail] = useState('')
    const [experience, setExperience] = useState('')
    const [elearningexp, setElearningexp] = useState('')
    const [onlineexp, setOnlineexp] = useState('')
    const [industryexp, setIndustryexp] = useState('')
    const [dignation, setDignation] = useState('')
    const [speicalization, setSpeicalization] = useState('')
    const [author, setAuthor] = useState('')
    const [workspace, setWorkspace] = useState('')
    const [journals, setJournals] = useState('')
    const [papers, setPapers] = useState('')
    const [booksedited, setBooksedited] = useState('')
    const newTheme = createTheme({
        palette: {
            primary: {
                main: "#000000"
            }
        }
    })
    return (
        // <ThemeProvider theme={newTheme}>
        <div style={{marginTop: "12px", marginBottom: "12px", paddingLeft:"40px"}} >
            <div style={{marginTop: "12px", marginBottom: "12px"}} >
                <Typography fontSize={"24px"} sx={{ color: "#660000", textAlign: 'center' }}>
                    Course Details
                </Typography>
            </div>
            <div style={{marginTop: "12px", marginBottom: "12px"}} >
                <Typography fontSize={"16px"} >
                    Course Title*
                </Typography>
                <TextField
                    onChange={(e) => {
                        setTextData(e.target.value)
                    }}
                    sx={{ width: "610px" }}
                    // margin="dense"
                    variant="outlined"
                    label="E.g.Basic of Python"
                    id="Title"
                    value={textData}
                />
            </div>
            <div style={{marginTop: "12px", marginBottom: "12px"}} >
                <Typography fontSize={"16px"} sx={{}}>
                    What is primarily taught in your course*
                </Typography>
                <TextField
                    onChange={(e) => {
                        setTextData(e.target.value)
                    }}
                    sx={{ width: "610px" }}
                    margin="dense"
                    variant="outlined"
                    label="E.g.Programming Language"
                    id=" About Course"
                    value={textData}
                />
            </div>
            <div style={{marginTop: "12px", marginBottom: "12px"}} >
                <Typography fontSize={"16px"} >
                    What will the students learn about the course*
                </Typography>
                <div style={{marginTop: "12px", marginBottom: "12px"}} >
                    <TextField
                        onChange={(e) => {
                            setTextData(e.target.value)
                        }}
                        sx={{ width: "610px"}}
                        margin="dense"
                        variant="outlined"
                        label="Type the skills gained here"
                        id=" 1skill gained"
                        value={textData}
                    />
                </div>
                <div style={{marginTop: "12px", marginBottom: "12px"}} >
                    <Button sx={{}} variant="outlined" startIcon={<AddIcon />}>
                        Add more to your response
                    </Button>
                </div>
            </div>

            <div style={{marginTop: "12px", marginBottom: "12px"}} >
                <Typography fontSize={"16px"} sx={{}}>
                    What are the requirements or prerequisites for taking your course*
                </Typography>
                <TextField
                    onChange={(e) => {
                        setTextData(e.target.value)
                    }}
                    sx={{ width: "610px" }}
                    margin="dense"
                    variant="outlined"
                    label="E.g. No programming experience needed.You will learn everything you need need to know"
                    id=" 1skill gained"
                    value={textData}
                />
            </div>

            <div style={{marginTop: "12px", marginBottom: "12px"}} >
                <Typography fontSize={"16px"} sx={{}}>
                    Course Description*
                </Typography>
                <TextField
                    onChange={(e) => {
                        setTextData(e.target.value)
                    }}
                    sx={{ width: "610px"}}
                    margin="dense"
                    variant="outlined"
                    label="Write about the course in detail"
                    id=" Description"
                    value={textData}
                />
            </div>

        
            <div  style={{marginTop: "12px", marginBottom: "12px"}} 
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
        // </ThemeProvider>

    )
}
