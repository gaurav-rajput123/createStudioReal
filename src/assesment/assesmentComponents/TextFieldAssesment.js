import React, {useState} from 'react'
import Videoheader from '../Vikram/Header'
import Textinput from '../deepak/Text'

function TextFieldAssesment({color, updateAssesment, moduleIndex, topicIndex, subTopicIndex, assesIndex}) {
    let [question, setQuestion] = useState(`You can use this template as a guide to the simple editor markdown and OLX markup to use for text input problems. 
    Edit this component to replace this template with your own assessment.
    Add the questions text,or prompt here.This text is required.`)
  return (
    <div style={{
        // width: "50%"
    }}>
        <Videoheader title={"Text Field Input"} changeQuestion={setQuestion} color="#dcebf1" updateAssesment={updateAssesment} moduleIndex={moduleIndex} topicIndex={topicIndex} subTopicIndex={subTopicIndex} assesIndex={assesIndex} />
        <Textinput title={'Text Input Assesment'} question={question} updateAssesment={updateAssesment} />
    </div>
  )
}


export default TextFieldAssesment