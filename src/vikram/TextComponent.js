import * as React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from '@mui/material/FormHelperText';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3)
  },

  "& .MuiInputBase-input": {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow"
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: ['Montserrat'].join(",")
  }
}));

export default function TextBox({ heading, label, helpertext, handler, name, setIn, field, outLine }) {

  return (
    <Box component="from" display="flex" sx={{ padding: "6px" }}>
      <FormControl fullWidth width="100%" variant="standard">
        <InputLabel
          shrink
          sx={{ fontSize: "24px", fontWeight: "400", color: "black" }}

        >
          {heading}
        </InputLabel>
        <BootstrapInput placeholder={label} id="bootstrap-input" onChange={(e) => {
          let newOutLine = {...outLine}
          newOutLine[field] = e.target.value
          setIn(newOutLine)
        }} />
        <FormHelperText>
          {helpertext}
        </FormHelperText>
      </FormControl>
    </Box>
  );
}