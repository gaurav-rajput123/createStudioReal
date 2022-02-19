import React, { useState } from "react";
import { Grid, Typography, Button, Switch } from "@mui/material";
import UploadButton from "./Button";
import LinkIcon from '@mui/icons-material/Link';
import IosShareIcon from '@mui/icons-material/IosShare';
import "./Button.css";
import { Box } from "@mui/material";
import FileInput from "./Preview";

export default function Alternate({ topicIndex, subTopicIndex, courseIndex, filedName, courseArray }) {

  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [imgUrl, setImageUrl] = useState(null)
  const setImageUrlHandler = (val) => {
    setImageUrl(val)
  }
  return (



    <Grid container>

      <Grid className="left-content" item xs={3} sx={{ direction: "column" }}>

        <div className="Transcript">
          <Typography sx={{ fontWeight: "bold" }}>Transcript<Switch {...label} /></Typography>
          <UploadButton
            name={"Attach Transcript"}
            Icon={<LinkIcon className="attach-icon" />}>
          </UploadButton>
        </div>

        <div className="Thumbnail">
          <Typography sx={{ fontWeight: "bold" }}>Thumbnail</Typography>
          <UploadButton
            name={"Upload Thumbnail"}
            Icon={<IosShareIcon className="thumb-icon" />} >
          </UploadButton>
        </div>


        <div className="Preview">
          <Typography sx={{ fontWeight: "bold" }}>Upload</Typography>
        </div>
        <FileInput topicIndex={topicIndex} subTopicIndex={subTopicIndex} courseIndex={courseIndex} setImage={setImageUrlHandler} filedName="video" courseArray={courseArray} />

      </Grid>
      <Grid item xs={6}>
        <Box mt={2} textAlign="center">

          <div className="preview-image" style={{ border: "solid 1px black" }}>
            <img src={imgUrl} alt={"maa chuda"} height="300px" width="500px" />
          </div>

        </Box>
      </Grid>




      <Grid xs={12}>
        <Button variant="contained"
          style={{
            backgroundColor: "#9bac42",
            fontWeight: "bold",
            // marginLeft: "500px"
          }}
          
          onClick={()=>console.log(imgUrl)}>
          Save
        </Button>




      </Grid>






    </Grid>

  )

}