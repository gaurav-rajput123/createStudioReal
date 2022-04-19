import { Button, Grid, Box, Typography, Switch } from '@mui/material'
import React, { useContext, useState } from 'react'
import styled from '@emotion/styled';
import './UploadComponentAlter.css';
import UploadButton from './Button'
// import LinkIcon from 
import LinkIcon from '@mui/icons-material/Link';
import IosShareIcon from '@mui/icons-material/IosShare';
import img from '../resources/Preview.jpg'
import { formContext } from '../Context';
import AttachmentIcon from '@mui/icons-material/Attachment';
import PlayCircleFilledSharpIcon from '@mui/icons-material/PlayCircleFilledSharp';
import FileUploadSharpIcon from '@mui/icons-material/FileUploadSharp';
import TextEditor from './TextEditor';
import ListItemButton from '@mui/material/ListItemButton';


const Input = styled('input')({
    display: 'none',
});
function UploadComponentAlter({ accept, courseArray, courseIndex, topicIndex, subTopicIndex, setInForm, updateCourseArray, handleClose }) {
    const [imageUrl, setImageUrl] = useState(null)
    const [fileObj, setFileObj] = useState(null)
    const formData = useContext(formContext)
    const handleUpload = (file) => {
        console.log(file)

        let newCourseArray = [...courseArray]

        if (newCourseArray[courseIndex].topics[topicIndex].subTopics[subTopicIndex].resource != undefined) {
            newCourseArray[courseIndex].topics[topicIndex].subTopics[subTopicIndex].resource[setInForm] = true
        } else {
            newCourseArray[courseIndex].topics[topicIndex].subTopics[subTopicIndex].resource = {}
            newCourseArray[courseIndex].topics[topicIndex].subTopics[subTopicIndex].resource[setInForm] = true
        }

        let newName = courseArray[courseIndex].topics[topicIndex].subTopics[subTopicIndex].id + file.name.substring(file.name.lastIndexOf('.'))
        console.log(newName)
        let newFile = new File([file], newName, { type: file.type })
        console.log(newFile)
        formData.append(setInForm, newFile, newName)
        updateCourseArray(newCourseArray)
        handleClose()

    }

    return (
        <div>
            <Grid container columns={12} >
                <Grid item xs={1} />
                <Grid item container xs={11}>
                    <Grid container item xs={12} >

                        <Grid item xs={5} >
                            <div className="Transcript">
                                <Typography sx={{ paddingBottom: "10px", fontWeight: 500 }}>Transcript<Switch /></Typography>
                                <label htmlFor="contained-button-transcript">
                                    <Input accept=".vtt,.srt"
                                        id="contained-button-transcript"
                                        multiple
                                        type="file"
                                        onChange={e => {
                                            console.log(e.target.files)
                                            let transfileName = courseArray[courseIndex].topics[topicIndex].subTopics[subTopicIndex].id + '.srt'
                                            let newFile = new File(e.target.files, transfileName)
                                            console.log(newFile)
                                            formData.append('transcript', newFile, transfileName)
                                            let newCourseArray = [...courseArray]

                                            if (newCourseArray[courseIndex].topics[topicIndex].subTopics[subTopicIndex].resource != undefined) {
                                                newCourseArray[courseIndex].topics[topicIndex].subTopics[subTopicIndex].resource["transcript"] = true
                                            } else {
                                                newCourseArray[courseIndex].topics[topicIndex].subTopics[subTopicIndex].resource = {}
                                                newCourseArray[courseIndex].topics[topicIndex].subTopics[subTopicIndex].resource["transcript"] = true
                                            }

                                            updateCourseArray(newCourseArray)
                                        }} />
                                    <ListItemButton className="upload-button" variant="contained" sx={{ '&:hover':{backgroundColor: 'rgb(20, 100, 200)'}, width: "250px", background: "rgb(25, 118, 210)", color: "white", borderRadius: "10px" }} >
                                        <AttachmentIcon sx={{ paddingRight: "10px" }} />
                                        <Typography>Attach Transcript</Typography>

                                    </ListItemButton>
                                </label>
                            </div>
                            <div className="Thumbnail">
                                <Typography sx={{ paddingBottom: "10px", fontWeight: 500 }}>Thumbnail</Typography>
                                <label htmlFor="contained-button-file">
                                    <Input accept="image/*" id="contained-button-file" multiple type="file"
                                        onChange={e => {
                                            setImageUrl(URL.createObjectURL(e.target.files[0]))
                                            console.log(imageUrl)
                                        }} />
                                    <ListItemButton className="upload-button" sx={{ '&:hover':{backgroundColor: 'rgb(20, 100, 200)'}, width: "250px", background: "rgb(25, 118, 210)", color: "white", borderRadius: "10px" }}
                                    >
                                        <PlayCircleFilledSharpIcon sx={{ paddingRight: "10px" }} />
                                        <Typography>Upload Thumbnail</Typography>

                                    </ListItemButton>
                                </label>
                            </div>
                            <div className="Thumbnail">
                                <Typography sx={{ paddingBottom: "10px", fontWeight: 500 }}>Upload File</Typography>
                                <input
                                    accept={accept}
                                    type="file"
                                    id="select-image"
                                    style={{ display: 'none' }}
                                    onChange={e => {

                                        setFileObj(e.target.files[0])
                                        setImageUrl(URL.createObjectURL(fileObj))
                                    }}
                                />



                                <label htmlFor="select-image">
                                    <ListItemButton className="upload-image" variant="contained" color="primary" sx={{ '&:hover':{backgroundColor: 'rgb(20, 100, 200)'}, width: "250px", background: "rgb(25, 118, 210)", color: "white", borderRadius: "10px" }}>
                                        <FileUploadSharpIcon sx={{ paddingRight: "10px" }} />
                                        <Typography>Upload</Typography>

                                    </ListItemButton>
                                </label>
                            </div>
                        </Grid>
                        <Grid item xs={7}>
                            <Typography sx={{ paddingBottom: "10px", paddingTop: "10px" }}>Preview</Typography>
                            {
                                imageUrl == null ?
                                    (
                                        <img src={img}
                                            alt="asdf"
                                            style={{
                                                width: "80%",
                                                objectFit: "cover"
                                            }} />
                                    )
                                    :
                                    (
                                        <img src={imageUrl}
                                            alt="hello"
                                            style={{
                                                width: "80%",
                                                objectFit: "cover"
                                            }} />
                                    )}
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={5} />
                <Grid item xs={2} >
                    <Button onClick={() => {
                        console.log(imageUrl)
                        handleUpload(fileObj)
                    }}
                        fullWidth
                        disabled={fileObj == null ? true : false}
                        sx={{
                            marginTop: "10px",
                            padding: "12px",
                            borderRadius: "6px",
                        }}
                        variant='contained'
                        color="success"
                    >
                        <Typography>SAVE</Typography>

                    </Button>
                </Grid>
            </Grid>


        </div>
    )
}

export default UploadComponentAlter