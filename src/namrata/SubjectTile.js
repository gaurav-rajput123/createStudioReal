import styled from "@emotion/styled";
import { Card, IconButton, Box, Button, Collapse } from "@mui/material";
import React, { useState } from "react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import EditIcon from '@mui/icons-material/Edit';
import FeedIcon from '@mui/icons-material/Feed';
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TextNLabel from "./TextNLabel";
import "./SubjectTile.css";
import TextDescription from "./TextDescription";
// import Collapsible from "./SubContent";
import TopicTile from './TopicTile';
import convertToString from "../resources/convertToString";
// import Subsection from './Subsection';
// import parse from 'html-react-parser'
import generateKey from "../resources/generateKey";
import FileCopyIcon from '@mui/icons-material/FileCopy';
const parse = require('html-react-parser')

function SubjectTile(prop) {
  let { name, changeCourseName, courseIndex, courseArray, addTopics, updateCourseArray, expand } = prop

  const StyledCard = styled(Card)({
    display: "flex",
    margin: '12px 10px',
    padding: "12px 12px 12px 0px"
  })

  const [expanded, setExpanded] = React.useState(false);

  const [isExpanded, setIsExpanded] = useState(false)

  const [isTitle, setIsTitle] = useState(false)

  const [label, setLabel] = useState("Module")

  const setLabelController = () => {
    setIsTitle(!isTitle)
  }
  const handleLabel = (labelVal) => {
    let newCourseArray = [...courseArray]
    newCourseArray[courseIndex].name = labelVal
    setLabel(labelVal)
    updateCourseArray(newCourseArray)
    handleExpandClick()
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);

  };


  const addNewTopics = () => {
    let newCourseArray = [...courseArray]
    if (newCourseArray[courseIndex].topics !== undefined) {
      newCourseArray[courseIndex].topics.push({
        id: generateKey(),
        name: "Hello Sweetie"
      })
    } else {
      newCourseArray[courseIndex].topics = [
        {
          id: generateKey(),
          name: "Hello Sweetie"
        }
      ]
    }
    console.log(newCourseArray)
    updateCourseArray(newCourseArray)
   
  }


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
    
    newArr[courseIndex].description = emptyStr
    updateCourseArray(newArr)
  }

  const handleDelete = () => {
    // let newCourseArray = [...courseArray.slice(0, courseIndex), ...courseArray.slice(courseIndex + 1)]
    let newCourseArray = [...courseArray]
    newCourseArray.splice(courseIndex, 1)
    console.log(newCourseArray)
    updateCourseArray(newCourseArray)

  }
  // const duplicateSection = () => {
  //   let newCourseArray = [...courseArray]
  //   let duplicateObj = { ...newCourseArray[courseIndex] }
  //   duplicateObj.topics = [...duplicateObj.topics]
  //   // duplicateObj.topics.subtopics ? duplicateObj.topics[topicIndex].subtopics = [...duplicateObj.topics[topicIndex].subtopics] : null
  //   let newDuplicateObjTopics
  //   if (duplicateObj.topics !== undefined) {
  //     newDuplicateObjTopics = duplicateObj.topics.map(item => {
  //       item.id = generateKey()
  //       if (item.subTopics !== undefined) {
  //         console.log("here")
  //         item.subTopics = [...item.subTopics]
  //       }
  //       return item;
  //     })
  //   }

  //   duplicateObj.topics = newDuplicateObjTopics
  //   // duplicateObj.id = generateKey()
  //   newCourseArray.push(duplicateObj)
  //   updateCourseArray(newCourseArray)
  // }
  return (
    <div>
      <StyledCard sx={{ backgroundColor: "#f1f1f1" }}>
        <IconButton onClick={() => {setIsExpanded(!isExpanded);     expand()  }}>
          <ArrowRightIcon sx={{ transform: !isExpanded ? "rotate(90deg)" : "rotate(0)" }} />
        </IconButton>
        {/* <TextField value={subTitle} onChange={(e)=>setSubTitle(e.target.value)}/> */}

        {/* <TextField value={subTitle} onChange={(e)=>setSubTitle(e.target.value)}/> */}

        <TextNLabel isLabelShown={isTitle} label={label} courseIndex={courseIndex} setIsLabelShown={setLabelController} courseArray={courseArray} setLabel={handleLabel} />

        {name}


        <div style={{ flexGrow: 1 }} />

        {/* <IconButton sx={{ marginRight: "10px" }} onClick={() => duplicateSection()}>
          <FileCopyIcon className="Icon1" sx={{ color: "#b7b7b7", }} />
        </IconButton> */}

        <IconButton sx={{ marginRight: "10px" }} onClick={() => setLabelController()}>
          <EditIcon className="Icon1" sx={{ color: "#b7b7b7", }} />
        </IconButton>

        <IconButton sx={{ marginRight: "10px" }}
          onClick={() => handleExpandClick()}
        >
          <FeedIcon className="Icon1" sx={{ color: "#b7b7b7", }} />
        </IconButton>

        <IconButton sx={{ marginRight: "10px" }} onClick={() => handleDelete()}>
          <DeleteIcon className="Icon1" sx={{ color: "#b7b7b7", }} />
        </IconButton>

        <IconButton sx={{ marginRight: "10px" }}
          onClick={() => addNewTopics()}
        >
          <AddCircleIcon className="Icon1" sx={{ color: "#b7b7b7", }}

          />
        </IconButton>
      </StyledCard>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {/* <Box sx={{
          backgroundColor: "lightgray",
          borderRadius: "6px",
          width: "90%",
          textAlign: "center",
          marginX: "auto"

        }}>
          hello
        </Box> */}
        <TextDescription getDescription={getDescription} titleDescription="Module Description" moduleIndex={courseIndex} skipDescription={()=>handleExpandClick()} add={()=>addNewTopics()}/>
      </Collapse>
    </div >
  )

}


export default SubjectTile;
