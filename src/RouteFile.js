import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import MyCourses from './MyCourses';
import OutlineForm from './OutlineForm';
import MyCreatedCourses from './MyCreatedCourses';
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
import ForgotPassword from './formlogin/components/ForgotPasswordEmail'
import NewPassword from './formlogin/components/NewPassword'
import { courseArray } from './Context';
import axios from 'axios';
import { userContext } from './App';
import { Button } from '@mui/material';
import TurnOff from "./Turnoff"
function RouteFile() {
  const userScope = useContext(userContext)
  const navigate = useNavigate()
  const [courseState, setCourseState] = useState({
    courseId: '', courseNumber: "", organisation: "", courseDuration: "", courseDesciption: "", skillsGained: [],
    data: [],
  })
  useEffect(()=>{
    const courseState = localStorage.getItem("courseContext")
    if(courseState != null){
      let course = JSON.parse(courseState)
      setCourseState(course)
      console.log("here is the course context")
      console.log(course)
    }
  },[])
  return (

    <div>
      <courseArray.Provider value={{ ...courseState, setCourseState }}>
      <Routes>

        {
          userScope.user ? (<>
            <Route path="/user" element={<Additionalinfo />} />
            <Route path="/" element={<Front />} />
            <Route path="/form" element={<Form />} />
            <Route path="/create" element={<Home />} />
            <Route path="/formnew" element={<OutlineForm />} />
            <Route path="/formnews" element={<Corseinfo />} />
            <Route path="/verify" element={<Verification />} />
            <Route path="/changepassword" element={<NewPassword />} />
            <Route path='/mycourses' element={<MyCourses />} />
            <Route path='/mycoursecreate' element={<MyCreatedCourses />} />
          </>
          ) : (<>
            <Route path="/login" element={<RegisterCard id={1} />} />
            <Route path="/register" element={<RegisterCard id={0} />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path='/changepassword' element={<NewPassword />} />
            <Route path="/" element={<RegisterCard id={1} />} />
          </>
          )
        }

      </Routes>

    </courseArray.Provider>
    </div> 
  )
}

export default RouteFile