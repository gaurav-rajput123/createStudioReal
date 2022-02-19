import React, {useState} from 'react'
import Videoheader from '../Vikram/Header'
import Textinput from '../deepak/Text'

export default function Research({color}) {
    let [question, setQuestion] = useState(`Write the topic you want to research on`)
    
  return (
    <div style={{
        // width: "50%"
    }}>
        <Videoheader title={"Research Questions"} changeQuestion={setQuestion} color={color} />
        <Textinput title={'Numeric Input Assesment'} question={question}/>
    </div>
  )
}
