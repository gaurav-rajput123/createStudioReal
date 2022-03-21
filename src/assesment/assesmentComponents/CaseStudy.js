import React, {useState} from 'react'
import Videoheader from '../Vikram/Header'
import Textinput from '../deepak/Text'

export default function CaseStudy({color, updateAssesment, index, moduleIndex, topicIndex, subTopicIndex, assesIndex}) {
    let [question, setQuestion] = useState(`Make you own Case Study Assesment`)
    
  return (
    <div style={{
        // width: "50%"
    }}>
        <Videoheader title={"Case Study Assessment"} changeQuestion={setQuestion} color={color} moduleIndex={moduleIndex} topicIndex={topicIndex} subTopicIndex={subTopicIndex} assesIndex={assesIndex}/>
        <Textinput title={'Numeric Input Assesment'} question={question}/>
    </div>
  )
}