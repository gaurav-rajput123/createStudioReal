import styled from "@emotion/styled";
import { Card, IconButton, Typography, Box, Collapse } from "@mui/material";
import React, { useState } from "react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import EditIcon from '@mui/icons-material/Edit';
import FeedIcon from '@mui/icons-material/Feed';
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TextNLabel from "./TextNLabel";
import "./SubjectTile.css";
import TextDescription from "./TextDescription";
import Collapsible from "./SubContent";
import Subsection from './SubTopicTile';
import convertToString from "../resources/convertToString";
import { FileCopy } from "@mui/icons-material";
const parse = require('html-react-parser')



function TopicTile({ changeTopicName, topicIndex, topicArray, addSubTopics, updateCourseArray, courseArray, courseIndex, expand }) {


  const StyledCard = styled(Card)({
    display: "flex",
    margin: '12px 10px',
    padding: "12px 12px 12px 0px"
  })

  const [expanded, setExpanded] = React.useState(false);

  const [isExpanded, setIsExpanded] = useState(false)

  const [isTitle, setIsTitle] = useState(false)

  const [label, setLabel] = useState("Topic")

  const setLabelController = () => {
    setIsTitle(!isTitle)

  }
  const handleLabel = (labelVal) => {
    let newCourseArray = [...courseArray]
    newCourseArray[courseIndex].topics[topicIndex].name = labelVal
    setLabel(labelVal)
    updateCourseArray(newCourseArray)
    handleExpandClick()
  }

  const addSubTopic = () => {
    addSubTopics()
    
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const getDescription = (description) => {
    const newArr = [...courseArray]
    const stArr = parse(description)
    newArr[courseIndex].topics[topicIndex].description = convertToString(stArr)
    updateCourseArray(newArr)
  }

  const handleDelete = () => {
    let newCourseArray = [...courseArray]
    let newTopicArray = [...courseArray[courseIndex].topics.slice(0, topicIndex), ...courseArray[courseIndex].topics.slice(topicIndex + 1)]
    newCourseArray[courseIndex].topics = newTopicArray
    updateCourseArray(newCourseArray)
  }

  const duplicateTopic = () => {
    let newCourseArray = [...courseArray]
    let newTopicArray = [...courseArray[courseIndex].topics]
    let duplicateTopicObj = { ...newTopicArray[topicIndex] }
    duplicateTopicObj.subTopics = [...duplicateTopicObj.subTopics]
    newTopicArray.push(duplicateTopicObj)
    newCourseArray.push(newTopicArray)
    updateCourseArray(newCourseArray)
  }

  return (
    <div>
      <StyledCard sx={{ backgroundColor: "#f1f1f1", borderLeft: '4px solid #375dbe' }}>
        <IconButton onClick={() => {setIsExpanded(!isExpanded);     expand() }}>

          <ArrowRightIcon sx={{ transform: !isExpanded ? "rotate(90deg)" : "rotate(0)" }}
          />
        </IconButton>
        {/* <TextField value={subTitle} onChange={(e)=>setSubTitle(e.target.value)}/> */}

        <TextNLabel isLabelShown={isTitle} courseIndex={courseIndex} setIsLabelShown={setLabelController} setLabel={handleLabel} courseArray={courseArray} updateCourseArray={updateCourseArray} label={label} />

        <div style={{ flexGrow: 1 }} />

        {/* <IconButton sx={{ marginRight: "10px" }} onClick={() => duplicateTopic()}>
          <FileCopy className="Icon1" sx={{ color: "#b7b7b7", }} />
        </IconButton> */}

        <IconButton sx={{ marginRight: "10px" }} onClick={() => setLabelController()}>
          <EditIcon className="Icon1" sx={{ color: "#b7b7b7", }} />
        </IconButton>

        <IconButton sx={{ marginRight: "10px" }}
          onClick={() => handleExpandClick()}
        >
          <FeedIcon className="Icon1" sx={{ color: "#b7b7b7", }} />
        </IconButton>

        <IconButton sx={{ marginRight: "10px" }}
          onClick={() => handleDelete()}
        >
          <DeleteIcon className="Icon1" sx={{ color: "#b7b7b7", }} />
        </IconButton>

        <IconButton sx={{ marginRight: "10px" }}
          onClick={() => {
            addSubTopic()
          }}
        >
          <AddCircleIcon className="Icon1" sx={{ color: "#b7b7b7", }}

          />
        </IconButton>
      </StyledCard>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <TextDescription getDescription={getDescription} titleDescription="Topic Description" skipDescription={()=>handleExpandClick()} add={()=>addSubTopic()}/>
      </Collapse>


    </div >
  )
}

export default TopicTile;
