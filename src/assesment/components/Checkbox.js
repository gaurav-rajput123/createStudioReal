import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


export default function CheckboxComponent() {
  return (
    <FormControl component="fieldset">
      
      <FormGroup aria-label="position" row>
        
        <FormControlLabel
          style={{marginTop:"-10px"}}
          value="end"
          control={<Checkbox />}
          label="Correct Answer"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
  );
}