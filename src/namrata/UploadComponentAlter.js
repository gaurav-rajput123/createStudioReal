import { Button, Grid, Box, Typography, Switch } from '@mui/material'
import React, { useContext, useState } from 'react'
import styled from '@emotion/styled';
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
function UploadComponentAlter({ courseArray, courseIndex, topicIndex, subTopicIndex, setInForm, updateCourseArray, handleClose }) {
    const [imageUrl, setImageUrl] = useState(null)
    const [fileObj, setFileObj] = useState(null)
    const formData = useContext(formContext)
    const handleUpload = (file) => {
        console.log(file)
        // setImageUrl(URL.createObjectURL(file))
        let newCourseArray = [...courseArray]
        // newCourseArray[courseIndex].topics[topicIndex].subTopics[subTopicIndex].resource = {}
        if(newCourseArray[courseIndex].topics[topicIndex].subTopics[subTopicIndex].resource != undefined){newCourseArray[courseIndex].topics[topicIndex].subTopics[subTopicIndex].resource[setInForm] = true
        }else{
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
        <div style={{
            // minWidth: "500px",
            // minHeight: "500px"
        }}>
            <Grid container columns={12} >
                <Grid item xs={1} />
                <Grid item xs={11}>
                    <Grid container >
                        <Grid item xs={11} sx={{ direction: "column", paddingTop: "10px", paddingBottom: "10px" }}>
                            <TextEditor />
                        </Grid>
                        <Grid item xs={5} >
                            <div className="Transcript">
                                <Typography sx={{ paddingBottom: "10px", fontWeight: 500 }}>Transcript<Switch /></Typography>
                                {/* <UploadButton
                                        name={"Attach Transcript"}
                                        Icon={<LinkIcon className="attach-icon" />}>
                                    </UploadButton> */}
                                <label htmlFor="contained-button-file">
                                    <Input accept="image/*" id="contained-button-files" multiple type="file" />
                                    <ListItemButton className="upload-button" variant="contained" sx={{ width: "250px", background: "rgb(25, 118, 210)", color: "white", borderRadius: "10px" }} >
                                        <AttachmentIcon sx={{ paddingRight: "10px" }} />
                                        <Typography>Attach Transcript</Typography>

                                    </ListItemButton>
                                </label>
                            </div>
                            <div className="Thumbnail">
                                <Typography sx={{ paddingBottom: "10px", fontWeight: 500 }}>Thumbnail</Typography>
                                {/* <UploadButton
                                        name={"Upload Thumbnail"}
                                        Icon={<IosShareIcon className="thumb-icon" />} >
                                    </UploadButton> */}
                                <label htmlFor="contained-button-file">
                                    <Input accept="image/*" id="contained-button-file" multiple type="file"
                                        onChange={e => {
                                            // console.log(e.target.files[0])
                                            // setFileObj(e.target.files[0])
                                            setImageUrl(URL.createObjectURL(e.target.files[0]))
                                            console.log(imageUrl)
                                        }} />
                                    <ListItemButton className="upload-button" sx={{ width: "250px", background: "rgb(25, 118, 210)", color: "white", borderRadius: "10px" }}
                                    >
                                        <PlayCircleFilledSharpIcon sx={{ paddingRight: "10px" }} />
                                        <Typography>Upload Thumbnail</Typography>

                                    </ListItemButton>
                                </label>
                            </div>
                            <div className="Thumbnail">
                                <Typography sx={{ paddingBottom: "10px", fontWeight: 500 }}>Upload File</Typography>
                                <input
                                    accept="image/*"
                                    type="file"
                                    id="select-image"
                                    style={{ display: 'none' }}
                                    onChange={e => {

                                        setFileObj(e.target.files[0])
                                        setImageUrl(URL.createObjectURL(fileObj))
                                    }}
                                />



                                <label htmlFor="select-image">
                                    <ListItemButton className="upload-image" variant="contained" color="primary" sx={{ width: "250px", background: "rgb(25, 118, 210)", color: "white", borderRadius: "10px" }}>
                                        <FileUploadSharpIcon sx={{ paddingRight: "10px" }} />
                                        <Typography>Upload</Typography>

                                    </ListItemButton>
                                </label>
                            </div>
                        </Grid>
                        <Grid item xs={7}>
                            <Typography sx={{ paddingBottom: "10px",paddingTop:"10px" }}>Preview</Typography>

                            {/* <Box> */}
                            {
                                imageUrl == null ?
                                    (
                                        <img src={img}
                                            alt="asdf"
                                            style={{
                                                maxWidth: "80%",
                                                maxHeight: "100%",
                                                objectFit: "cover"
                                            }} />
                                    )
                                    :
                                    (
                                        <img src={imageUrl}
                                            alt="hello"
                                            style={{
                                                minWidth: "60%",
                                                minHeight: "320px",
                                                objectFit: "cover"
                                            }} />
                                    )}
                            {/* </Box> */}
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
                            marginTop:"10px",
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