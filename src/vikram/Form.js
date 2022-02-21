import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import TextBox from './TextComponent';
import { Card, Grid, Typography } from '@mui/material';
import img1 from './Image/img1.png'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { stepNumber } from '../Context';
import { courseArray } from '../Context';

function Form({ closeModal, activeStep, setActiveStep }) {
  const counter = React.useContext(stepNumber)
  const [newSkill, setNewSkill] = React.useState('')
  const [skillArr, newSkillArr] = useState([])
  const courseContext = React.useContext(courseArray)
  const [courseOut, setCourseOut] = useState({
    courseId: "",
    courseNumber: "",
    courseDescription: "",
    courseDuration: "",
    courseOrganisation: "",
    skillsGained: []
  })

  const handleNext = () => {
    counter.increment()
    // closeModal(false)
    let newC = {...courseContext}
    newC.courseId = courseOut.courseId
    newC.courseDesciption = courseOut.courseDescription
    newC.courseDuration = courseOut.courseDuration
    newC.courseNumber = courseOut.courseNumber
    newC.organisation = courseOut.courseOrganisation
    newC.skillsGained = [...skillArr]
    courseContext.setCourseState(newC)
    setActiveStep(2)
    console.log("here")
  }
  return (
    <>
      <Card
        // sx={{ background: "white" }}
        sx={{
          position: "absolute",
          width: "80%",
          height: "80%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          overflowY: 'scroll',
          borderRadius: "12px",
          border: "1px solid black",
        }}
      >
        <Grid container >
          <Grid xs={12} textAlign={'center'}>
            <Typography fontSize={"50px"} fontFamily={'Helvetica', 'Roboto Serif', "sans-serif "}>Course Detail</Typography>
          </Grid>
          <Grid xs={8} width={'100%'}>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '20ch' },
                paddingLeft: "24px"
              }}
              noValidate
              autoComplete="off"
              width={'100%'}
            >

              <div style={{ display: 'block', paddingTop: '50px', paddingBottom: '25px', paddingLeft: '25px' }} >
                <div style={{ display: "flex" }}>
                  <div style={{
                    width: "200px",
                    paddingTop:"15px"
                  }}>
                    <Typography fontSize={"16px"} font-family={'Lobster', "cursive"} sx={{ paddingTop: "15px" }}>Course Title*</Typography>
                    <Typography fontSize={"10px"} font-family={'Lobster', "cursive"}>

                    </Typography>
                  </div>
                  <TextBox

                    InputLabelProps={{
                      sx: {
                        color: "Black !important",
                        fontSize: '20px',
                      }
                    }}
                    error
                    id="outlined-error"
                    variant='standard'
                    label="Eg. Introduction to the computer science"
                  />
                </div>
              </div>



              <div style={{ display: 'block', paddingTop: '50px', paddingBottom: '25px', paddingLeft: '25px' }} >
                <div style={{ display: "flex" }}>
                  <div style={{
                    width: "200px",
                    paddingTop:"20px"
                  }}>
                    <Typography fontSize={"16px"} font-family={'Lobster', "cursive"}>Course Number*</Typography>
                    <Typography fontSize={"10px"} font-family={'Lobster', "cursive"}>
                      Any instruction that you want <br />to give or reccomend for this topic .
                    </Typography>
                  </div>
                  <TextBox

                    InputLabelProps={{
                      sx: {
                        color: "Black !important",
                        fontSize: '20px',
                      }
                    }}
                    error
                    id="outlined-error"
                    variant='standard'
                    label="Eg. CS101"
                  />
                </div>
              </div>


              <div style={{ display: 'block', paddingTop: '50px', paddingBottom: '25px', paddingLeft: '25px' }} >
                <div style={{ display: "flex" }}>
                  <div style={{
                    width: "200px",
                    paddingTop:"20px"
                  }}>
                    <Typography fontSize={"16px"} font-family={'Lobster', "cursive"}>Organisation*</Typography>
                    <Typography fontSize={"10px"} font-family={'Lobster', "cursive"}>
                      Any instruction that you want <br />to give or reccomend for this topic .
                    </Typography>
                  </div>
                  <TextBox

                    InputLabelProps={{
                      sx: {
                        color: "Black !important",
                        fontSize: '20px',
                      }
                    }}
                    error
                    id="outlined-error"
                    variant='standard'
                    label="Eg. University or Organisation"
                  />
                </div>
              </div>

              <div style={{ display: 'block', paddingTop: '50px', paddingBottom: '25px', paddingLeft: '25px' }} >
                <div style={{ display: "flex" }}>
                  <div style={{
                    width: "200px",
                  
                  }}>
                    <Typography fontSize={"16px"} font-family={'Lobster', "cursive"} sx={{  }}>Course Duration*</Typography>

                  </div>
                  <TextField
                    id="input-with-icon-textfield"
                    label="Duration"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                </div>
              </div>
              <div style={{ display: 'block', paddingTop: '50px', paddingBottom: '25px', paddingLeft: '25px' }} >
                <div style={{ display: "flex" }}>
                  <div style={{
                    width: "200px",
                    
                  }}>
                    <Typography fontSize={"16px"} font-family={'Lobster', "cursive"} sx={{ paddingTop: "25px" }}>Course Description*</Typography>
                  </div>
                  <TextBox

                    InputLabelProps={{
                      sx: {
                        color: "Black !important",
                        fontSize: '20px',
                      }
                    }}
                    error
                    id="outlined-error"
                    variant='standard'
                    label="Eg. Introduction to the computer science"
                  />
                </div>
              </div>

              {/* Skills section */}
              <div style={{ display: 'block', paddingTop: '50px', paddingBottom: '25px', paddingLeft: '25px' }} >
                <div style={{ display: "flex" }}>
                  <div style={{
                    width: "200px"
                  }}>
                    <Typography fontSize={"16px"} font-family={'Lobster', "cursive"}>Skills You'll gain</Typography>
                    <Typography fontSize={"10px"} font-family={'Lobster', "cursive"}>
                      Skills that you will <br />taught in this course .
                    </Typography>
                  </div>
                  <TextField variant='outlined' fullWidth value={newSkill} onChange={e => setNewSkill(e.target.value)} sx={{ flexGrow: .4 }} />
                  <Button
                    variant="contained"
                    onClick={() => {
                      let newSkillArray = skillArr.length !== 0 ? [...skillArr] : []
                      newSkillArray.push(newSkill)
                      newSkillArr(newSkillArray)
                      setNewSkill("")
                    }}
                    sx={{
                      padding: "06px",
                      height: "36px",
                      fontSize: "16px",
                      alignSelf: "center"
                    }}
                  >Add Skill</Button>

                </div>
                <div style={{ marginLeft: "180px" }}>
                  <div >
                    <ul>
                      {
                        skillArr.map((item, itemIndex) => {
                          console.log(item)
                          return (
                            <li style={{
                              fontSize: "16px",
                              fontWeight: "500",
                              textDecoration: "none",
                              padding: "06px",
                              borderRadius: "12px",
                              marginBottom: "12px",
                              backgroundColor: "lightgray",
                              width: 'fit-content',
                              listStyleType: "none",
                              display: "inline-block",
                              marginRight: "12px"
                            }}>
                              {item}
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </div>
              </div>

              <div backgroundColor="#F5F5F5" style={{ marginLeft: "18px" }}>
                <Stack spacing={2} direction="row" sx={{
                  width: "60%",
                  marginBottom: "24px "
                }}  >
                  <Button sx={{
                    fontSize: "16px",
                    '&:hover': {
                      background: "#e8e6e5",
                    },
                    color: "white",
                    // width: "fit-content"
                  }}
                    fullWidth
                    variant='contained'
                    onClick={() => {
                      handleNext()
                    }}
                  >Create course</Button>
                  {/* <Button sx={{
                    fontSize: "16px",
                    '&:hover': {
                      background: "#e8e6e5   ",
                    },
                    color: "black",
                    width: "fit-content"
                  }}>cancel</Button> */}
                </Stack>

              </div>



            </Box>
          </Grid>
          <Grid xs={3} marginLeft={'-10%'} sx={{ paddingTop: "95px", }} style={{ flexGrow: 1 }}  >
            <img src={img1} alt='' />
          </Grid>
        </Grid>
      </Card>
    </>
  );
}



export default Form;