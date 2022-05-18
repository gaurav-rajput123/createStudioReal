// import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AudioFileIcon from "@mui/icons-material/AudioFile";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import React, { useContext, useEffect, useState } from "react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import EditIcon from '@mui/icons-material/Edit';
import FeedIcon from '@mui/icons-material/Feed';
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TextNLabel from "./TextNLabel";
import "./SubjectTile.css";
import TextDescription from "./TextDescription";
import convertToString from "../resources/convertToString";
import Alternate from './Alternate';
import Modal from '@mui/material/Modal';
import { Box } from "@mui/system";
import UploadComponentAlter from "./UploadComponentAlter";
import { FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import generateKey from "../resources/generateKey";
import TextFieldAssesment from "../assesment/assesmentComponents/TextFieldAssesment";
import TextFieldAssesmentNum from "../assesment/assesmentComponents/TextFieldAssesmentNum";
import CheckBoxAssesment from "../assesment/assesmentComponents/CheckBoxAssesment";
import RadioButtonAssesment from "../assesment/assesmentComponents/RadioButtonAssesment";
import DropdownAssesment from "../assesment/assesmentComponents/DropdownAssesment";
import Research from '../assesment/assesmentComponents/Research'
import CaseStudy from '../assesment/assesmentComponents/CaseStudy'
import BlankProblem from '../assesment/assesmentComponents/BlankProblem'
import CustomProblem from "../assesment/assesmentComponents/CustomProblem";
import { courseArray as arrC } from "../Context";
const parse = require('html-react-parser');

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
  maxHeight: "100%",
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};




// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest
//   })
// }));

export default function SubTopicTile({ subTopicIndex, topicIndex, courseIndex, courseArray, updateCourseArray }) {
  const moduleIndex = courseIndex
  const courseContext = useContext(arrC)
  const [expanded, setExpanded] = React.useState(false);
  const [type, setType] = React.useState("");
  const [expandedDescription, setExpandedDescription] = React.useState(false);
  const StyledCard = styled(Card)({
    display: "flex",
    margin: '12px 10px',
    padding: "12px 12px 12px 0px"
  })

  const [isExpanded, setIsExpanded] = useState(false)

  const [isTitle, setIsTitle] = useState(true)

  const [label, setLabel] = useState(()=>{
    let courseData = courseContext.data[courseIndex].topics[topicIndex].subTopics
    if(courseData[subTopicIndex].name != undefined || courseData[subTopicIndex].name != ''){
      return courseData[subTopicIndex].name 
    }else{
      return "Sub Topic"
    }
  })

  const [resourceType, setResourceType] = useState(null)

  const [option, setOption] = useState(0)

  const [isDisable, setIsDisable] = useState({
    "ppt": false,
    "video": false,
    "audio": false,
    'pdf': false
  })
  
  const setLabelController = () => {
    setIsTitle(!isTitle)
  }
  const handleLabel = (labelVal) => {
    setLabel(labelVal)
    let newArr = [...courseArray]
    console.log(courseArray[courseIndex].topics[topicIndex].subTopics[subTopicIndex])
    courseArray[courseIndex].topics[topicIndex].subTopics[subTopicIndex].name = labelVal.toString()
    updateCourseArray(newArr)
    handleExpandClick()
  }
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleExpandClickDescription = () => {
    setExpandedDescription(!expandedDescription);
  };

  const getDescription = (description) => {
    const newArr = [...courseArray]
    let emptyStr = ''
    if(!Array.isArray(description)){
    let descriptionArr = []
    descriptionArr.push(description)
    description = descriptionArr
  
  }
    description.forEach(item=>{
      if(typeof item.props.children === 'string'){
        emptyStr += item.props.children + '\n'
      }else{
        emptyStr += '\n'
      }
      
    })
    console.log(emptyStr)
    
    // newArr[courseIndex].description = emptyStr
    newArr[courseIndex].topics[topicIndex].subTopics[subTopicIndex].description = emptyStr
    updateCourseArray(newArr)
  }

  const handleDelete = () => {
    let newCourseArray = [...courseArray]
    // let newTopicArray = [...topicArray]
    let newSubTopicArray = [...courseArray[courseIndex].topics[topicIndex].subTopics.slice(0, subTopicIndex), ...courseArray[courseIndex].topics[topicIndex].subTopics.slice(subTopicIndex + 1)]
    newCourseArray[courseIndex].topics[topicIndex].subTopics = newSubTopicArray
    updateCourseArray(newCourseArray)
  }
  // below, three lines of code are for modal used in video
  const [open, setOpen] = React.useState(false);

  const handleOpen = (type) => {
    setResourceType(type)
    setOpen(true)
  };

  const handleClose = (txt) => {
    setOpen(false)
  };

  const addAssesment = () => {
    setOpenAssesment(!openAssesment)
  }
  const [openAssesment, setOpenAssesment] = useState(false)
  const [assesmentType, setAssesmentType] = useState('')
  const selectAssesmentSet = (e) => {
    setAssesmentType(e.target.value)
  }
  const selectAssesment = () => {

    let newCourseArray = [...courseArray]
    let newAssesmentObj;
    let newAssesmentArray
    if(newCourseArray[courseIndex].topics[topicIndex].subTopics[subTopicIndex].assesments) {
      newAssesmentArray = [...newCourseArray[courseIndex].topics[topicIndex].subTopics[subTopicIndex].assesments] 
    }else{
      newAssesmentArray = []
    }
    if (assesmentType === 0) {
      newAssesmentObj = {
        name: "CheckBox",
        type: assesmentType,
        id: generateKey()
      }
    } else if (assesmentType === 1) {
      newAssesmentObj = {
        name: "TextInput",
        type: assesmentType,
        id: generateKey()
      }
    } else if (assesmentType === 2) {
      newAssesmentObj = {
        name: "Multiple Choice",
        type: assesmentType,
        id: generateKey()
      }
    } else if (assesmentType === 3) {
      newAssesmentObj = {
        name: "DropDown",
        type: assesmentType,
        id: generateKey()
      }
    } else if (assesmentType === 4) {
      newAssesmentObj = {
        name: "Numerical",
        type: assesmentType,
        id: generateKey()
      }
    } else if (assesmentType === 5) {
      newAssesmentObj = {
        name: "Research",
        type: assesmentType,
        id: generateKey()
      }
    } else if (assesmentType === 6) {
      newAssesmentObj = {
        name: "Case Study",
        type: assesmentType,
        id: generateKey()
      }
    } else if (assesmentType === 7) {
      newAssesmentObj = {
        name: "Blank",
        type: assesmentType,
        id: generateKey()
      }
    } else if (assesmentType === 8) {
      newAssesmentObj = {
        name: "Custom Based Problem Solving",
        type: assesmentType,
        id: generateKey()
      }
    }
    newAssesmentArray.push(
      newAssesmentObj
    )
    // setAssesmentType(e.target.value)
    newCourseArray[courseIndex].topics[topicIndex].subTopics[subTopicIndex].assesments = newAssesmentArray
    updateCourseArray(newCourseArray)
  }
  const assessmentList = [
    {
      name: "Check Box",
      value: 0
    },
    {
      name: "Text Input",
      value: 1
    },
    {
      name: "Multiple Choice",
      value: 2
    },
    {
      name: "Drop Down",
      value: 3
    },
    {
      name: "Numerical",
      value: 4
    },
    {
      name: "Research",
      value: 5
    },
    {
      name: "Case Study",
      value: 6
    },
    {
      name: "Blank",
      value: 7
    },
    {
      name: "Cutom Based Problem Solving",
      value: 8
    }
  ]

  const updateAssesment = (newItem, index) => {
    let newCourseArray = [...courseArray]
    newCourseArray[courseIndex].topics[topicIndex].subTopics[subTopicIndex].assesments[index].content = newItem
    updateCourseArray(newCourseArray)
  }

  return (
    <div >
      <StyledCard sx={{ backgroundColor: "#f1f1f1", borderLeft: '4px solid green' }}>

        <IconButton onClick={() => setIsExpanded(!isExpanded)}>
          <ArrowRightIcon sx={{ transform: isExpanded ? "rotate(90deg)" : "rotate(0)" }}
          />
        </IconButton>
        {/* <TextField value={subTitle} onChange={(e)=>setSubTitle(e.target.value)}/> */}

        <TextNLabel isLabelShown={isTitle} setIsLabelShown={setLabelController} label={label} setLabel={handleLabel} />

        <div style={{ flexGrow: 1 }} />

        <IconButton sx={{ marginRight: "10px" }} onClick={() => setLabelController()}>
          <EditIcon className="Icon1" sx={{ color: "#b7b7b7", }} />
        </IconButton>

        <IconButton sx={{ marginRight: "10px" }} onClick={() => handleExpandClickDescription()}>
          <FeedIcon className="Icon1" sx={{ color: "#b7b7b7", }} />
        </IconButton>

        <IconButton sx={{ marginRight: "10px" }} onClick={() => handleDelete()}>
          <DeleteIcon className="Icon1" sx={{ color: "#b7b7b7", }} />
        </IconButton>

        <IconButton sx={{ marginRight: "10px" }}
          onClick={() => handleExpandClick()}
        >
          <AddCircleIcon className="Icon1" sx={{ color: "#b7b7b7", }}
          />
        </IconButton>

      </StyledCard >
      <Collapse in={expandedDescription} timeout="auto" unmountOnExit>
        <TextDescription getDescription={getDescription} />
      </Collapse>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Stack
          sx={{
            padding: "10px 100px 10px 100px",
            display: "flex",
            justifyContent: "center"
          }}
          direction="row"
          spacing={2}
        >
          <Modal
            open={open}
            onClose={() => handleClose(null)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <UploadComponentAlter accept={type} courseArray={courseArray} topicIndex={topicIndex} subTopicIndex={subTopicIndex} courseIndex={courseIndex} setInForm={resourceType} updateCourseArray={updateCourseArray} handleClose={handleClose} />
            </Box>
          </Modal>
          <div >
            <Button
              sx={{
                minWidth: "150px", height: "100px", color: "#000000", padding: "5px 50px 5px 50px", backgroundColor: '#fff',
                '&:hover': {
                  
                  color: "#000000",

                },
                backgroundColor: courseContext.data[courseIndex].topics[topicIndex]? (courseContext.data[courseIndex].topics[topicIndex].subTopics[subTopicIndex].resource.audio === true  ? "green" : '#fff') : null
              }}

              // onClick={() => {
              //   setType("audio/*");
              //   return handleOpen("audio")
              // }}
              // disabled={isDisable.audio}
              disabled
            >
              <Box>
                <AudioFileIcon />
                <Typography sx={{ width: "75px" }}>Audio</Typography>
              </Box>
            </Button>
            <Button
              sx={{
                minWidth: "150px", height: "100px", color: "#000000", padding: "5px 50px 5px 50px", backgroundColor: '#fff',
                '&:hover': {
               
                  color: "#000000",
                },
                backgroundColor: courseContext.data[courseIndex].topics[topicIndex].subTopics[subTopicIndex].resource.video === true  ? "#90EE90" : '#fff',
              }}

              onClick={() => {
                setType("video/*");
                handleOpen("video")
              }
              }
              disabled={isDisable.video}
            >
              <Box>
                <OndemandVideoIcon />
                <Typography sx={{ width: "75px" }}>  Video  </Typography>
              </Box>
            </Button>


            <Button
              sx={{
                minWidth: "150px", height: "100px", color: "#000000", padding: "5px 50px 5px 50px", backgroundColor: '#fff',
                '&:hover': {
                  backgroundColor: '#fff',
                  color: "#000000",
                }
              }}

              // onClick={() => {
              //   setType("application/pdf");
              //   handleOpen("pdf")
              // }
              // }
              // disabled={isDisable.pdf}
              disabled
            >
              <Box>
                <PictureAsPdfIcon />
                <Typography sx={{ width: "75px" }}>Pdf</Typography>
              </Box>
            </Button>


            <Button
              sx={{
                minWidth: "150px", height: "100px", color: "#000000", padding: "5px 50px 5px 50px", backgroundColor: '#fff',
                '&:hover': {
                  backgroundColor: '#fff',
                  color: "#000000",
                }
              }}

              // onClick={() => {
              //   setType("application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.slideshow,application/vnd.openxmlformats-officedocument.presentationml.presentation")
              //   handleOpen("ppt")
              // }
              // }
              // disabled={isDisable.ppt}
              disabled
            >
              <Box>
                <SlideshowIcon />
                <Typography sx={{ width: "75px" }}>PPT</Typography>
              </Box>
            </Button>
           
          </div>
          
        </Stack>
       
        <div style={{
          display: "flex", justifyContent: "center",

        }}>
        <Button
            sx={{ marginX: "30%"}}
            variant="contained"
            onClick={() => addAssesment()}
            fullWidth

        
          >
            Add ASSESSMENT
          </Button>
        </div>
        <div style={{
          // display: "flex",
          // justifyContent: "center"
        }}>
          <Collapse in={openAssesment} sx={{
            // marginX: 'auto',
            display: "flex",
            justifyContent: "center"
          }}>
            <div style={{display: "flex", marginTop: "24px"}}>
              <FormControl sx={{width: "60%"}}>
              <InputLabel>Assessment Types</InputLabel>
              <Select
                sx={{
                  width: "100%"
                }}
                label='choose an assesment type'
                value={assesmentType}
                onChange={selectAssesmentSet}
                // onSelect={selectAssesment}
                >
                {
                  assessmentList.map((assesment, index) => {
                    return (
                      <MenuItem value={assesment.value} key={assesment.name}>{assesment.name}</MenuItem>
                    )
                  })
                }
              </Select>

              

            </FormControl>
            <div style={{
              display: "flex",
              justifyContent: 'center',
              flexGrow: '1'
            }}>
            <Button onClick={selectAssesment} sx={{
              marginX: "auto"
            }}
            variant="contained">
                Add Assessment
              </Button>
            </div>
            </div>
            <div>
              {
                courseArray[courseIndex].topics[topicIndex].subTopics[subTopicIndex].assesments?.map((assesment, assesmentIndex, assesmentArray) => {
                  let basicProps = {
                    // color: "blue",
                    updateAssesment: updateAssesment,
                    assesIndex: assesmentIndex,
                    moduleIndex: courseIndex,
                    topicIndex: topicIndex,
                    subTopicIndex: subTopicIndex
                  }
                  if (assesment == undefined) {
                    return null
                  }
                  if (assesment.type === 0) {
                    return (
                      <Box sx={{
                        paddingY: "24px"
                      }}
                        key={assesment.id}>
                        <CheckBoxAssesment {...basicProps} color={"lightgreen"} />
                      </Box>

                    )
                  }
                  if (assesment.type === 1) {
                    return (
                      <Box sx={{
                        paddingY: "24px"
                      }}
                      key={assesment.id}>
                        <TextFieldAssesment {...basicProps} color={"#177ACC"} moduleIndex={courseIndex} />
                      </Box>

                    )
                  }
                  if (assesment.type === 2) {
                    return (
                      <Box sx={{
                        paddingY: "24px"
                      }}
                        key={assesment.id}>
                        <RadioButtonAssesment {...basicProps} color={"#b0eff9"} index={assesmentIndex} />
                      </Box>

                    )
                  }
                  if (assesment.type === 3) {
                    return (
                      <Box sx={{
                        paddingY: "24px"
                      }}
                        key={assesment.id}>
                        <DropdownAssesment {...basicProps} color={"#1A50B2"} />
                      </Box>

                    )
                  }
                  if (assesment.type === 3) {
                    return (
                      <Box sx={{
                        paddingY: "24px"
                      }}
                        key={assesment.id}>
                        <DropdownAssesment {...basicProps} color={"#3eeda1"} />
                      </Box>

                    )
                  }
                  if (assesment.type === 4) {
                    return (
                      <Box sx={{
                        paddingY: "24px"
                      }}
                        key={assesment.id}>
                        <TextFieldAssesmentNum {...basicProps} color={"#95c6ed"} />
                      </Box>

                    )
                  }
                  if (assesment.type === 5) {
                    return (
                      <Box sx={{
                        paddingY: "24px"
                      }}
                        key={assesment.id}>
                        <Research {...basicProps} color={"#d1a080"} />
                      </Box>

                    )
                  }
                  if (assesment.type === 6) {
                    return (
                      <Box sx={{
                        paddingY: "24px"
                      }}
                        key={assesment.id}>
                        <CaseStudy {...basicProps} color={"#b5d99c"} />
                      </Box>

                    )
                  }
                  if (assesment.type === 7) {
                    return (
                      <Box sx={{
                        paddingY: "24px"
                      }}
                        key={assesment.id}>
                        <BlankProblem {...basicProps} color={"#eaf7d0"} />
                      </Box>

                    )
                  }
                  if (assesment.type === 8) {
                    return (
                      <Box sx={{
                        paddingY: "24px"
                      }}
                        key={assesment.id}>
                        <CustomProblem {...basicProps} color={"#eaf7d0"} />
                      </Box>

                    )
                  }
                })
              }
            </div>

            <div style={{
              marginTop: "24px",  
             display: "flex",
             justifyContent: "flex-end",
             paddingRight: "24px"
            }}>
            <FormControl sx={{
          marginY: "12px",
          maxWidth: "300px"
        }}
        fullWidth >
        <InputLabel id="demo-simple-select-label">Add New Field</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={option}
          label="Add New Field"
          onChange={(e)=>{
            setOption(e.target.value)
          }}
          sx={{
            // width: "150px"
          }}
          defaultValue={0}
        > <MenuItem value={0}>Add Desired Field</MenuItem>
          <MenuItem value={10} onClick={()=>{
            let newCourseArray = [...courseContext.data]
            newCourseArray.push({
              id: generateKey(),
              name: "new Module",
              topics: [
                
              ]
            })
            courseContext.setCourseState({...courseContext, data: newCourseArray})
          }}>Add Module</MenuItem>
          <MenuItem value={20}
          onClick={()=>{
            let newCourseArray = [...courseContext.data]
            newCourseArray[moduleIndex].topics.push({
              id: generateKey(),
              name: "new Topic",
              subTopics: [
               
              ]
            })
          courseContext.setCourseState({...courseContext, data: newCourseArray})
          }}
          >Add Topic</MenuItem>
          {
            topicIndex !== undefined ? (
              <MenuItem value={30} onClick={()=>{
                let newCourseArray = [...courseContext.data]
                newCourseArray[moduleIndex].topics[topicIndex].subTopics.push({
                  id: generateKey(),
                  name: "new Subtopic"
                })
                courseContext.setCourseState({...courseContext, data: newCourseArray})
              }}>Add Subtopic</MenuItem>
            ):null
          }
        </Select>
      </FormControl>
            </div>


          </Collapse>
        </div>


      </Collapse>

    </div >

  )
}
