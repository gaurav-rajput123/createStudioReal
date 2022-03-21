import { Button,  Grid, TextField, Card} from "@mui/material";
import { useEffect, useState } from "react";
// import styled from '@emotion/styled';
import "./App.css";
// import { v4 as uuidv4 } from 'uuid';
import { v4 } from "uuid";

function OutlineForm() {
  const [moduleArr, setModuleArray] = useState([
    {
      name: "module 1",
      topics: [
        {
          name: "topic1",
          subTopics: [
            {
              name: "subtoipic 1",
            },
            {
              name: "subtoipic 2",
            },
            {
              name: "subtoipic 3",
            },
            {
              name: "subtoipic 4",
            },
          ],
        },
        {
          name: "topic2",
          subTopics: [
            {
              name: "subtoipic 1",
            },
          ],
        },
        {
          name: "topic3",
          subTopics: [
            {
              name: "subtoipic 1",
            },
          ],
        },
      ],
    },
  ]);

  const addNewModule = () => {
    let newModArr = [...moduleArr];
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
              id: v4(),
            },
          ],
        },
      ],
    };
    newModArr.push(newModule);
    setModuleArray(newModArr);
  };

  const deleteModule = (index) => {
    let newModArr = [...moduleArr];
    newModArr.splice(index, 1);
    setModuleArray(newModArr);
  };

  const deleteTopic = ({ modIndex, topicIndex }) => {
    let newModArr = [...moduleArr];
    newModArr[modIndex].topics.splice(topicIndex, 1);
    setModuleArray(newModArr);
  };
  const addTopic = ({ modIndex }) => {
    let newModArr = [...moduleArr];
    newModArr[modIndex].topics.push({
      id: v4(),
      name: "new Topic",
      subTopics: [{ id: v4(), name: "new subTopic" }],
    });
    setModuleArray(newModArr);
  };

  const addSubtopic = ({ modIndex, topicIndex }) => {
    let newModArr = [...moduleArr];
    newModArr[modIndex].topics[topicIndex].subTopics.push({
      name: "new subTopic",
    });
    setModuleArray(newModArr);
  };

  const deleteSubtopic = ({ modIndex, topicIndex, subTopicIndex }) => {
    let newModArr = [...moduleArr];
    newModArr[modIndex].topics[topicIndex].subTopics.splice(subTopicIndex, 1);
    setModuleArray(newModArr);
  };

  return (
    <Grid
      container
      sx={{
        width: "100%",
      }}
    >
      <Grid item xs={12}>
        <Card
          className="cardColor"
          sx={{
            // display: "flex",
            // width: "auto",
            // height: "auto",
            // marginLeft: "80px",
            padding:"20px",
            margin: "20px",
            
            borderRadius: "20px",
            // backgroundImage: "linear-gradient(150deg, #4b6cb7 0%, #182848 50%)",
            backgroundColor:"white"
          }}
        >
          
            <Grid container>
              <Grid item xs={12} className="course-details"
              sx={{
                display:"flex",
                justifyContent:"center"
              }}
              >
                Course Outline
              </Grid>
              <Grid item xs={12}
              sx={{
                display:"flex",
                justifyContent:"center"
              }}
              >
                {/* Course Buttons */}
                <Button
                  className="add-button"
                  onClick={addNewModule}
                  sx={{
                    paddingY: "12px",
                    
                    
                    width: "400px",
                    borderRadius: "5px",
                    // backgroundColor: "#1A1A40"
                  }}
                  fullWidth
                  variant="contained"
                >
                  Add New Module
                </Button>
              </Grid>

              <Grid item container xs={12}
              sx={{padding:"20px"}}
              >
                {moduleArr.map((mod, modIndex) => {
                  console.log("inside mod Arr");
                  return (
                    <Grid key={mod.id} item container xs={12}
                    sx={{
                      marginY: "12px",
                      // border: "1px solid black",
                      backgroundColor:"#F0F0F0",
                      padding: "6px 2px",
                      
                    }}
                    >
                      <Grid
                        item
                        xs={3}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <div >
                          <TitleBox
                            moduleIndex={modIndex}
                            outLine={moduleArr}
                            type={"module"}
                            updateOutLine={setModuleArray}
                            label={"set title for yout module"}
                          />
                        </div>
                        <div style={{ flexGrow: 1 }}></div>
                        <div>
                          <Button
                            variant="contained"
                            sx={{
                              background: "#1A1A40",
                            }}
                            onClick={() => {
                              deleteModule(modIndex);
                            }}
                          >
                            DELETE THIS MODULE
                          </Button>
                        </div>
                      </Grid>
                      <Grid item container xs={9} 
                      
                      >
                        {mod.topics.map((topic, topicIndex) => {
                          return (
                            <Grid key={topic.id} sx={{marginBottom: "12px"}} item container xs={12}
                            
                            
                      
                            >
                              <Grid
                                item
                                xs={6}
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  
                                }}
                              >
                                {/* <div>{topic.name}</div> */}
                                <div  style={{
                                  display: "flex",
                                  // flexDirection
                                }}>
                                <div>
                                  <TitleBox
                                    moduleIndex={modIndex}
                                    outLine={moduleArr}
                                    type={"topic"}
                                    updateOutLine={setModuleArray}
                                    label={"set title for yout module"}
                                    topicIndex={topicIndex}
                                  />
                                </div>
                               
                                <div 
                                  
                              
                                   
                                  >
                                  <Button
                                    variant="contained"
                                    sx={{
                                      background: "#1A1A40",
                                      marginLeft:"40px"
                                      
                                    }}
                                    onClick={() => {
                                      deleteTopic({ modIndex, topicIndex });
                                    }}
                                  >
                                    DELETE topic
                                  </Button>
                                 
                                </div>
                                </div>
                                <Button
                                    variant="contained"
                                    sx={{
                                      background: "#1A1A40",
                                      // margin:"10px",
                                      width:"150px",
                                      marginTop:"30px"
                                    }}
                                    onClick={() => {
                                      addTopic({ modIndex, topicIndex });
                                    }}
                                  >
                                    ADD topic
                                  </Button>
                              </Grid>
                              <Grid item container xs={6}
                            
                              >
                                {topic.subTopics?.map(
                                  (subTopic, subTopicIndex) => {
                                    return (
                                      <Grid key={subTopic.id} item xs={12}
                                      sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        marginY:"12px",
                                        marginTop:"-1px"
                                      }}
                                      >
                                        <div>
                                          <TitleBox
                                            moduleIndex={modIndex}
                                            outLine={moduleArr}
                                            type={"subtopic"}
                                            updateOutLine={setModuleArray}
                                            label={"set title for yout module"}
                                            topicIndex={topicIndex}
                                            subTopicIndex={subTopicIndex}
                                          />
                                        </div>
                                        <Button
                                          variant="contained"
                                          sx={{
                                            background: "#1A1A40",
                                            marginLeft:'100px',
                                            height:"40px"
                                            
                                          }}
                                          onClick={() => {
                                            deleteSubtopic({
                                              modIndex,
                                              topicIndex,
                                              subTopicIndex,
                                            });
                                          }}
                                        >
                                          DELETE subtopic
                                        </Button>
                                      </Grid>
                                    );
                                  }
                                )}
                                <Button
                                  variant="contained"
                                  sx={{
                                    background: "#1A1A40",
                                    marginLeft:"5px",
                                    height:"35px",
                                    marginTop:'15px'
                                  }}
                                  onClick={() => {
                                    addSubtopic({ modIndex, topicIndex });
                                  }}
                                >
                                  add subtopic
                                </Button>
                              </Grid>
                            </Grid>
                          );
                        })}
                      </Grid>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <Button onClick={() => console.log(moduleArr)}> see</Button>
        
        </Card>
      </Grid>
    </Grid>
  );
}

function TitleBox({
  updateOutLine,
  outLine,
  label,
  moduleIndex,
  topicIndex,
  subTopicIndex,
  type,
}) {
  const [isSet, setIsSet] = useState(true);
  const [title, setTitle] = useState("");
  useEffect(() => {
    console.log("The title is ", title);
    console.log("the isSet is ", isSet);
  });
  const addModuleTitle = () => {
    if (!isSet) {
      let newOutLine = [...outLine];
      newOutLine[moduleIndex].name = title;
      updateOutLine(newOutLine);
      setIsSet(!isSet);
    } else {
      setIsSet(!isSet);
    }
  };
  const addTopicTitle = () => {
    if (!isSet) {
      let newOutLine = [...outLine];
      console.log("inside topic time");
      newOutLine[moduleIndex].topics[topicIndex].name = title;
      updateOutLine(newOutLine);
      setIsSet(!isSet);
    } else {
      setIsSet(!isSet);
    }
  };
  const addSubTopicTitle = () => {
    if (!isSet) {
      let newOutLine = [...outLine];
      newOutLine[moduleIndex].topics[topicIndex].subTopics[subTopicIndex].name =
        title;
      updateOutLine(newOutLine);
      setIsSet(!isSet);
    } else {
      setIsSet(!isSet);
    }
  };
  return (
    <div>
      {!isSet ? (
        <>
          <TextField
            variant="filled"
            placeholder="set name"
            label={label}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </>
      ) : (
        <span
          style={{
            border: "1px solid #1a1a40",
            width: "200px !important",

          }}
        >
          {title}
        </span>
      )}
      {/* <label>{title}</label> */}
      {type === "module" ? (
        <Button
          variant="outlined"
          onClick={() => {
            addModuleTitle();
          }}
        >
          Update module Title
        </Button>
      ) : type === "topic" ? (
        <Button
          variant="outlined"
          onClick={() => {
            addTopicTitle();
          }}
        >
          Update topic Title
        </Button>
      ) : (
        <Button
          variant="outlined"
          onClick={() => {
            addSubTopicTitle();
          }}
        >
          Update subtopic Title
        </Button>
      )}
    </div>
  );
}

export default OutlineForm;
