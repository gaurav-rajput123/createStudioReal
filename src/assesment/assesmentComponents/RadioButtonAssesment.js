import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import CheckCard from "../vaibhav/RadioButtons";
import Videoheader from "../Vikram/Header";


export default function RadioButtonAssesment({color, updateAssesment, index, moduleIndex, topicIndex, subTopicIndex, assesIndex}){
    let [question, setQuestion] = useState('Add the questions text,or prompt here.This text is required.')
    useEffect(()=>{
        console.log("ad")
    }, [question])
     return (
        <div>
            <Videoheader changeQuestion={setQuestion} title={"Check Boxes"} color={color} moduleIndex={moduleIndex} topicIndex={topicIndex} subTopicIndex={subTopicIndex} assesIndex={assesIndex}/>
            <CheckCard question={question} updateAssesment={updateAssesment} index={index}/>
            {/* <Button onClick={()=>console.log(question)}>Check</Button> */}
        </div>
    )
}