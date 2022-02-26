import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Progress1 from './Image/Progress1.jpg';
import { stepNumber } from '../Context';
const steps = [
 
  {
    label: 'Add Course Details',
    description:
      'Fill up the details for your new course',
  },
  {
    label: 'Add Course Outline',
    description: `Make Structure of your Course`,
  },
  {
    label: 'Upload All the media and files',
    description: `Upload all the files in desired format`,
  },
  {
    label: 'Save and Preview the courses',
    description: `Preview and Upload your content`,
  },
  
];

export default function Progress() {

  let counterTracker = React.useContext(stepNumber)

  const [activeStep, setActiveStep] = React.useState(counterTracker.val);
 
  const handleNext = () => {
    console.log(activeStep)
    console.log("___________________")
    counterTracker.increment()   
  };  

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  React.useEffect(()=>{
    console.log("render")
  })
  return (
    <Box sx={{ maxWidth: "400px", marginTop: "10px" , backgroundImage:'url(${"https://media.istockphoto.com/photos/growth-arrow-up-and-progress-success-business-skill-increase-graph-picture-id1325680818?b=1&k=20&m=1325680818&s=170667a&w=0&h=0QiulvGagV8DPWJcM-iHpzvaL_5WY_iNHhg9xGjbEVM="})',  marginLeft:"70px" , borderRadius: "16px"}}>
      <Stepper activeStep={counterTracker.val} orientation="vertical"  sx={{paddingLeft:"16px", }}>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel 
            sx={{
              marginY: "4px",
              "& .MuiStepLabel-iconContainer": {
                "& .MuiSvgIcon-root": {
                  color: "#51e0bf"
                }
              }
            }}
            >
              <Typography sx={{
                fontSize: "12px"
              }}>{step.label}</Typography>
                
            </StepLabel>
            <StepContent>
              <Typography sx={{
                fontSize: "14px"
              }}>{step.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
