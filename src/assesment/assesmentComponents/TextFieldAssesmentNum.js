import React, {useState} from 'react'
import Videoheader from '../Vikram/Header'
import Textinput from '../deepak/Text'

function TextFieldAssesmentNum() {
    let [question, setQuestion] = useState(`You can use this template as a guide to the simple editor markdown and OLX markup to use for text input problems. 
    Edit this component to replace this template with your own Numerical Type Assesment.`)
    
  return (
    <div style={{
        // width: "50%"
    }}>
        <Videoheader title={"Custom Numerical Questions"} changeQuestion={setQuestion} color="#dcebf1" />
        <Textinput title={'Numeric Input Assesment'} question={question}/>
    </div>
  )
}

// function Research() {
//     let [question, setQuestion] = useState(`Update your Research projects here`)
    
//   return (
//     <div style={{
//         // width: "50%"
//     }}>
//         <Videoheader title={"Custom Numerical Questions"} changeQuestion={setQuestion} color="#dcebf1" />
//         <Textinput title={'Numeric Input Assesment'} question={question}/>
//     </div>
//   )
// }

// function CaseStudy() {
//     let [question, setQuestion] = useState(`Make you own Case Study Assesment`)
    
//   return (
//     <div style={{
//         // width: "50%"
//     }}>
//         <Videoheader title={"Custom Numerical Questions"} changeQuestion={setQuestion} color="#dcebf1" />
//         <Textinput title={'Numeric Input Assesment'} question={question}/>
//     </div>
//   )
// }
// function BlankProblem() {
//     let [question, setQuestion] = useState(`Use This for making your blank common problems`)
    
//   return (
//     <div style={{
//         // width: "50%"
//     }}>
//         <Videoheader title={"Blank Assesment"} changeQuestion={setQuestion} color="#dcebf1" />
//         <Textinput title={'Numeric Input Assesment'} question={question}/>
//     </div>
//   )
// }

// module.exports = {
//     BlankProblem: BlankProblem, CaseStudy: CaseStudy, Research: Research
// }

export default TextFieldAssesmentNum