import React from 'react';
import { Button } from '@mui/material';

function Butn(props) {
  let { Text, clickHoja, disabled } = props
  return <div style={{ margin: "40px 10px 0px 10px" }} onClick={() => clickHoja()}>
    <Button
      variant="contained"
      size="large"
      disabled={disabled}
      style={{ backgroundColor: disabled ? "gray" :  "#375DBE", borderRadius: "5px", fontFamily: "Helvetica", marginBottom: "20px", width: "200px", color: 'white' }}
    >
      {Text}
    </Button>
  </div>;
};

export default Butn;
