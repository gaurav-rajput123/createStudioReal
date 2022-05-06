import React, { useContext, useEffect } from "react";
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
import Select from '@mui/material/Select';
// import v4 from "uuid/dist/v4";
import { courseArray } from "./Context";
import { createTheme, duration, FormControl, Input, InputLabel, MenuItem } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { v4 } from "uuid";
import { minHeight } from "@mui/system";
import { Description } from "@mui/icons-material";
import ClearIcon from '@mui/icons-material/Clear';
import imgss from './Previews.jpg'
import { formContext } from "./Context";
import IconButton from '@mui/material/IconButton';
import generateKey from "./resources/generateKey";
import Middle from "./namrata/Middle";



export default function Courseinfo({ setShowOutlineForm }) {
    const formData = useContext(formContext)
    const counter = React.useContext(stepNumber)
    const [courseImage, setCourseImage] = useState(null)
    const [newSkill, setNewSkill] = React.useState('')
    const courseContext = React.useContext(courseArray)
    const categoryList = [
        {label:"IT & Software Development", value:"IT & Software Development"},
        {label:"Designing", value:"Designing"},
        {label:"Networking", value:"Networking"},
        {label:"Business", value:"Business"},
        {label:"Civil Engineering", value:"Civil Engineering"},
        {label:"Programming Language", value:"Programming Language"},
        {label:"Data Science", value:"Data Science"},
        {label:"Mechanical Engineering", value:"Mechanical Engineering"},
        {label:"Patents & Intellectual Property Rights", value:"Patents & Intellectual Property Rights"}
    ]


    const handleNext = () => {
        if (duration.length != 0 &&
            courseNumber.length != 0 &&
            organisation.length != 0 &&
            title.length != 0 &&
            taught.length != 0 &&
            skillArr.length != 0 &&
            requirements.length != 0 &&
            description.length != 0 &&
            price.length != 0 &&
            courseImageFile.length != 0 &&
            category.length != 0) {

            counter.increment()
            let newC = {
                ...courseContext, data: [{
                    name: "Module 1",
                    id: v4(),
                    topics: [

                    ]
                }]
            }
            newC.courseTitle = title
            newC.courseDesciption = description
            newC.courseDuration = duration
            newC.courseNumber = courseNumber
            newC.organisation = organisation
            newC.skillsGained = [...skillArr]
            newC.requirement = requirements
            newC.category = category
            newC.price = price
            courseContext.setCourseState(newC)
            setShowOutlineForm(false)
            counter.increment()
            console.log(courseContext)
        } else {
            alert("please complete all the fields")
        }
    }
    const handleUpload = (file) => {
        let newId = generateKey()
        let newFileName = newId + file.name.substring(file.name.lastIndexOf('.'))

        let newFile = new File([file], newFileName, { type: file.type })
        let newContext = { ...courseContext, courseId: newId }
        // console.log(newFileName + newContext)
        courseContext.setCourseState(newContext)
        formData.set("courseImage", newFile)
    }
    // states
    const [duration, setCourseDuration] = useState('')
    const [category, setCategory] = useState('')
    const [courseNumber, setCourseNumber] = useState('')
    const [organisation, setOrganisation] = useState('')
    const [title, setTitle] = useState('')
    const [taught, setTaught] = useState('')
    const [skill, setSkill] = useState('')
    const [requirements, setRequirements] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [imageUrl, setImageUrl] = useState(null)
    const [fileObj, setFileObj] = useState('')
    const [skillArr, setSkillArr] = useState([])
    const [courseImageFile, setCourseImageFile] = useState('')

    return (
        <div style={{ marginTop: "12px", marginBottom: "12px", paddingLeft: "40px", paddingRight: "40px", borderRadius: "12px", background: "white", width: "90%", marginX: "auto" }} >
            <div style={{ marginTop: "12px", marginBottom: "12px" }} >
                <Typography fontSize={"24px"} sx={{ color: "#660000", textAlign: 'center' }}>
                    Course Details
                </Typography>
            </div>
            <div style={{ marginTop: "12px", marginBottom: "24px" }} >
                <Typography fontSize={"16px"} sx={{ marginBottom: "12px" }}>
                    Course Title*
                </Typography>
                <TextField
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                    sx={{ width: "610px", backgroundColor: "#F8F8F8" }}
                    // margin="dense"
                    variant="outlined"
                    // label="E.g.Basics of Python"
                    placeholder="E.g.Basics of Python"
                    id="Title"
                    value={title}
                />
            </div>
            <FormControl style={{ marginTop: "12px", marginBottom: "24px" }} >
                <Typography fontSize={"16px"} sx={{ marginBottom: "12px" }}>
                    Category*
                </Typography>
                <Select sx={{width: '610px', backgroundColor: "#F8F8F8"}} placeholder="Category" onChange={(e) => {setCategory(e.target.value)
                        // console.log(e.target.value)
                }}>
                    {categoryList?.map(category => {
                        return (
                            <MenuItem key={category.value} value={category.value}>
                                { category.value}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
            <div style={{ marginTop: "12px", marginBottom: "24px" }} >
                <Typography fontSize={"16px"} sx={{ marginBottom: "12px" }} >
                    Course Number*
                </Typography>
                <TextField
                    onChange={(e) => {
                        setCourseNumber(e.target.value)
                    }}
                    sx={{ width: "610px", backgroundColor: "#F8F8F8" }}
                    // margin="dense"
                    variant="outlined"
                    // label="Course Number"
                    placeholder="Course Number"
                    id="Number"
                    value={courseNumber}
                />
            </div>
            <div style={{ marginTop: "12px", marginBottom: "24px" }} >
                <Typography fontSize={"16px"} sx={{ marginBottom: "12px" }}>
                    Course Organisation*
                </Typography>
                <TextField
                    onChange={(e) => {
                        setOrganisation(e.target.value)
                    }}
                    sx={{ width: "610px", backgroundColor: "#F8F8F8" }}
                    // margin="dense"
                    variant="outlined"
                    // label="Organisation"
                    placeholder="Organisation"
                    id="Organisationsa"
                    value={organisation}
                />
            </div>
            <div style={{ marginTop: "12px", marginBottom: "24px" }} >
                <Typography fontSize={"16px"} sx={{ marginBottom: "12px" }} >
                    Course Duration*
                </Typography>
                <TextField
                    onChange={(e) => {
                        setCourseDuration(e.target.value)
                    }}
                    sx={{ width: "610px", backgroundColor: "#F8F8F8" }}
                    // margin="dense"
                    variant="outlined"
                    // label="course duration in months/hrs"
                    placeholder="Course duration in months/hrs"
                    // id="Title"
                    value={duration}
                />
            </div>
            <div style={{ marginTop: "12px", marginBottom: "24px" }} >
                <Typography fontSize={"16px"} sx={{}}>
                    What is primarily taught in your course*
                </Typography>
                <TextField
                    onChange={(e) => {
                        setTaught(e.target.value)
                    }}
                    sx={{ width: "610px", backgroundColor: "#F8F8F8" }}
                    margin="dense"
                    variant="outlined"
                    // label="E.g.Programming Language"
                    placeholder="E.g.Programming Language"
                    id=" About Course"
                    value={taught}
                />
            </div>
            <div style={{ marginTop: "12px", marginBottom: "24px" }} >
                <Typography fontSize={"16px"} >
                    What will the students learn about the course*
                </Typography>
                <div style={{ marginTop: "12px", marginBottom: "12px" }} >
                    <TextField
                        onChange={(e) => {
                            setSkill(e.target.value)
                        }}
                        sx={{ width: "610px", backgroundColor: "#F8F8F8" }}
                        margin="dense"
                        variant="outlined"
                        // label="Type the skills gained here"
                        placeholder="Write the skills gained here"
                        id=" skill gained"
                        value={skill}
                    />
                </div>
                <div>
                    {skillArr.map((skill, skillIndex) => {
                        return (
                            <span key={skillIndex + skill} style={{ padding: "6px", paddingLeft: "12px", paddingRight: "12px", borderRadius: "8px", background: "#1976d2", fontSize: "18px", marginRight: '12px', color: "white", fontFamily: "Popins" }}>
                                {skill}
                                <IconButton sx={{ color: "white" }} onClick={() => {
                                    let newSkillArr = [...skillArr]
                                    newSkillArr.splice(skillIndex, 1)
                                    setSkillArr(newSkillArr)
                                }}>
                                    <ClearIcon />
                                </IconButton>
                            </span>
                        )
                    })}
                </div>
                <div style={{ marginTop: "12px", marginBottom: "12px" }} >
                    <Button sx={{}} variant="outlined" startIcon={<AddIcon />} onClick={() => {
                        let newSkillArr = [...skillArr]
                        newSkillArr.push(skill)
                        setSkillArr(newSkillArr)
                        setSkill('')
                    }}>
                        Add more to your response
                    </Button>
                </div>
            </div>

            <div style={{ marginTop: "12px", marginBottom: "24px" }} >
                <Typography fontSize={"16px"} sx={{}}>
                    What are the requirements or prerequisites for taking your course*
                </Typography>
                <TextField
                    onChange={(e) => {
                        setRequirements(e.target.value)
                    }}
                    sx={{ width: "610px", backgroundColor: "#F8F8F8" }}

                    margin="dense"
                    variant="outlined"
                    // label="E.g. No programming experience needed.You will learn everything you need need to know"
                    placeholder="E.g.No programming experience required"
                    id="requirement"
                    value={requirements}
                />
            </div>

            <div style={{ marginTop: "12px", marginBottom: "24px" }} >
                <Typography fontSize={"16px"} sx={{}}>
                    Course Description*
                </Typography>
                <TextField
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }}
                    sx={{ width: "610px", backgroundColor: "#F8F8F8" }}
                    fullWidth
                    multiline
                    rows="3"
                    margin="dense"
                    variant="outlined"
                    // label="Write about the course in detail"
                    placeholder="Write about the course in detail"
                    id=" Description"
                    value={description}
                />
            </div>
            <div style={{ marginTop: "12px", marginBottom: "24px" }} >
                <Typography fontSize={"16px"} sx={{}}>
                    Course Price*
                </Typography>
                <TextField
                    onChange={(e) => {
                        setPrice(e.target.value)
                    }}
                    sx={{ width: "610px", backgroundColor: "#F8F8F8" }}
                    margin="dense"
                    variant="outlined"
                    // label="Price of this course"
                    placeholder="Price of this course"
                    id=" Price"
                    value={price}
                />
            </div>
            <div style={{ marginTop: "12px", marginBottom: "24px" }}>
                <div>
                    <Typography fontSize={"16px"} sx={{ marginBottom: "12px" }}>
                        Course Image*
                    </Typography>
                    {
                        imageUrl === null ?
                            (
                                <img src={imgss}
                                    alt="asdf"
                                    style={{
                                        width: "300px",
                                        height: "200px",
                                        objectFit: "contain"
                                    }} />
                            )
                            :
                            (
                                <img src={imageUrl}
                                    alt="asdf"
                                    style={{
                                        width: "300px",
                                        height: "200px",
                                        objectFit: "contain"
                                    }} />
                            )
                    }
                </div>
                <div>
                    <label>
                        <input accept="image/*" type="file" style={{
                            display: 'none'
                        }}
                            onChange={e => {
                                setImageUrl(URL.createObjectURL(e.target.files[0]))
                                setCourseImageFile(e.target.files[0])
                                handleUpload(e.target.files[0])
                            }}

                        />
                        <Button

                            onClick={() => {
                                console.log(imageUrl)

                            }}

                            disabled={courseImageFile == null ? true : false}
                            sx={{
                                marginTop: "10px",
                                padding: "12px",
                                borderRadius: "6px",
                                width: "25px"
                            }}
                            // variant="contained"
                            component="span"

                        >
                            <Typography>Upload</Typography>

                        </Button>
                    </label>
                </div>
            </div>

            <div style={{
                marginTop: "12px", marginBottom: "24px",
                display: "flex", justifyContent: "space-evenly"
            }}

            >
                <Button sx={{
                    background: "rgb(9, 120, 201)",
                    color: "white",
                    marginTop: "20px",
                    ":hover": {
                        background: "#3f8894",
                        color: "#FFFFFF",
                        // width: "60%",
                        // transition: "width 0.5s"
                    },
                    width: "30%"
                }}
                    onClick={handleNext}
                    fullWidth>
                    Cancel
                </Button>
                <Button sx={{
                    background: "rgb(9, 120, 201)",
                    color: "white",
                    marginTop: "20px",
                    ":hover": {
                        background: "#3f8894",
                        color: "#FFFFFF",
                        // width: "60%",
                        // transition: "width 0.5s"
                    },
                    width: "30%"
                }}
                    onClick={handleNext}
                    fullWidth>
                    Create course
                </Button>

            </div>
            <Middle />
        </div>

    )
}
