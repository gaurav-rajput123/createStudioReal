import Videoheader from "../Vikram/Header";
// import MainCard from "../components/MainCard";
import {useState} from "react";
import MainCard from '../components/MainCarnNAM'
import React from 'react'

function CheckBoxAssesment({color, updateAssesment, index}) {
    let [question, setQuestion] = useState('Add your question here')
  return (
    <div>
      <Videoheader changeQuestion={setQuestion} title={"Checkbox Assessment"} color={color}/>
      <MainCard question={question}  updateAssesment={updateAssesment} index={index}/>
    
    </div>
  )
}

export default CheckBoxAssesment;