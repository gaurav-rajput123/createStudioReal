import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './Button.css';


const Input = styled('input')({
  display: 'none',
});

export default function UploadButton({name, Icon}) {
  return (
    
    <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <Button className="upload-button" variant="contained" component="span" >
           {name} {Icon}
        </Button>
      </label>
    
    </Stack>
  );
}