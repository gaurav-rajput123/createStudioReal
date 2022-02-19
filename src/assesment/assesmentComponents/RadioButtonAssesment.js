import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import CheckCard from "../vaibhav/RadioButtons";
import Videoheader from "../Vikram/Header";


export default function RadioButtonAssesment({color, updateAssesment, index}){
    let [question, setQuestion] = useState('Add the questions text,or prompt here.This text is required.')
    useEffect(()=>{
        console.log("ad")
    }, [question])
     return (
        <div>
            <Videoheader changeQuestion={setQuestion} title={"Check Boxes"} color={color}/>
            <CheckCard question={question} updateAssesment={updateAssesment} index={index}/>
            {/* <Button onClick={()=>console.log(question)}>Check</Button> */}
        </div>
    )
}