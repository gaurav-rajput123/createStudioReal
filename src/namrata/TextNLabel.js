import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import React, { useState } from 'react';

function TextNLabel({ isLabelShown, setIsLabelShown, setLabel, courseArray, courseIndex, label }) {

    const [labelIn, setLabelIn] = useState(label)
    console.log(isLabelShown)

    return (
       <>
           { isLabelShown ?
            (
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Typography fontSize={20} >
                        {label}
                    </Typography>
                </div>
            )
            :
            (
                <div style={{ display: "flex", alignItems: "center" }}>
                    <TextField
                        placeholder='Add Section'
                        variant="filled"
                        onChange={(e) => setLabelIn(e.target.value)}
                        label="Set Title"
                        value={labelIn} />
                    <Button onClick={() => {
                        setLabel(labelIn)
                        setIsLabelShown(!isLabelShown)
                    }} sx={{ marginLeft: "12px" }} variant='contained'>
                        <Typography>
                            Save
                        </Typography>

                    </Button>
                </div>
            )}
    </>
    )
}

export default TextNLabel;
