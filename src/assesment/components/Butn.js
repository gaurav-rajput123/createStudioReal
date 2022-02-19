import React from 'react';
import { Button } from '@mui/material';

function Butn(props) {
  let { clickHoja } = props
  return <div style={{ margin: "40px 20px 0px 10px" }} onClick={() => clickHoja()}>
    <Button
      variant="contained"
      size="large"
      style={{ backgroundColor: "#375DBE", borderRadius: "5px", fontFamily: "Roboto Slab", marginBottom: "40px", width: "230px" }}
    >
      {Text}
    </Button>
  </div>;
};

export default Butn;
