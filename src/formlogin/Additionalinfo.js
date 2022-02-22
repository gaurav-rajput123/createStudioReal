import React, { useEffect } from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
import img from './Add.jpeg'
import { FormControl, FormLabel, Box } from "@mui/material";

export default function Additionalinfo() {
  const [textData, setTextData] = useState('')
  const [department,setDepartment]=useState('')
  const [email, setEmail] = useState('')
  const [experience ,setExperience]=useState('')
  const [elearningexp,setElearningexp]=useState('')
  const [onlineexp,setOnlineexp]=useState('')
  const [industryexp,setIndustryexp]=useState('')
  const [dignation,setDignation]=useState('')
  const [speicalization,setSpeicalization ]=useState('')
  const [author,setAuthor]=useState('')
  const [workspace,setWorkspace]=useState('')
  const [journals,setJournals]=useState('')
  const [papers,setPapers]=useState('')
  const [booksedited,setBooksedited]=useState('')
  
  return (


    <Grid container backgroundColor={"  #f4f6f7 "} >
      <Grid container height={"70px"} backgroundColor={"#660000"} direction="row" alignItems="center" justifyContent="center" >
        <Typography variant="h5" sx={{ paddingTop: "20px", color: 'white' }}>
          ADDITIONAL INFORMATION ABOUT YOU
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        className=""
        spacing={1}
        sx={{
          paddingX: "12px"
        }}
      >
        <Grid container item xs={7}>
        <Grid item xs={12}>
          <TextField
          onChange={(e)=>{
            setTextData(e.target.value)
          }}
            sx={{ width: "100%" }}
            margin="dense"
            variant="outlined"
            label="Qualification"
            id="qulafication"
            value={textData}
          />
          
             
           
        </Grid>
        <Grid item xs={12}>
          <TextField
          onChange={(e)=>{
            setDepartment(e.target.value)
          }}
            sx={{ width: "100%" }}
            margin="dense"
            variant="outlined"
            label="Department Name"
            id="Department"
            value={department}
          />
           
        </Grid>
        <Grid item xs={12}>
          <TextField
           onChange={(e)=>{
            setEmail(e.target.value)
          }}
            sx={{ width: "100%" }}
            margin="dense"
            variant="outlined"
            label="Email"
            id="email"
            value={email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
          onChange={(e)=>{
            setExperience(e.target.value)
          }}
            sx={{ width: "100%" }}
            margin="dense"
            variant="outlined"
            label="Experience"
            id="ExperiencE"
            value={experience}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
           onChange={(e)=>{
            setElearningexp(e.target.value)
          }}
            sx={{ width: "100%" }}
            margin="dense"
            variant="outlined"
            label=" E-Teaching and Publishing Experience"
            id=" devloper Experienc"
            value={elearningexp}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            onChange={(e)=>{
              setOnlineexp(e.target.value)
            }}
            sx={{ width: "100%" }}
            margin="dense"
            variant="outlined"
            label=" Online Instructor Experience"
            id=" online Experienc"
            value={onlineexp}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
           onChange={(e)=>{
            setIndustryexp(e.target.value)
          }}
            sx={{ width: "100%" }}
            margin="dense"
            variant="outlined"
            label="Industry Experience"
            id=" Industry Experienc"
            value={industryexp}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
           onChange={(e)=>{
            setDignation(e.target.value)
          }}
            sx={{ width: "100%" }}
            margin="dense"
            variant="outlined"
            label="Designation"
            id="Dignation"
            value={dignation}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
          onChange={(e)=>{
            setSpeicalization(e.target.value)
          }}
            sx={{ width: "100%" }}
            margin="dense"
            multiline
            variant="outlined"
            label="Area of Specialization"
            id="speicalization"
            value={speicalization}
          />

        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(e)=>{
              setAuthor(e.target.value)
            }}
            sx={{ width: "100%" }}
            margin="dense"
            multiline
            variant="outlined"
            label="No. of book Authored/Co-Authored"
            id="Author"
            value={author}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            onChange={(e)=>{
              setWorkspace(e.target.value)
            }}
            sx={{ width: "100%" }}
            margin="dense"
            multiline
            variant="outlined"
            label="No. of workshops attend"
            id="Workspace"
            value={workspace}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            onChange={(e)=>{
              setJournals(e.target.value)
            }}
            sx={{ width: "100%" }}
            margin="dense"
            multiline
            variant="outlined"
            label="No.of research papers published in national journals/international journals(UGC listed/Scopus/SCI etc)"
            id="journals"
            value={journals}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            onChange={(e)=>{
              setPapers(e.target.value)
            }}
            sx={{ width: "100%" }}
            margin="dense"
            multiline
            variant="outlined"
            label="No. of papers present in national/international seminar/conferences"
            id="papers"
            value={papers}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            onChange={(e)=>{
              setBooksedited(e.target.value)
            }}
            sx={{ width: "100%" }}
            margin="dense"
            multiline
            variant="outlined"
            label="No. of books edited"
            id="Books edited"
            value={booksedited}
          />
        </Grid>
        <Grid xs={5}></Grid>

{/*  */}
<Grid item xs={12}>
         <FormControl>
           <FormLabel>Please upload your profile picture</FormLabel>
           <Box>
           <input type={'file'} style={{
            //  display: 'none'
           }}/>
           {/* <Button >upload</Button> */}
           </Box>
         </FormControl>
        </Grid>
        <Grid xs={5}></Grid>

        {/*  */}

        </Grid>
        
        

        <Grid item xs={5} sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}>
          <img src={img} width="100%" style={{
            alignSelf: "start"
          }}/>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
      </Grid>

      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", padding: "20px 0px 20px 0px" }}>
        <Button
          sx={{
            width: "100px",
            fontSize: "15px",
            background: "#87CEFA ",
            "&:hover": {
              background: "#e8e6e5"
            },
            marginX: "auto",

          }}
        >
          <NavLink to={'/land'} style={{
            textDecoration: "none"
          }}>
          Submit
          </NavLink>
        </Button>
      </Grid>
    </Grid>


  )
}
