import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CheckboxComponent from './Checkbox';


export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 200 , height:50, marginBottom:"10px"}}>
      <CardContent>
       
        <CheckboxComponent/>
      </CardContent>
      
    </Card>
  );
}