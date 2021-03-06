import React, { useContext, useState } from "react";
import Butn from "./Butn";
import { Paper, Box, Button, Card, Collapse, Grid, Typography, Modal } from "@mui/material";
import SubjectTile from "./SubjectTile";
import TopicTile from "./TopicTile";
import SubTopicTile from "./SubTopicTile";
import generateKey from "../resources/generateKey";
import { formContext, UserContext } from "../Context";
import axios from "axios";
import { courseArray } from "../Context";
import { useEffect } from "react";
import { stepNumber } from "../Context";
import { LinearProgress } from "@mui/material";
import EditBasicDetails from "./EditBasicDetail";

export default function Middle({ myCourses, isOnCoursePage }) {
  const userContext = useContext(UserContext);
  const [show, setShow] = useState("none");
  const [uploaded, setUploaded] = useState(0);
  const counter = useContext(stepNumber);
  const courseContext = useContext(courseArray);
  const [courses, setCourses] = useState([...courseContext.data]);
  const [isModalOpen, setIsModalOpen] = useState(false)
  useEffect(() => {
    if (courseContext.data.length === 0) {
      counter.setVal(1);
    }
    setCourses(courseContext.data);
  }, [courseContext.data]);
  useState(() => {
    console.log("hello");
  });
  const addNewSection = () => {
    let newCourses = [...courses];
    newCourses.push({
      id: generateKey(),
      name: "New Module",
    });
    courseContext.setCourseState({ ...courseContext, data: newCourses });
  };
  const formData = useContext(formContext);

  const updateCourse = (course, index) => {
    let newCourseObj = [...courses];
    newCourseObj[index] = course;
  };

  const changeCourseName = (courseIndex, courseArray, labelVal) => {
    let newCourseObj = { ...courseArray[courseIndex] };
    newCourseObj.name = labelVal;
    let newCourseArray = [...courseArray];
    newCourseArray[courseIndex] = newCourseObj;
  };

  const updateCourseArray = (updatedCourseArray) => {
    let newUpdatedCourseArray = [...updatedCourseArray];
    courseContext.setCourseState({
      ...courseContext,
      data: newUpdatedCourseArray,
    });
  };

  const closeModal = () =>{
    setIsModalOpen(false)
  }

  const resetCourse = () => {
    let newCourseContent = { ...courseContext };
    newCourseContent.courseDesciption = "";
    newCourseContent.courseDuration = "";
    newCourseContent.courseId = "";
    newCourseContent.courseNumber = "";
    newCourseContent.courseTitle = "";
    newCourseContent.data = [];
    newCourseContent.organisation = "";
    newCourseContent.orginal = "";
    newCourseContent.selling = "";
    newCourseContent.skillsGained = [];
    localStorage.removeItem("courseContext");
    courseContext.setCourseState(newCourseContent);
  };
  return (
    <Box
      className="box-lista"
      style={{
        padding: "6px 0px",
        margin: "0px 10px 0px 12px",
        width: "98%",
        zIndex: 2,
      }}
    >
      {
        courseContext.data.length != 0 ? (
          <div>
            <Grid
              container
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <Butn Text="Select Course" disabled />
              <Butn Text="Add Module" clickHoja={addNewSection} />
              <Butn
                Text="Reset"
                clickHoja={() => {
                  resetCourse();
                }}
              />
              <Butn Text="Live View" disabled />
              <Butn Text=" Save" disabled />
            </Grid>
            <>
            {isOnCoursePage ? (
              <Box>
                <Typography fontSize={'24px'} fontWeight={800}>
                  Basic Course Details
                </Typography>

                <Box display={'flex'} justifyContent={'flex-end'}>
                  <Button variant="contained" sx={{marginRight: "24px"}} onClick={()=>setIsModalOpen(true)}>
                    EDIT
                  </Button>
                  <Modal
                    open={isModalOpen}
                    onClose={closeModal}
                    sx={{
                      overflowY: "scroll",
                      marginX: "24px"
                    }}>
                      <EditBasicDetails closeModal={closeModal}/>
                    </Modal>
                </Box>
                <b>Course Title : </b>{courseContext.courseTitle}
                <br/>
                <br/>
                <b>Course Description : </b>{courseContext.courseDesciption}
                <br/>
                <br/>
                <b>Course Id : </b>{courseContext.courseId}
                
              </Box>
            ): null}
            </>
            <Paper
              style={{
                backgroundColor: "white",
                alignItems: "flex-start",
                height: "auto",
                borderRadius: "15px",
                paddingBottom: "1%",
                paddingTop: "1%",
              }}
            >
              {courses.map((item, index) => {
                return (
                  <MainTile
                    key={item.id}
                    course={item}
                    courseIndex={index}
                    courseArray={courses}
                    updateCurrentCourse={updateCourse}
                    changeCourseName={changeCourseName}
                    updateCourseArray={updateCourseArray}
                  />
                );
              })}
            </Paper>

            <div
              style={{
                marginTop: "24px",
                marginBottom: "12px",
              }}
            >
              <Button
                onClick={() => {
                  let localCourseContext = JSON.stringify(courseContext);
                  localStorage.setItem("courseContext", localCourseContext);
                  counter.increment();
                  const data = {
                    name: courseContext.courseTitle,
                    data: courses,
                  };
                  formData.set("courseDataa", JSON.stringify(data));
                  console.log(courses);
                  const courseMetadata = {
                    id: courseContext.courseId,
                    description: courseContext.courseDesciption,
                    duration: courseContext.courseDuration,
                    number: courseContext.courseNumber,
                    title: courseContext.courseTitle,
                    organisation: courseContext.organisation,
                    orginal: courseContext.orginal,
                    selling: courseContext.selling,
                    requirement: courseContext.requirement,
                    skills: [...courseContext.skillsGained],
                    category: courseContext.category,

                  };
                  formData.set("metadata", JSON.stringify(courseMetadata));
                  formData.set(
                    "user",
                    JSON.stringify({
                      id: userContext.user.id,
                    })
                  );
                }}
                sx={{
                  marginRight: "36px",
                }}
                variant="contained"
              >
                update course
              </Button>
              <Button
                onClick={() => {
                  setShow("block");
                  counter.increment();
                  axios({
                    url: "https://api.keewesolutions.com/get",
                    // url: "http://localhost:8080/get",
                    data: formData,
                    method: "POST",
                    onUploadProgress: (data) => {
                      setUploaded(Math.round((data.loaded / data.total) * 100));

                      console.log(Math.round((data.loaded / data.total) * 100));
                    },
                  })
                    .then((res) => console.log(res))
                    .catch((r) => console.log(r));
                }}
                sx={{
                  marginRight: "36px",
                }}
                variant="contained"
              >
                upload course and save
              </Button>
              {/* <Button onClick={() => console.log(courseContext)}>
                see context
              </Button> */}
              <Box display={show} sx={{ marginTop: "2%" }}>
                <LinearProgress variant="determinate" value={uploaded} />
                {`${uploaded}%`}
              </Box>

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
        // (
        //   <div>
        //     <Paper style={{ backgroundColor: "white", alignItems: "flex-start", height: "auto", borderRadius: "15px", paddingBottom: '1%' }}>

        //       <div style={{ display: "flex", justifyContent: 'space-around' }}>
        //         <Butn Text="Select Course" disabled />
        //         <Butn Text="Add Module" clickHoja={addNewSection} />
        //         <Butn Text="Collapse All" disabled />
        //         <Butn Text="Live View" disabled />
        //         <Butn Text=" Save" disabled />
        //       </div>
        //       <Card />
        //       {courses.map((item, index) => {
        //         return (
        //           <MainTile key={item.id} course={item} courseIndex={index} courseArray={courses} updateCurrentCourse={updateCourse}
        //             changeCourseName={changeCourseName}
        //             updateCourseArray={updateCourseArray}
        //           />
        //         )
        //       })}
        //     </Paper>
        //     <div style={{
        //       marginTop: "24px",
        //       marginBottom: "12px"
        //     }}>
        //       <Button onClick={() => {

        //         let localCourseContext = JSON.stringify(courseContext)
        //         localStorage.setItem('courseContext', localCourseContext)
        //         counter.increment()
        //         const data = {
        //           name: "hello",
        //           data: courses
        //         }
        //         formData.set('courseDataa', JSON.stringify(data))
        //         console.log(courses)
        //         const courseMetadata = {
        //           id: courseContext.courseId,
        //           description : courseContext.courseDesciption,
        //           duration: courseContext.courseDuration,
        //           number: courseContext.courseNumber,
        //           title: courseContext.courseTitle,
        //           organisation: courseContext.organisation,
        //           requirement: courseContext.requirement,
        //           skills: [...courseContext.skillsGained]
        //         }
        //         formData.set("metadata", JSON.stringify(courseMetadata))
        //         formData.set('user', JSON.stringify({
        //           id: "12345"
        //         }))
        //       }}
        //         sx={{
        //           marginRight: "36px",

        //         }}
        //         variant="contained"

        //       >
        //         update course
        //       </Button>
        //       <Button onClick={() => {
        //         // localStorage.removeItem('courseContext')
        //         setShow("block")
        //         counter.increment()
        //         axios({
        //           url: 'https://api.keewesolutions.com/get',
        //           // url: "http://localhost:8080/get",
        //           data: formData,
        //           method: "POST",
        //           onProgress: (data) => {
        //             setUploaded(Math.round((data.loaded/data.total)* 100));

        //             console.log(Math.round((data.loaded/data.total)* 100));
        //           }
        //         }).then(res => console.log(res)).catch(r => console.log(r))

        //       }}
        //         sx={{
        //           marginRight: "36px",

        //         }}
        //         variant="contained"
        //       >
        //         upload course and save
        //       </Button>

        //       <Box display={show} sx={{marginTop:'2%'}}>
        //       <LinearProgress variant="determinate" value={uploaded} />
        //       {`${uploaded}%`}
        //       </Box>

        //       {/* <Button onClick={() => console.log(courseContext)}>doit</Button>
        //       <Button onClick={() => {
        //         console.log("hello")
        //         for (var pair of formData.entries()) {
        //           console.log("here")
        //           console.log(pair[0]+ ', ' + pair[1]);
        //       }
        //       }}>here</Button> */}
        //     </div>
        //   </div>
        // )
      }
    </Box>
  );
}

//  For Courses
function MainTile({
  course,
  courseIndex,
  courseArray,
  updateCurrentCourse,
  changeCourseName,
  updateCourseArray,
}) {
  const updateTopicName = (newTopicName, topicIndex, topicArray) => {
    let newTopicObject = { ...topicArray[topicIndex] };
    newTopicObject.name = newTopicName;
    let newTopicArray = [...topicArray];
    newTopicArray[topicIndex] = newTopicObject;
    let newCourseObject = { ...course };
    newCourseObject.topics = newTopicArray;
    updateCurrentCourse(newCourseObject, courseIndex);
  };

  const addNewSubTopic = (newTopicArray) => {
    let newCourseObject = { ...course };
    newCourseObject.topics = newTopicArray;
    updateCurrentCourse(newCourseObject, courseIndex);
  };

  const [expanded, setExpanded] = useState(true);

  return (
    <Box>
      <SubjectTile
        changeCourseName={changeCourseName}
        courseIndex={courseIndex}
        courseArray={courseArray}
        updateCourseArray={updateCourseArray}
        expand={() => setExpanded(!expanded)}
      />
      <Collapse in={expanded}>
        <Box sx={{ width: "98%" }}>
          {course.topics?.map((topic, topicIndex, topicArr) => {
            return (
              <TopicTileBox
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
            );
          })}
        </Box>
      </Collapse>
    </Box>
  );
}

function TopicTileBox({
  topic,
  topicIndex,
  topicArray,
  changeTopicName,
  addNewSubTopic,
  courseIndex,
  courseArray,
  updateCourseArray,
}) {
  const updateSubTopic = () => {
    let newSubTopic = {
      id: generateKey(),
      name: "newSubTopic",
    };

    let newTopicArray = [...topicArray];
    if (newTopicArray[topicIndex].hasOwnProperty("subTopics")) {
      newTopicArray[topicIndex].subTopics.push(newSubTopic);
    } else {
      newTopicArray[topicIndex].subTopics = [newSubTopic];
    }
    addNewSubTopic(newTopicArray);
  };
  const [expand, setIsExpand] = useState(true);
  return (
    <Box>
      <TopicTile
        changeTopicName={changeTopicName}
        topicIndex={topicIndex}
        topicArray={topicArray}
        addSubTopics={updateSubTopic}
        updateCourseArray={updateCourseArray}
        courseArray={courseArray}
        courseIndex={courseIndex}
        expand={() => setIsExpand(!expand)}
      />
      <Collapse in={expand}>
        <Box sx={{ width: "98%", marginLeft: "1%" }}>
          {topic.subTopics?.map((subTopic, subTopicIndex, subTopicArray) => {
            return (
              <SubTopicTile
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
            );
          })}
        </Box>
      </Collapse>
    </Box>
  );
}
