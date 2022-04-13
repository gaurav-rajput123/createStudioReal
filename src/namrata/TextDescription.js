import { Button, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import '../App.css';
import { courseArray } from "../Context";
import generateKey from "../resources/generateKey";
import TextEditor from './TextEditor';

const parse = require('html-react-parser')
const config = {
  buttons: ["bold", "italic", "underline", "center", "left"]
}

function TextDescription({ getDescription, titleDescription, skipDescription, moduleIndex, topicIndex }) {
  const [value, setValue] = useState("")

  const [option, setOption] = useState()
  const courseContext = useContext(courseArray)
  return (
    <div style={{ padding: '1%' }}>
      <div style={{

      }}>
        <div style={{ textAlign: "center" }}>
          <h3>{titleDescription}</h3>

        </div>
        <TextEditor setValue={setValue} config={config} />
        <div style={{
          display: "flex"
        }}>
          <Button variant="contained"
            onClick={() => getDescription(value)}
            fullWidth sx={{
              padding: "12px",
              marginY: "12px",

              width: "20%",
              marginX: "12px"
            }}>Save Description</Button>

          <Button variant="contained" onClick={() => skipDescription()} fullWidth sx={{
            padding: "12px",
            marginY: "12px",

            width: "15%",
            marginX: "12px"
          }}>Skip Description</Button>
          <div style={{ flexGrow: 1 }} />

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
              onChange={(e) => {
                setOption(e.target.value)
              }}

              defaultValue={0}
            > <MenuItem value={0}>Add Desired Field</MenuItem>
              <MenuItem value={10} onClick={() => {
                let newCourseArray = [...courseContext.data]
                newCourseArray.push({
                  id: generateKey(),
                  name: "new Module",
                  topics: [

                  ]
                })
                courseContext.setCourseState({ ...courseContext, data: newCourseArray })
              }}>Add Module</MenuItem>
              <MenuItem value={20}
                onClick={() => {
                  let newCourseArray = [...courseContext.data]
                  if(!newCourseArray[moduleIndex].hasOwnProperty('topics')){
                    newCourseArray[moduleIndex].topics = []
                  }
                  newCourseArray[moduleIndex].topics.push({
                    id: generateKey(),
                    name: "new Topic",
                    subTopics: [

                    ]
                  })
                  courseContext.setCourseState({ ...courseContext, data: newCourseArray })
                }}
              >Add Topic</MenuItem>
              {
                topicIndex !== undefined ? (
                  <MenuItem value={30} onClick={() => {
                    let newCourseArray = [...courseContext.data]
                    if(newCourseArray[moduleIndex].topics[topicIndex].subTopics === undefined){
                      newCourseArray[moduleIndex].topics[topicIndex].subTopics = []
                    }
                    newCourseArray[moduleIndex].topics[topicIndex].subTopics.push({
                      id: generateKey(),
                      name: "new Subtopic",
                      resource: {
                        audio: false,
                        video: false,
                        ppt: false,
                        pdf: false
                      }
                    })
                    courseContext.setCourseState({ ...courseContext, data: newCourseArray })
                  }}>Add Subtopic</MenuItem>
                ) : null
              }
            </Select>
          </FormControl>
        </div>
      </div>

    </div>
  );
}

export default TextDescription;
