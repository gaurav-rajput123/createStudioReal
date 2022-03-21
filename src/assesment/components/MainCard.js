import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import BasicCard from './Card';
import { Typography , Button} from '@mui/material';
import parse from "html-react-parser";


export default function MainCard({question, updateAssesment}) {
    const [option , setOption] = useState("'Type your question'")
    const updateContent =() => {
      
    }
  return (
    <Card sx={{ minWidth: 200 , height:600}}>
      <CardContent>
         <Typography>
              1 point possible (ungraded)
         </Typography>
         <Typography>
            <p>
            You can use this template as a guide to the simple editor markdown and OLX markup to use for checkboxes problems.<br/>
               Edit this component to replace this template with your own assessment.
            </p>
         </Typography>
         
         <Typography style={{fontSize:"20px"}}>
           {parse(question)}
         </Typography>
         
         <Typography style={{fontSize:"15px"}}>
             <p>You can add an optional tip or note related to the prompt like this.</p>
         </Typography>
       
        <BasicCard />
        <BasicCard/>
        <BasicCard/>
        <BasicCard/>

        <Button variant="contained" size="medium" style={{marginTop:"80px"}}>Submit</Button>
      </CardContent>
      
    </Card>
  );
}