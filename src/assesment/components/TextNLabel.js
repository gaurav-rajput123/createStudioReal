import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import React, { useState } from 'react';

function TextNLabel({ isLabelShown, setIsLabelShown, label, setLabel, value, setValue, index, optionArray }) {

    const [labelIn, setLabelIn] = useState(label)

    return (
        isLabelShown ?
            (
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Typography fontSize={20} >
                        {labelIn}
                    </Typography>
                </div>
            )
            :
            (
                <div style={{ display: "flex", alignItems: "center" }}>
                    <TextField
                        placeholder='Add Answer'
                        variant="filled"
                        onChange={(e) => setLabelIn(e.target.value)}
                        label="Set Answer" />
                    <Button onClick={(e) => {
                        // setLabelIn()
                        setLabel(labelIn)
                        setIsLabelShown(!isLabelShown)
                        let newOptionObject = {...optionArray[index]}
                        newOptionObject.name = labelIn
                        let newoptionArray = [...optionArray]
                        newoptionArray[index] = newOptionObject
                        setValue(newoptionArray)
                    }} sx={{ marginLeft: "12px" }} variant='contained'>
                        <Typography style={{fontFamily:"inter", fontWeight:"bold"}}>
                            Set Answer
                        </Typography>

                    </Button>
                </div>
            )
    )
}

export default TextNLabel;
