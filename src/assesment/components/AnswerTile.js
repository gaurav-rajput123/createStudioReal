import styled from "@emotion/styled";
import { Card, IconButton,  Checkbox , Button} from "@mui/material";
import React, { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import TextNLabel from "./TextNLabel";
import Butn from "./Butn";



export default function SubjectTile(prop) {
  let { name, changeCourseName, courseIndex, courseArray, value, setValue, index, optionArray} = prop

  const StyledCard = styled(Card)({
    display: "flex",
    margin: '12px 10px',
    padding: "12px 12px 12px 0px"
  })
   
  const [courses, setCourses] = useState([])
  const addNewSection = () => {
    let newCourses = [...courses]
    newCourses.push({
      name: "Basic Electrical Engineering"
    })
     setCourses(newCourses)
  }


  



  const [isTitle, setIsTitle] = useState(true)

 

 

  
  let [label, setLabel] = React.useState("hello namrata")
  let [isLabelShown, setIsLabelShown] = React.useState(false)

  const handleLabel = (labelVal) => {
    setLabel(labelVal)
    // changeCourseName(courseIndex, courseArray, labelVal)
  }
  
  return (
    <div>
      <StyledCard sx={{ backgroundColor: "#f1f1f1" }}>
        <Checkbox/>
        {/* <TextField value={subTitle} onChange={(e)=>setSubTitle(e.target.value)}/> */}

        {/* <TextField value={subTitle} onChange={(e)=>setSubTitle(e.target.value)}/> */}

        <TextNLabel isLabelShown={isLabelShown} setIsLabelShown={setIsLabelShown} label={label} setLabel={handleLabel} value={value} setValue={setValue} index={index} optionArray={optionArray} />

        {name}


        <div style={{ flexGrow: 1 }} />

        <IconButton sx={{ marginRight: "10px" }} onClick={() => setIsLabelShown(!isLabelShown)}>
          <EditIcon className="Icon1" sx={{ color: "#b7b7b7", }} />
        </IconButton>

       
        
        
        
       
      </StyledCard>

    
    </div >
  )

}



