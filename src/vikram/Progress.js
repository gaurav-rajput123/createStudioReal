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
    label: 'Select course',
    description: `Select the course from the menu`,
  },
  {
    label: 'Course Outline',
    description:
      'Add Modules and Sub-modules',
  },
  {
    label: 'Choose the format',
    description: `Video , audio , ppt or pdf`,
  },
  {
    label: 'Preview and Upload',
    description: `Prevoew and Upload your content`,
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
    <Box sx={{ maxWidth: "400px" , backgroundImage:'url(${"https://media.istockphoto.com/photos/growth-arrow-up-and-progress-success-business-skill-increase-graph-picture-id1325680818?b=1&k=20&m=1325680818&s=170667a&w=0&h=0QiulvGagV8DPWJcM-iHpzvaL_5WY_iNHhg9xGjbEVM="})',  marginLeft:"70px" , borderRadius: "16px"}}>
      <Stepper activeStep={counterTracker.val} orientation="vertical"  sx={{paddingLeft:"16px"}}>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 3 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
