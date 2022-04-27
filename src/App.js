import { useState, useEffect } from 'react';
import { Routes, Route, useParams } from "react-router-dom";


import * as React from 'react'

import { stepNumber } from './Context';


import RouteFile from './RouteFile';
import TeacherDetails from './Neha/TeacherDetails';

export const userContext = React.createContext({
  user: Boolean,
  setUser: () => { }
})

function App() {
  // const [val, setVal] = useState(0)







  
  return (
    // <stepNumber.Provider value={{
    //   val, increment: () => setVal(val + 1), decrement: () => setVal(val - 1), setVal: (newVal) => {
    //     setVal(newVal)
    //   }
    // }}>
      
    //     <div className="App">

    //       <RouteFile />

    //     </div>
      
    // </stepNumber.Provider>
    <TeacherDetails/>
  );



}


export default App;
