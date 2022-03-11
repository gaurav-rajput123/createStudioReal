// import './App.css';
import { useState,useEffect } from 'react';
import { Routes, Route, useParams } from "react-router-dom";

import OutlineForm from './OutlineForm';
import * as React from 'react'
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
import RouteFile from './RouteFile';
export const userContext = React.createContext({
  user: Boolean,
  setUser: ()=>{}
})
// import AnimatedPa from './namrata/AnimationGrid';

// import Home from './Home'
function App() {
  const [val, setVal] = useState(0)
//   useEffect(()=>{
//     axios({
//     url:'http://localhost:8080/user/currentuser',
//     method:'POST',
//   }).then(
//     (response) => {
//       console.log(response.data);
//   })
// })


  const [user, setUser] = useState(false)



  useEffect(()=>{
    if(localStorage.getItem('user') != null){
      setUser(true)
    }
  },[])
  return (
    <stepNumber.Provider value={{
      val, increment: () => setVal(val + 1), decrement: () => setVal(val - 1), setVal: (newVal) => {
        setVal(newVal)
      }
    }}>
      <userContext.Provider value={{
        user, setUser
      }}>
      <div className="App">
        
        <RouteFile/>
        
      </div>
      </userContext.Provider>
    </stepNumber.Provider>
  );



}


export default App;
