import React, { useContext, useState } from "react";
import Butn from "./Butn";
import { Paper, Box, Button, Card, Collapse } from "@mui/material";
import SubjectTile from "./SubjectTile";
import TopicTile from "./TopicTile";
import SubTopicTile from './SubTopicTile';
import generateKey from "../resources/generateKey";

import { formContext } from "../Context";
import axios from "axios";

export default function Middle() {
  const [courses, setCourses] = useState([])
  const addNewSection = () => {
    let newCourses = [...courses]
    newCourses.push({
      id: generateKey(),
      name: "Basic Electrical Engineering"
    })
    setCourses(newCourses)
  }
  const formData = useContext(formContext)



  const updateCourse = (course, index) => {
    let newCourseObj = [...courses]
    newCourseObj[index] = course
    setCourses(newCourseObj)
  }

  const changeCourseName = (courseIndex, courseArray, labelVal) => {
    let newCourseObj = {...courseArray[courseIndex]}
    newCourseObj.name = labelVal
    let newCourseArray = [...courseArray]
    newCourseArray[courseIndex] = newCourseObj
    setCourses(newCourseArray)
  }
  const updateCourseArray = (updatedCourseArray) => {
    let newUpdatedCourseArray = [...updatedCourseArray]
    setCourses(newUpdatedCourseArray)
  }
 
  return (
    <Box className="box-lista" style={{ padding: "6px 0px",margin:"0px 10px 0px 12px", width: "98%", zIndex: 2 }}>
      <Paper style={{ backgroundColor: "white", alignItems: "flex-start", height: "auto", borderRadius: "15px", paddingBottom:'1%' }}>


        <div style={{ display: "flex", justifyContent:'space-around' }}>
          <Butn Text="Select Course" disabled/>
          <Butn Text="Add Section" clickHoja={addNewSection} />
          <Butn Text="Collapse All" disabled/>
          <Butn Text="Live View" disabled/>
          <Butn Text=" Save" disabled/>
        </div>
        <Card />
    {courses.map((item, index) => {
    return (
      <MainTile key={item.id} course={item} courseIndex={index} courseArray={courses} updateCurrentCourse={updateCourse} 
        changeCourseName={changeCourseName}
        updateCourseArray={updateCourseArray}
      />
    )
  })}
      </Paper>
      <div style={{
        marginTop: "24px",
        marginBottom: "12px"
      }}>
        <Button onClick={() =>{
        const data = {
          name: "hello",
          data: courses
        }
        formData.set('courseDataa', JSON.stringify(data))
        console.log(courses)
      }}
      sx={{
        marginRight: "36px",
        
      }}
      variant="contained"
      
      >
        update form
        </Button>
        <Button onClick={() =>{
        // console.log(courses)
        // formData.forEach(item=>{
        //   console.log(item)
        // })
       
        axios({
          url:'http://localhost:8080/get',
          data: formData,
          method: "POST"
        }).then(res=>console.log(res)).catch(r=>console.log(r))
       
      }}
      sx={{
        marginRight: "36px",
        
      }}
      variant="contained"
      >
        upload
        </Button>
      </div>
      {/* <Button onClick={() =>{
        let newArr = [1,2,3,4,5,6]
        console.log(newArr.map(item=> uuidv4()))
      }}>generateKey</Button> */}
    </Box>
  )
}


//  For Courses
function MainTile({course, courseIndex, courseArray, updateCurrentCourse, changeCourseName, updateCourseArray}){
  const updateCourse = () => {
    let newCourseObj = { ...course }
    if (newCourseObj.hasOwnProperty('topics')) {
      newCourseObj.topics.push({
        name: "Nortons Theorem",
        subTopics: [] 
      })
    } else {
      newCourseObj.topics = [
        {
          name: "Thevenins Theorem",
          subTopics: []
        }
      ]
    }
 
    updateCurrentCourse(newCourseObj, courseIndex)
  }


  const updateTopicName = (newTopicName, topicIndex, topicArray) => {
    let newTopicObject = {...topicArray[topicIndex]}
    newTopicObject.name = newTopicName
    let newTopicArray = [...topicArray]
    newTopicArray[topicIndex] = newTopicObject
    let newCourseObject = {...course}
    newCourseObject.topics = newTopicArray
    updateCurrentCourse(newCourseObject, courseIndex)
  } 

  const addNewSubTopic = (newTopicArray) => {
    let newCourseObject = {...course}
    newCourseObject.topics = newTopicArray
    updateCurrentCourse(newCourseObject, courseIndex)
  }

  const [expanded, setExpanded] = useState(true)
  
  return (
    <Box>
      <SubjectTile changeCourseName={changeCourseName} courseIndex={courseIndex} courseArray={courseArray} 
        updateCourseArray={updateCourseArray} expand={()=>setExpanded(!expanded)}
      />
      <Collapse in={expanded}>
      <Box sx={{width: "98%"}}>
      {
        course.topics?.map((topic, topicIndex, topicArr)=>{
          return <TopicTileBox
          key={topic.id}
          topic={topic}
          topicIndex={topicIndex}
          topicArray={topicArr}
          changeTopicName={updateTopicName}
          addNewSubTopic={addNewSubTopic} 
          courseIndex={courseIndex} 
          courseArray={courseArray}
          updateCourseArray={updateCourseArray}
          />
        })
      }
      </Box>
      </Collapse>
    </Box>
  )
}

// For Topics
function TopicTileBox({topic, topicIndex, topicArray, changeTopicName, addNewSubTopic, courseIndex, courseArray, updateCourseArray}){
  const updateSubTopic = () => {
   
    let newSubTopic = {
      id: generateKey(),
      "name": "newSubTopic"
    }

    let newTopicArray = [...topicArray]
    if(newTopicArray[topicIndex].hasOwnProperty('subTopics')){
      newTopicArray[topicIndex].subTopics.push(newSubTopic)
    }else{
      newTopicArray[topicIndex].subTopics = [newSubTopic]
    }
    addNewSubTopic(newTopicArray)
  }
  console.log(TopicTile.prototype)
  const [expand, setIsExpand] = useState(true)
  return (
    <Box>
      <TopicTile changeTopicName={changeTopicName} topicIndex={topicIndex} topicArray={topicArray} addSubTopics={updateSubTopic} updateCourseArray={updateCourseArray} courseArray={courseArray} courseIndex={courseIndex} expand={()=>setIsExpand(!expand)}/>
      <Collapse in={expand}>
      <Box sx={{width: "98%", marginLeft:'1%'}}>
      {
        topic.subTopics?.map((subTopic, subTopicIndex, subTopicArray)=>{
          return <SubTopicTile 
          key={subTopic.id} 
          subTopic={subTopic}
          topicArray={topicArray}
          subTopicArray={subTopicArray}
          courseIndex={courseIndex} 
          courseArray={courseArray}
          updateCourseArray={updateCourseArray}
          topicIndex={topicIndex}
          subTopicIndex={subTopicIndex}
          updateCourseArray={updateCourseArray}
          />
        })
      }
      </Box>
      </Collapse>
    </Box>
  )
}








































//  <div className='mainCourse'>
//         <h4>{item.name}</h4>
//         <div className='course-content'>
//           {
//             item.topics.map((topic, index)=>{
//               return(<div className="topic-tile">
//                 <h5>{topic.name}</h5>
//                 <div className='topic-contents'>
//                   {topic.subTopics.map((subtopic, index)=>{
//                     return (<div className='subtopicTile'>
//                       <h6>{subtopic.name}</h6>
//                        <div>
//                         {subtopic.}
//                       </div> 
//                     </div>)
//                   })}
//                 </div>
//               </div>)
//             })
//           }
//         </div>
//       </div> 
// function SubTopicsTile({subtopic, subTopicIndex, subTopicArray}){




//   const retCourseList = () => {
//     let retArr = []

//     for (let [key, val] of Object.entries(subtopic.resources)){
//       retArr.push(val)
//     }
//     return retArr
//   }

  


// return (
//   <Box>
//     {subtopic.name}
//     {subtopic.subTopics.map((item)=>{
//       return (
//       <div>{item.name}</div>
//       )
//     })}
//   </Box>
// )
// }