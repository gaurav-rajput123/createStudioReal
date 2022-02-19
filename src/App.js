// import './App.css';
import { useState } from 'react';
import { Routes, Route, useParams } from "react-router-dom";



import Front from './Front';
import Home from './Home';
import Form from './vikram/Form';
import { stepNumber } from './Context';

// import AnimatedPa from './namrata/AnimationGrid';

// import Home from './Home'
function App() {
  const [val, setVal] = useState(0)
  return (
    <stepNumber.Provider value={{
      val, increment: ()=>setVal(val+1), decrement: ()=>setVal(val-1)
    }}>
      <div className="App">
      <Routes>
      <Route path="/" element={ <Front/>} />
      <Route path="/form" element={ <Form/>} />
      <Route path="/create" element={<Home />} />
    </Routes>
    
    </div>
    </stepNumber.Provider>
  );



  // {courseArray.map((item, index) => {
  //   return (
  //     <div className='mainCourse'>
  //       <h4>{item.name}</h4>
  //       <div className='course-content'>
  //         {
  //           item.topics.map((topic, index)=>{
  //             return(<div className="topic-tile">
  //               <h5>{topic.name}</h5>
  //               <div className='topic-contents'>
  //                 {topic.subTopics.map((subtopic, index)=>{
  //                   return (<div className='subtopicTile'>
  //                     <h6>{subtopic.name}</h6>
  //                     {/* <div>
  //                       {subtopic.}
  //                     </div> */}c
  //                   </div>)
  //                 })}
  //               </div>
  //             </div>)
  //           })
  //         }
  //       </div>
  //     </div>
  //   )
  // })}
}

export default App;
