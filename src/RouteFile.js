import React, { useContext } from 'react'
import { useState,useEffect } from 'react';
import { Routes, Route, useParams, useNavigate } from "react-router-dom";

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
import { userContext } from './App';
import { Button } from '@mui/material';
function RouteFile() {
    const userScope = useContext(userContext)
    const navigate = useNavigate()
  return (
    <div>
        <Routes>
          {/* <Route path="/auth" element={ <MetaLogin/>} />   */}
          
          {
              userScope.user ? (<>
                <Route path='/verify' element={<Verification/>}/>
                <Route path="/user" element={<Additionalinfo />} />
                <Route path="/" element={<Front />} />
                <Route path="/form" element={<Form />} />
                <Route path="/create" element={<Home />} />
                <Route path="/formnew" element={<OutlineForm />} />
                <Route path="/formnews" element={<Corseinfo/>} />
                
                </>
              ): (
<Route path="/" element={<RegisterCard />} />
              )
          }
        </Routes>
        {/* <Button onClick={()=>{
                    navigate('/')
                }}>go to "/"</Button> */}
    </div>
  )
}

export default RouteFile