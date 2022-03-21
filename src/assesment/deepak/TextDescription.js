import {Button} from "@mui/material";
import React, {useState} from "react";
import TextEditor from "./TextEditor";



const parse = require("html-react-parser")


function TextDescription({getDescription}){
    const [value, setValue] = useState("")
    
    return(
        <div style={{padding:"1%"}}>
            <div>
                
                <TextEditor setValue={setValue}  initialValue={""} getDescription={getDescription}/>  
                
                 </div>
        </div>
    )
}

export default TextDescription;