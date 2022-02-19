import { useState } from "react";
import Dropdown from "../vaibhav/Dropdown";
import Videoheader from "../Vikram/Header";


export default function DropdownAssesment({color,updateAssesment}){
    let [question, setQuestion] = useState('Add the questions text,or prompt here.This text is required.')
     return (
        <div>
            <Videoheader changeQuestion={setQuestion} title={"Dropdown"}/>
             <Dropdown question={question} updateAssesment={updateAssesment}/>
            
        </div>
    )
}