import React, {useState} from 'react'
import Videoheader from '../Vikram/Header'
import Textinput from '../deepak/Text'
import { Button } from '@mui/material'
import AudioFileIcon from '@mui/icons-material/AudioFile'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import SlideshowIcon from '@mui/icons-material/Slideshow'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
export default function CustomProblem({color}) {
    let [question, setQuestion] = useState(`Design you own custom problem with any kind of media`)
    
  return (
    <div style={{
        // width: "50%"
    }}>
        <Videoheader title={"Custom Based Problem Solving"} changeQuestion={setQuestion} color={color} />
        <Textinput title={'Custom Based Problem Solving'} question={question}/>
        <Button
            sx={{ minWidth: "150px", height: "100px", backgroundColor: 'white', borderColor: 'white' }}
            variant="outlined"
            // onClick={() => handleOpen("audio")}
            // disabled={isDisable.audio}
          >
            <AudioFileIcon />
          </Button>
          <Button
            sx={{ minWidth: "150px", height: "100px" }}
            variant="outlined"
            // onClick={() => handleOpen("video")}
            // disabled={isDisable.video}
          >
            <OndemandVideoIcon />
          </Button>


          <Button
            sx={{ minWidth: "150px", height: "100px" }}
            variant="outlined"
            color="success"
            // onClick={() => handleOpen("pdf")}
            // disabled={isDisable.pdf}
          >
            <PictureAsPdfIcon />
          </Button>


          <Button
            sx={{ minWidth: "150px", height: "100px" }}
            variant="outlined"
            color="warning"
            // onClick={() => handleOpen("ppt")}
            // disabled={isDisable.ppt}
          >
            <SlideshowIcon />
          </Button>
    </div>
  )
}
