import { Button } from "@mui/material";
import React, { useState } from "react";
import '../App.css';
import TextEditor from './TextEditor';
// import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
const parse = require('html-react-parser')
const config = {
  buttons: ["bold", "italic", "underline", "center", "left"]
}

function TextDescription({ getDescription, titleDescription, skipDescription, add }) {
  const [value, setValue] = useState("")


  return (
    <div style={{ padding: '1%' }}>
      <div style={{
        // textAlign: 'center'
      }}>
        <div style={{ textAlign: "center" }}>
          <h3>{titleDescription}</h3>

        </div>
        <TextEditor setValue={setValue} config={config} />
        <div style={{
          display: "flex"
        }}>
        <Button variant="contained" onClick={() => getDescription(value)} fullWidth sx={{
          padding: "12px",
          marginY: "12px",
          // marginLeft: "12px",
          // marginRight: "24px"
          width: "40%",
          marginX: "12px"
        }}>Add Description</Button>
        <div style={{flexGrow: 1}}/>
        <Button variant="contained" onClick={() => skipDescription()} fullWidth sx={{
          padding: "12px",
          marginY: "12px",
          // marginLeft: "12px",
          // marginRight: "24px"
          width: "15%",
          marginX: "12px"
        }}>Skip Description</Button>
        <Button variant="contained" onClick={() => add()} fullWidth sx={{
          padding: "12px",
          marginY: "12px",
          // marginLeft: "12px",
          // marginRight: "24px"
          width: "15%",
          marginX: "12px"
        }}>{titleDescription?.toLowerCase() === 'module description' ? (<>Add new topic</>) : (titleDescription?.toLowerCase() === 'topic description' ? (<>Add new Subtopics</>) : <>Add assessments</>)}</Button>
        {/* <Button variant="contained" onClick={() => getDescription(value)} fullWidth sx={{
          padding: "12px",
          marginY: "12px",
          // marginLeft: "12px",
          // marginRight: "24px"
          width: "15%",
          marginX: "12px"
        }}>Add Description</Button>   */}
        </div>
      </div>

    </div>
  );
}

export default TextDescription;
