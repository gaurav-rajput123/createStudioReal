import React, {useRef} from "react";
import JoditEditor from "jodit-react";
import { useState } from "react";
// import './App.css';

import { Box } from "@mui/system";
const parse = require('html-react-parser')
const TextEditor = ({setValue , config, initialValue}) => {
    const editor = useRef(null)
     
    const [val, setVal] = useState('')


    return( 
        <div
        
        // onBlur={()=>{
        //     console.log("here")
        //     setValue(val)
        // }}
            
        
        ><JoditEditor 
        ref={editor} 
        onChange={content => {
            // setValue(parse(content).props.children)
            let act = parse(content)
            setValue(act)
        }}
        config= {config}
        value={initialValue}
        /></div>
    )
}

export default TextEditor;