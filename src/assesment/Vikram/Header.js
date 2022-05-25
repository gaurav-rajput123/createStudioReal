import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import SettingsIcon from "@mui/icons-material/Settings";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import TextDescription from '../deepak/TextDescription'
import {Modal, Box} from '@mui/material'
import { courseArray } from "../../Context";
export default function Videoheader({title, changeQuestion, color, textColor, moduleIndex, topicIndex, subTopicIndex, assesIndex}) {
  const [modalState, setModalState] = useState(false)
  const handleModalState = () => {
    setModalState(!modalState)
  }
  const courseContext = useContext(courseArray)
  const style = { 
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const config = {
    buttons: ["bold", "italic","underline","center","left"]
}




  const [newQuestion, setNewQuestion] = useState("")

  return (
    <Card sx={{ maxWidth: "maxWidth", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px" }}>
      <CardHeader
        title={title} sx={{color: textColor != undefined ? textColor : "black" ,  background: color != undefined ? color : "#dfdada"}}
        action={
          <div style={{ display: "flex", }}>
            <Button sx={{color: "black"}} endIcon={<EditIcon />}  onClick={()=>{
              handleModalState()
            }}>
              Edit
            </Button>
            {/* <IconButton
              aria-label="Settings"

            >
              <SettingsIcon />
            </IconButton>

            <IconButton
              aria-label="FileCopy"

            >
              <FileCopyIcon />
            </IconButton>
*/}
            <IconButton
              aria-label="Delete"
              onClick={()=>{
                console.log(moduleIndex, topicIndex, subTopicIndex, assesIndex)
                let newCourseArray = [...courseContext.data]
                let newAssesmentArray = newCourseArray[moduleIndex].topics[topicIndex].subTopics[subTopicIndex].assesments
                newAssesmentArray.splice(assesIndex, 1)
                courseContext.setCourseState({...courseContext, data: newCourseArray})
              }}
            >
              <DeleteIcon />
            </IconButton> 
          </div>
        }
      />
      <Modal
        open={modalState}
        onClose={handleModalState}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <h3 style={{marginTop: "6px", fontFamily: "Montserrat"}}>Text Editor</h3>
          </div>
          <TextDescription  getDescription={setNewQuestion} config={config} /><br></br>



          <Button variant="contained" sx={{
          margin: "12px 0px 12px 0px"}}
            onClick={() => {
            console.log(newQuestion)
            changeQuestion(newQuestion) 
          }} sx={{padding:'3px',width:'60px'}}>Save</Button>
        </Box>
      </Modal>
    </Card>
  );
}