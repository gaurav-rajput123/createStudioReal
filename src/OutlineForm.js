import { Button, Grid, TextField, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import './add.css'
// import { v4 as uuidv4 } from 'uuid';
import { v4 } from 'uuid';
import { courseArray } from './Context';
function OutlineForm({ activeStep, setActiveStep, setShowModal }) {
  const courseContext = useContext(courseArray)
  const [moduleArr, setModuleArray] = useState([
    {
      name: "module 1",
      topics: [{
        name: "topic1",
        subTopics: [{
          name: "subtoipic 1"
        },
        {
          name: "subtoipic 2"
        },
        {
          name: "subtoipic 3"
        },
        {
          name: "subtoipic 4"
        }]
      },
      {
        name: "topic2",
        subTopics: [{
          name: "subtoipic 1"
        }]
      },
      {
        name: "topic3",
        subTopics: [{
          name: "subtoipic 1"
        }]
      }
      ]
    }
  ])

  const addNewModule = () => {
    let newModArr = [...moduleArr]
    let newModule = {
      id: v4(),
      name: "new Module",
      topics: [
        {
          name: "new Topic",
          id: v4(),
          subTopics: [
            {
              name: "new subTopic",
              id: v4()
            }
          ]
        }
      ]
    }
    newModArr.push(newModule)
    setModuleArray(newModArr)
  }

  const deleteModule = (index) => {
    let newModArr = [...moduleArr]
    newModArr.splice(index, 1)
    setModuleArray(newModArr)
  }

  const deleteTopic = ({ modIndex, topicIndex }) => {
    let newModArr = [...moduleArr]
    newModArr[modIndex].topics.splice(topicIndex, 1)
    setModuleArray(newModArr)
  }
  const addTopic = ({ modIndex }) => {
    let newModArr = [...moduleArr]
    newModArr[modIndex].topics.push({
      id: v4(),
      name: "new Topic",
      subTopics: [
        {
          id: v4(),
          name: "new subTopic"
        }
      ]
    })
    setModuleArray(newModArr)
  }

  const addSubtopic = ({ modIndex, topicIndex }) => {
    let newModArr = [...moduleArr]
    newModArr[modIndex].topics[topicIndex].subTopics.push({
      name: "new subTopic"
    })
    setModuleArray(newModArr)
  }


  const deleteSubtopic = ({ modIndex, topicIndex, subTopicIndex }) => {
    let newModArr = [...moduleArr]
    newModArr[modIndex].topics[topicIndex].subTopics.splice(subTopicIndex, 1)
    setModuleArray(newModArr)
  }

  return (
    <Grid container sx={{
      background: "white",
      paddingY: "12px"
    }}>
      <Grid item xs={9} sx={{
       
        border: "1px solid black",
        paddingX: "12px",
        paddingY: "12px",
        display: "flex",
        justifyContent: "space-evenly"
      }}>
        
        <span style={{
          marginX: "12px",
          fontSize: "18px"
        }}>course Title: {courseContext.courseTitle}</span>
        <br/>
        <br/>
        <span style={{
          marginX: "12px"
        }}>course Number: {courseContext.courseNumber}</span>
        <br/>
        <br/>
        <span style={{
          marginX: "12px"
        }}>course Duration: {courseContext.courseDuration}</span>
        <br/>
        <br/>
        <span> skills Gained: </span>
        
         
           { courseContext.skillsGained.map(item=>{
            return (
              
                <span style={{
                marginX: "12px",
                // marginRight: "24px",
                backgroundColor: "#0047ab",
                borderRadius: "12px",
                padding: "6px",
                color: "white"

              }} key={item}>{item}</span>
              
            )
          })
        }
        {/* <Typography textAlign={'center'} >
          CourseDetails
        </Typography> */}

      </Grid>
      <Grid item xs={3}
        sx={{
          height: "60px"
        }}>
        {/* Course Buttons */}
        <Button
          onClick={addNewModule}
          sx={{
            paddingY: "12px",

          }}
          fullWidth
          variant='contained'
        >
          Add New Module

        </Button>
      </Grid>
      <Grid item container xs={12}
        sx={{
          paddingX: "80px",
          marginX: "auto",
          display: "flex",
          justifyContent: "center"
        }}>
        {
          moduleArr.map((mod, modIndex) => {
            // console.log("inside mod Arr")
            return (
              <Grid key={mod.id} item container xs={12} sx={
                {
                  boxShadow: "0px 10px 5px #888, 0px -8px 3px #888",
                  borderRadius: "12px",
                  padding: "12px",
                  marginBottom: "6px"
                }
              }>
                <Grid item xs={3} sx={{
                  display: 'flex',
                  flexDirection: "column",
                  border: "0.5px solid gray",
                }}>
                  <div><TitleBox moduleIndex={modIndex} outLine={moduleArr} type={"module"} updateOutLine={setModuleArray} label={"set title for your module"} /></div>
                  <div style={{ flexGrow: 1 }}></div>
                  <div style={{
                    textAlign: "center"
                  }}>
                    <Button variant="contained" sx={{
                      background: "#0047ab",
                      borderRadius: "8px",
                      fontSize: "16px"
                    }}
                      onClick={() => {
                        deleteModule(modIndex)
                      }}
                    >
                      DELETE THIS MODULE
                    </Button>
                  </div>
                </Grid>
                <Grid item container xs={9}>
                  {
                    mod.topics.map((topic, topicIndex) => {
                      return (
                        <Grid key={topic.id} item container xs={12} >
                          <Grid item xs={6} sx={{
                            display: 'flex',
                            flexDirection: "column",
                            
                            border: "0.5px solid gray"
                          
                          }}>
                            {/* <div>{topic.name}</div> */}
                            <div><TitleBox moduleIndex={modIndex} outLine={moduleArr} type={"topic"} updateOutLine={setModuleArray} label={"set title for your topic"} topicIndex={topicIndex} /></div>
                            <div style={{ flexGrow: 1 }}></div>
                            <div style={{
                              display: "flex",
                              justifyContent: "space-evenly"
                            }}>
                              <Button variant="contained" sx={{
                                background: "#0047ab",
                                borderRadius: "8px",
                                fontSize: "16px"
                              }}
                                onClick={() => {
                                  deleteTopic({ modIndex, topicIndex })
                                }}
                              >
                                DELETE topic
                              </Button>
                              <Button variant="contained" sx={{
                                background: "#0047ab",
                                borderRadius: "8px",
                                fontSize: "16px"
                              }}
                                onClick={() => {
                                  addTopic({ modIndex, topicIndex })
                                }}
                              >
                                Add topic
                              </Button>
                            </div>
                          </Grid>
                          <Grid item container xs={6}>
                            {
                              topic.subTopics?.map((subTopic, subTopicIndex) => {
                                return (
                                  <Grid key={subTopic.id} item xs={12}
                                  sx={{
                                    display: 'flex',
                                    flexDirection: "column",
                                    
                                    border: "0.5px solid gray"
                                  
                                  }}
                                  >
                                    <div style={{
                                      display:"flex",
                                      justifyContent: "space-evenly",
                                      padddingY :"12px",
                                      margin: "12px"
                                    }}>
                                      <TitleBox moduleIndex={modIndex} outLine={moduleArr} type={"subtopic"} updateOutLine={setModuleArray} label={"set title for your subtopic"} topicIndex={topicIndex} subTopicIndex={subTopicIndex} />
                                      <Button variant="contained" sx={{
                                      background: "#0047ab",
                                      borderRadius: "8px",
                                      fontSize: "16px",
                                      paddingY: "4px",
                                      // line
                                    }}
                                    
                                      onClick={() => {
                                        deleteSubtopic({ modIndex, topicIndex, subTopicIndex })
                                      }}
                                    >
                                      DELETE subtopic
                                    </Button>
                                      </div>
                                    
                                  </Grid>
                                )
                              })
                            }
                            <Button variant="contained" sx={{
                              background: "#0047ab",
                              borderRadius: "8px",
                              fontSize: "16px"
                            }}
                              onClick={() => {
                                addSubtopic({ modIndex, topicIndex })
                              }}
                            >
                              add subtopic
                            </Button>
                          </Grid>
                        </Grid>)
                    })
                  }
                </Grid>
              </Grid>

            )
          })
        }
      </Grid>
      <Button onClick={() => {
        const newModArr = [...moduleArr]
        courseContext.setCourseState({ ...courseContext, data: newModArr })
        setShowModal(false)
      }}
      fullWidth
      variant= "contained"
      sx={{
        marginX: "25%",

      }}> Save Course Outline</Button>
    </Grid>
  )
}

function TitleBox({ updateOutLine, outLine, label, moduleIndex, topicIndex, subTopicIndex, type }) {
  const [isSet, setIsSet] = useState(true)
  const [title, setTitle] = useState('')
  useEffect(() => {
    console.log("The title is ", title)
    console.log("the isSet is ", isSet)
  })
  const addModuleTitle = () => {
    if (!isSet) {
      console.log("0")
      let newOutLine = [...outLine]
      console.log("1")
      newOutLine[moduleIndex].name = title
      console.log("2")
      updateOutLine(newOutLine)
      console.log("3")
      setIsSet(!isSet)
      console.log("4")
    } else {
      setIsSet(!isSet)
    }
  }
  const addTopicTitle = () => {
    if (!isSet) {
      let newOutLine = [...outLine]
      console.log("inside topic time")
      newOutLine[moduleIndex].topics[topicIndex].name = title
      updateOutLine(newOutLine)
      setIsSet(!isSet)
    } else {
      setIsSet(!isSet)
    }
  }
  const addSubTopicTitle = () => {
    if (!isSet) {
      let newOutLine = [...outLine]
      newOutLine[moduleIndex].topics[topicIndex].subTopics[subTopicIndex].name = title
      updateOutLine(newOutLine)
      setIsSet(!isSet)
    } else {
      setIsSet(!isSet)
    }
  }
  return (
    <div style={{
      textAlign: "center"
    }}>
      {
        !isSet ?
          (
            <>
              <TextField
                variant='filled'
                placeholder='set name'
                label={label}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </>)
          :
          (
            <div style={{
              width: "200px !important",
              textAlign: "center"
            }}>
              {
                title.length === 0 ? "Please update this title " : title
              }
            </div>
          )
      }
      {/* <label>{title}</label> */}
      <div style={{
        marginTop: "12px"
      }}>
        {
          type === "module" ? (<Button variant='outlined' onClick={() => {
            addModuleTitle()
          }}>Update module Title</Button>)
            : (
              type === "topic" ?
                (
                  <Button variant='outlined' onClick={() => {
                    addTopicTitle()
                  }}>Update topic Title</Button>
                ) : (
                  <Button variant='outlined' onClick={() => {
                    addSubTopicTitle()
                  }}>Update subtopic Title</Button>
                )
            )
        }
      </div>
    </div>
  )
}

export default OutlineForm