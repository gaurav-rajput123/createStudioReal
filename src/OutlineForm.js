import { Button, Grid, TextField } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import './add.css'
// import { v4 as uuidv4 } from 'uuid';
import { v4 } from 'uuid';
import { courseArray } from './Context';
function OutlineForm({activeStep, setActiveStep, setShowModal}) {
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

  const deleteTopic = ({modIndex, topicIndex}) => {
    let newModArr = [...moduleArr]
    newModArr[modIndex].topics.splice(topicIndex,1)
    setModuleArray(newModArr)
  }
  const addTopic = ({modIndex})=>{
    let newModArr = [...moduleArr]
    newModArr[modIndex].topics.push({
      id: v4(),
      name: "new Topic",
      subTopics: [
        {id: v4(),
          name: "new subTopic"
        }
      ]
    })
    setModuleArray(newModArr)
  }

  const addSubtopic = ({modIndex, topicIndex}) => {
    let newModArr = [...moduleArr]
    newModArr[modIndex].topics[topicIndex].subTopics.push( {
      name: "new subTopic"
    })
    setModuleArray(newModArr)
  }

  
  const deleteSubtopic = ({modIndex, topicIndex, subTopicIndex}) => {
    let newModArr = [...moduleArr]
    newModArr[modIndex].topics[topicIndex].subTopics.splice(subTopicIndex, 1)
    setModuleArray(newModArr)
  }

  return (
    <Grid container>
      <Grid item xs={6}>
        CourseDetails
      </Grid>
      <Grid item xs={6}>
        {/* Course Buttons */}
        <Button
          onClick={addNewModule}
          sx={{
            paddingY: "12px"
          }}
          fullWidth
          variant='contained'
        >
          Add New Module

        </Button>
      </Grid>
      <Grid item container xs={12}>
        {
          moduleArr.map((mod, modIndex) => {
            console.log("inside mod Arr")
            return (
              <Grid key={mod.id} item container xs={12}>
                <Grid item xs={2} sx={{
                  display: 'flex',
                  flexDirection: "column",

                }}>
                  <div><TitleBox moduleIndex={modIndex} outLine={moduleArr} type={"module"} updateOutLine={setModuleArray} label={"set title for yout module"}/></div>
                  <div style={{ flexGrow: 1 }}></div>
                  <div>
                    <Button variant="contained" sx={{
                      background: "red"
                    }}
                      onClick={() => {
                        deleteModule(modIndex)
                      }}
                    >
                      DELETE THIS MODULE
                    </Button>
                  </div>
                </Grid>
                <Grid item container xs={10}>
                  {
                    mod.topics.map((topic, topicIndex) => {
                      return (
                        <Grid key={topic.id} item container xs={12}>
                          <Grid item xs={4} sx={{
                            display: 'flex',
                            flexDirection: "column",

                          }}>
                            {/* <div>{topic.name}</div> */}
                            <div><TitleBox moduleIndex={modIndex} outLine={moduleArr} type={"topic"} updateOutLine={setModuleArray} label={"set title for yout module"} topicIndex={topicIndex}/></div>
                            <div style={{ flexGrow: 1 }}></div>
                            <div>
                              <Button variant="contained" sx={{
                                background: "red"
                              }}
                                onClick={() => {
                                  deleteTopic({modIndex, topicIndex})
                                }}
                              >
                                DELETE topic
                              </Button>
                              <Button variant="contained" sx={{
                                background: "red"
                              }}
                                onClick={() => {
                                  addTopic({modIndex, topicIndex})
                                }}
                              >
                                Add topic
                              </Button>
                              </div>
                          </Grid>
                          <Grid item container xs={8}>
                            {
                              topic.subTopics?.map((subTopic, subTopicIndex) => {
                                return (
                                  <Grid key={subTopic.id} item xs={12}>
                                    <div><TitleBox moduleIndex={modIndex} outLine={moduleArr} type={"subtopic"} updateOutLine={setModuleArray} label={"set title for yout module"} topicIndex={topicIndex} subTopicIndex={subTopicIndex}/></div>
                                   <Button variant="contained" sx={{
                                background: "red"
                              }}
                                onClick={() => {
                                  deleteSubtopic({modIndex, topicIndex, subTopicIndex})
                                }}
                              >
                                DELETE subtopic
                              </Button>
                                  </Grid>
                                )
                              })
                            }
                             <Button variant="contained" sx={{
                                background: "red"
                              }}    
                                onClick={() => {
                                  addSubtopic({modIndex, topicIndex})
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
      <Button onClick={()=>{
        const newModArr = [...moduleArr]
        courseContext.setCourseState({...courseContext, data: newModArr})
        setShowModal(false)
      }}> see</Button>
    </Grid>
  )
}

function TitleBox({updateOutLine, outLine, label, moduleIndex, topicIndex, subTopicIndex, type}){
  const [isSet, setIsSet] = useState(true)
  const [title, setTitle] = useState('')
  useEffect(()=>{
    console.log("The title is ", title)
    console.log("the isSet is ", isSet)
  }) 
  const addModuleTitle = () =>{
    if(!isSet){let newOutLine = [...outLine]
    newOutLine[moduleIndex].name = title
    updateOutLine(newOutLine)
    setIsSet(!isSet)
  }else{
    setIsSet(!isSet)
  }}
  const addTopicTitle = () =>{
    if(!isSet){
      let newOutLine = [...outLine]
    console.log("inside topic time")
    newOutLine[moduleIndex].topics[topicIndex].name = title
    updateOutLine(newOutLine)
    setIsSet(!isSet)
    }else{
      setIsSet(!isSet)
    }
  }
  const addSubTopicTitle = () => {
    if(!isSet){
      let newOutLine = [...outLine]
    newOutLine[moduleIndex].topics[topicIndex].subTopics[subTopicIndex].name = title
    updateOutLine(newOutLine)
    setIsSet(!isSet)
    }else{
      setIsSet(!isSet)
    }
  }
  return(
    <div>
      {
        !isSet ? 
        (
        <>
          <TextField 
          variant='filled'
          placeholder='set name' 
          label={label} 
          value={title} 
          onChange={(e)=>setTitle(e.target.value)}
          />
        </>)
         : 
         (
        <span style={{
          border: "2px solid red", width: "200px !important"
        }}>
        {title}
        </span>
        )
      }
      {/* <label>{title}</label> */}
       {
            type === "module" ? (<Button variant='outlined' onClick={()=>{
              addModuleTitle()
            }}>Update module Title</Button>) 
            : (
              type === "topic" ?
              (
                <Button variant='outlined' onClick={()=>{
                  addTopicTitle()
                }}>Update topic Title</Button>
              ) : (
                <Button variant='outlined' onClick={()=>{
                  addSubTopicTitle()
                }}>Update subtopic Title</Button>
              )
            )
          }
    </div>
  )
}

export default OutlineForm