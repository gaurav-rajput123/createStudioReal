// import './App.css';
import { useState,useEffect } from 'react';
import { Routes, Route, useParams } from "react-router-dom";

import OutlineForm from './OutlineForm';

import Front from './Front';
import Home from './Home';
import Form from './vikram/Form';
import { stepNumber } from './Context';
// import { Grid, Grid } from '@mui/material';
import styled from '@emotion/styled';
import UploadComponentAlter from './namrata/UploadComponentAlter';
import MetaLogin from './formlogin/MetaLogin';
import Additionalinfo from './formlogin/Additionalinfo';
import BasicCard from './formlogin/components/skewCard';
import Register from "./formlogin/components/Register";
import RegisterCard from './formlogin/components/RegisterCard';
import TabComponent from './formlogin/components/TabComponent copy';
import Verification from './formlogin/components/Verification';
import Corseinfo from './Courseinfo';
import axios from 'axios';

// import AnimatedPa from './namrata/AnimationGrid';

// import Home from './Home'
function App() {
  const [val, setVal] = useState(0)
  useEffect(()=>{
    axios({
    url:'http://localhost:8080/user/currentuser',
    method:'POST',
  }).then(
    (response) => {
      console.log(response.data);
  })
})

  return (
    <stepNumber.Provider value={{
      val, increment: () => setVal(val + 1), decrement: () => setVal(val - 1), setVal: (newVal) => {
        setVal(newVal)
      }
    }}>
      <div className="App">
        <Routes>
          {/* <Route path="/auth" element={ <MetaLogin/>} />   */}
          <Route path="/" element={<RegisterCard />} />
          <Route path='/verify' element={<Verification/>}/>
          <Route path="/user" element={<Additionalinfo />} />
          <Route path="/land" element={<Front />} />
          <Route path="/form" element={<Form />} />
          <Route path="/create" element={<Home />} />
          <Route path="/formnew" element={<OutlineForm />} />
          <Route path="/formnews" element={<Corseinfo/>} />
        </Routes>

      </div>
    </stepNumber.Provider>
  );



}


export default App;
