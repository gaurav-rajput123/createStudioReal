import React, {useState} from 'react'
import Videoheader from '../Vikram/Header'
import Textinput from '../deepak/Text'

export default function Research({color, updateAssesment, index, moduleIndex, topicIndex, subTopicIndex, assesIndex}) {
    let [question, setQuestion] = useState(`Write the topic you want to research on`)
    
  return (
    <div style={{
        // width: "50%"
    }}>
        <Videoheader title={"Research Questions"} changeQuestion={setQuestion} color={color} moduleIndex={moduleIndex} topicIndex={topicIndex} subTopicIndex={subTopicIndex} assesIndex={assesIndex} />
        <Textinput title={'Numeric Input Assesment'} question={question}/>
    </div>
  )
}
