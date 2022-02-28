import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { Typography, Button, TextField, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import parse from "html-react-parser";
import SubjectTile from "./AnswerTile";
import generateKey from '../../resources/generateKey';


export default function MainCard({ question, updateAssesment, index }) {

    let [newOption, setNewOption] = useState('')
    let [options, setOptions] = useState([])
    const [correctOption, setCorrectOption] = useState('')
    const updateContent = () => {
        let newMCQ = {
            question: parse(question).props.children,
            options: options,
            correctOption: correctOption,
            id: generateKey()
        }
        updateAssesment(newMCQ, index)
    }
    return (
        <Card sx={{ minWidth: 200, height: "auto" }}>
            <CardContent>

                <Typography style={{ fontFamily: "inter", fontWeight: "bold", fontSize: "12px" }}>
                    1 point possible (ungraded)
                </Typography>
                <Typography style={{ fontFamily: "inter", fontSize: "24px" }}>
                    {parse(question)}
                </Typography>

                {/* <Typography style={{ fontFamily: "inter" }}>
                    Type your question
                </Typography> */}

                <Typography style={{ fontSize: "15px", fontFamily: "inter", fontWeight: "bold" }}>
                    <p>You can add an optional tip or note related to the prompt like this.</p>
                </Typography>
                <TextField sx={{ margin: "0px 5px 10px 5px", }} id="standard-basic" label="Add Option" variant="standard" value={newOption} onChange={(e) => {
                    setNewOption(e.target.value)
                }} />
                <Button variant="contained" onClick={() => {
                    let newOptionArr = [...options]
                    let newOptionObject = {
                        name: newOption,
                        value: newOption,
                        id: generateKey(),
                        isCorrect: false
                        // question: question.toString()
                    }
                    newOptionArr.push(newOptionObject)
                    setOptions(newOptionArr)
                    setNewOption("")
                }}>ADD NEW OPTION</Button>
                <FormGroup>
                    {
                        options.map((item, itemIndex) => {
                            return (
                                <FormControlLabel control={<Checkbox value={item.value} onChange={(e) => {
                                    let newOptionObject = {
                                        ...options[itemIndex]
                                    }
                                    newOptionObject.isCorrect = e.target.checked
                                    let newOptionsArray = [...options]
                                    newOptionsArray[itemIndex] = newOptionObject
                                    setOptions(newOptionsArray)
                                }}
                                    checked={options[itemIndex].isCorrect}
                                />}
                                 label={item.name} />
                            )
                        })
                    }


                </FormGroup>

                    <div style={{
                        background: "black", 
                        height: "1px"
                    }}></div>
                <Button variant="contained" size="medium" style={{ marginTop: "20px" }} onClick={() => {
                    updateContent()
                }}>Submit</Button>
            </CardContent>

        </Card>
    );
}