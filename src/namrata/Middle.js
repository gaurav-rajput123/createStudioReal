import React, { useContext, useState } from "react";
import Butn from "./Butn";
import { Paper, Box, Button, Card, Collapse } from "@mui/material";
import SubjectTile from "./SubjectTile";
import TopicTile from "./TopicTile";
import SubTopicTile from './SubTopicTile';
import generateKey from "../resources/generateKey";
import { formContext } from "../Context";
import axios from "axios";
import { courseArray } from "../Context";
import { useEffect } from "react";
import { stepNumber } from "../Context";
export default function Middle() {
  const counter = useContext(stepNumber)
  const courseContext = useContext(courseArray)
  const [courses, setCourses] = useState([...courseContext.data])
  useEffect(() => {
    if (courseContext.data.length === 0) {
      counter.setVal(1)
    }
    setCourses(courseContext.data)
  }, [courseContext.data])
  useState(() => {
    console.log("hello")
  })
  const addNewSection = () => {
    let newCourses = [...courses]
    newCourses.push({
      id: generateKey(),
      name: "Basic Electrical Engineering"
    })
    courseContext.setCourseState({ ...courseContext, data: newCourses })
  }
  const formData = useContext(formContext)

  const updateCourse = (course, index) => {
    let newCourseObj = [...courses]
    newCourseObj[index] = course
  }

  const changeCourseName = (courseIndex, courseArray, labelVal) => {
    let newCourseObj = { ...courseArray[courseIndex] }
    newCourseObj.name = labelVal
    let newCourseArray = [...courseArray]
    newCourseArray[courseIndex] = newCourseObj
  }

  const updateCourseArray = (updatedCourseArray) => {
    let newUpdatedCourseArray = [...updatedCourseArray]
    courseContext.setCourseState({ ...courseContext, data: newUpdatedCourseArray })
  }

  return (
    <Box className="box-lista" style={{ padding: "6px 0px", margin: "0px 10px 0px 12px", width: "98%", zIndex: 2 }}>
      {
        courseContext.data.length != 0 ? (
          <div>
            <Paper style={{ backgroundColor: "white", alignItems: "flex-start", height: "auto", borderRadius: "15px", paddingBottom: '1%' }}>


              <div style={{ display: "flex", justifyContent: 'space-around' }}>
                <Butn Text="Select Course" disabled />
                <Butn Text="Add Module" clickHoja={addNewSection} />
                <Butn Text="Collapse All" disabled />
                <Butn Text="Live View" disabled />
                <Butn Text=" Save" disabled />
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
              <Button onClick={() => {
                counter.increment()
                const data = {
                  name: "hello",
                  data: courses
                }
                formData.set('courseDataa', JSON.stringify(data))
                console.log(courses)
                const courseMetadata = {
                  id: generateKey(),
                  description : courseContext.courseDesciption, 
                  duration: courseContext.courseDuration,
                  number: courseContext.courseNumber,
                  title: courseContext.courseTitle,
                  organisation: courseContext.organisation,
                  requirement: courseContext.requirement,
                  skills: [...courseContext.skillsGained]
                }
                formData.set("metadata", JSON.stringify(courseMetadata))
                formData.set('user', JSON.stringify({
                  id: "12345"
                }))
              }}
                sx={{
                  marginRight: "36px",

                }}
                variant="contained"

              >
                update course
              </Button>
              <Button onClick={() => {
                counter.increment()
                axios({
                  url: 'https://api.keewesolutions.com/get',
                  data: formData,
                  method: "POST"
                }).then(res => console.log(res)).catch(r => console.log(r))

              }}
                sx={{
                  marginRight: "36px",

                }}
                variant="contained"
              >
                upload course and save
              </Button>
              {/* <Button onClick={() => console.log(courseContext)}>doit</Button>
              <Button onClick={() => {
                console.log("hello")
                for (var pair of formData.entries()) {
                  console.log("here")
                  console.log(pair[0]+ ', ' + pair[1]); 
              }
              }}>here</Button> */}
            </div>
          </div>
        ) : null
      }

    </Box>
  )
}


//  For Courses
function MainTile({ course, courseIndex, courseArray, updateCurrentCourse, changeCourseName, updateCourseArray }) {

  const updateTopicName = (newTopicName, topicIndex, topicArray) => {
    let newTopicObject = { ...topicArray[topicIndex] }
    newTopicObject.name = newTopicName
    let newTopicArray = [...topicArray]
    newTopicArray[topicIndex] = newTopicObject
    let newCourseObject = { ...course }
    newCourseObject.topics = newTopicArray
    updateCurrentCourse(newCourseObject, courseIndex)
  }

  const addNewSubTopic = (newTopicArray) => {
    let newCourseObject = { ...course }
    newCourseObject.topics = newTopicArray
    updateCurrentCourse(newCourseObject, courseIndex)
  }

  const [expanded, setExpanded] = useState(true)

  return (
    <Box>
      <SubjectTile changeCourseName={changeCourseName} courseIndex={courseIndex} courseArray={courseArray}
        updateCourseArray={updateCourseArray} expand={() => setExpanded(!expanded)}
      />
      <Collapse in={expanded}>
        <Box sx={{ width: "98%" }}>
          {
            course.topics?.map((topic, topicIndex, topicArr) => {
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


function TopicTileBox({ topic, topicIndex, topicArray, changeTopicName, addNewSubTopic, courseIndex, courseArray, updateCourseArray }) {
  const updateSubTopic = () => {

    let newSubTopic = {
      id: generateKey(),
      "name": "newSubTopic"
    }

    let newTopicArray = [...topicArray]
    if (newTopicArray[topicIndex].hasOwnProperty('subTopics')) {
      newTopicArray[topicIndex].subTopics.push(newSubTopic)
    } else {
      newTopicArray[topicIndex].subTopics = [newSubTopic]
    }
    addNewSubTopic(newTopicArray)
  }
  const [expand, setIsExpand] = useState(true)
  return (
    <Box>
      <TopicTile changeTopicName={changeTopicName} topicIndex={topicIndex} topicArray={topicArray} addSubTopics={updateSubTopic} updateCourseArray={updateCourseArray} courseArray={courseArray} courseIndex={courseIndex} expand={() => setIsExpand(!expand)} />
      <Collapse in={expand}>
        <Box sx={{ width: "98%", marginLeft: '1%' }}>
          {
            topic.subTopics?.map((subTopic, subTopicIndex, subTopicArray) => {
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
                // updateCourseArray={updateCourseArray}
              />
            })
          }
        </Box>
      </Collapse>
    </Box>
  )
}
