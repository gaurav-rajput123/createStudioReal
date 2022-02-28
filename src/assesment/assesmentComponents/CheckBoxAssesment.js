import Videoheader from "../Vikram/Header";
// import MainCard from "../components/MainCard";
import {useState} from "react";
import MainCard from '../components/MainCarnNAM'
import React from 'react'

function CheckBoxAssesment({color, updateAssesment, index}) {
    let [question, setQuestion] = useState('Add your question By clicking on the edit button')
  return (
    <div>
      <Videoheader changeQuestion={setQuestion} title={"Multiple Choice Assesment"} color={color}/>
      <MainCard question={question}  updateAssesment={updateAssesment} index={index}/>
    
    </div>
  )
}

export default CheckBoxAssesment;