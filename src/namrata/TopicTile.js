import styled from "@emotion/styled";
import { Card, IconButton, Typography, Box, Collapse } from "@mui/material";
import React, { useContext, useState } from "react";
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
import { useEffect } from "react";
import { courseArray as courseArrayContext } from "../Context";
import generateKey from "../resources/generateKey";
const parse = require('html-react-parser')



function TopicTile({ topicIndex,  updateCourseArray, courseArray, courseIndex, expand }) {
  const courseContext = useContext(courseArrayContext)

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
    // addSubTopics()
    let newSubTopic = {
      id: generateKey(),
      "name": "newSubTopic",
      resource: {
        'ppt': false,
        'audio': false,
        "video": false,
        'pdf': false
      }
    }
    let newCourseArray = [...courseArray]
    if(newCourseArray[courseIndex].topics[topicIndex].subTopics ){ newCourseArray[courseIndex].topics[topicIndex].subTopics.push(newSubTopic)}else  {
      newCourseArray[courseIndex].topics[topicIndex].subTopics = []
      newCourseArray[courseIndex].topics[topicIndex].subTopics.push(newSubTopic)
    }
    updateCourseArray(newCourseArray)
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  useEffect(()=>{
    let array = courseContext.data
    if(array[courseIndex].topics[topicIndex].name != "New Topic"){
      setLabel(array[courseIndex].topics[topicIndex].name)
    }
  })

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
    newArr[courseIndex].topics[topicIndex].description = emptyStr
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
        <TextDescription getDescription={getDescription} titleDescription="Topic Description" skipDescription={()=>handleExpandClick()} add={()=>addSubTopic()} moduleIndex={courseIndex} topicIndex={topicIndex}/>
      </Collapse>


    </div >
  )
}

export default TopicTile;
