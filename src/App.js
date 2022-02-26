// import './App.css';
import { useState } from 'react';
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
import Verification from './formlogin/components/Verification';

// import AnimatedPa from './namrata/AnimationGrid';

// import Home from './Home'
function App() {
  const [val, setVal] = useState(0)
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
        </Routes>

      </div>
    </stepNumber.Provider>
  );



}


export default App;
