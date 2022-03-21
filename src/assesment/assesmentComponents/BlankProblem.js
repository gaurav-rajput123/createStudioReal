
import React, {useState} from 'react'
import Videoheader from '../Vikram/Header'
import Textinput from '../deepak/Text'

export default function  Research({color, updateAssesment, index, moduleIndex, topicIndex, subTopicIndex, assesIndex}) {
    let [question, setQuestion] = useState(`Update your Research projects here`)
    
  return (
    <div style={{
        // width: "50%"
    }}>
        <Videoheader title={"Blank Questions"} changeQuestion={setQuestion} color="#dcebf1" moduleIndex={moduleIndex} topicIndex={topicIndex} subTopicIndex={subTopicIndex} assesIndex={assesIndex} />
        <Textinput title={'Numeric Input Assesment'} question={question}/>
    </div>
  )
}