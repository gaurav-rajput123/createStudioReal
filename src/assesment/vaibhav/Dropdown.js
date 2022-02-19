import * as React from 'react';
import { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { TextField } from '@mui/material';
import parse from 'html-react-parser'



export default function DropCard({question, updateAssesment}) {
  const [values, setValues] = useState([]);
  const [selected, setSelected] = useState("A wise person should...");
  const updateContent=() =>{
    
  }
    function handleChange(event) {
    setSelected(event.target.value);
  }
  let [newOption, setNewOption] = useState('')
  return (
    
    <Card sx={{ minWidth: "575px" }}>
      <CardContent>
        <Typography sx={{margin: "5px 5px 0px 25px" }}  variant="h4" color="text.secondary" >
          Dropdown
        </Typography>
        <Typography  sx={{margin: "5px 5px 0px 25px"}}  variant="h7" component="div">
            {parse(question)}
        </Typography>
        {/* <Typography sx={{margin: "5px 5px 10px 25px"}} variant="h7" color="text.secondary">
          adjective
        </Typography> */}
        {/* <Typography sx={{margin: "5px 5px 10px 25px"}}  variant="h6">
         Add the question text, prompt, here, This text is required.
        </Typography> */}
      </CardContent>
      <CardActions>
      <TextField  sx={{margin: "5px 5px 5px 25px"}}  id="add question" label="add" variant="standard" value={newOption} onChange={(e)=>setNewOption(e.target.value)} />
      <Button  sx={{ margin: "5px 5px 0px 25px"  , backgroundColor:"#7d8285"}}  variant="contained" onClick={()=>{
          let newValue = [...values]
          newValue.push(newOption)
          setValues(newValue)
          setNewOption("")
      }}>SET</Button>
      </CardActions>
     
 

    <FormControl  >
      <InputLabel htmlFor="agent-simple"></InputLabel>
      <Select
        style={{width: "200px" , margin: "25px 5px 20px 25px" }}
        value={selected}
        onChange={handleChange}
        inputProps={{
          name: "agent",
          id: "age-simple"
        }}
        
      >
        {values.map((value, index) => {
          return <MenuItem value={value} key={index}>{value}</MenuItem>;
        })}
      </Select>
    </FormControl>
    <div>
    <Button  sx={{ margin: "5px 5px 10px 30px" , backgroundColor:"#7d8285"}}  variant="contained">submit</Button>
    </div>
  
    </Card>
  );
}
