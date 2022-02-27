import { Card, Collapse, IconButton, Box } from '@mui/material'
import React, { useContext, useState } from 'react'
import TitleSettler from './TitleSettler'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import EditIcon from '@mui/icons-material/Edit';
import DescriptionIcon from '@mui/icons-material/Description';
import DeleteIcon from '@mui/icons-material/Delete';
import TopicTile from './TopicTile';
import { courseArray } from '../../Context';
import AddIcon from '@mui/icons-material/Add';
// import {TopicTile} from './StyledComponents'
function ModuleTile({ moduleIndex, onTopic , onSubTopic}) {
    const courseContext = useContext(courseArray)
    const [shouldShow, setShouldShow] = useState(true)
    return (
        <>
            <Card sx={{
                display: "flex",
                paddingY: "12px",
                marginY: "0",
                borderRadius: "8px",
                backgroundColor: "#F8F8F8"
            }}>
                {
                    onTopic ?
                        <IconButton>
                            <ArrowRightIcon />
                        </IconButton>
                        :
                        <div style={{
                            height: "24px",
                            width: "24px"
                        }} />

                }
                <TitleSettler moduleIndex={moduleIndex} shouldShow={shouldShow} setShouldShow={setShouldShow} type={0} />
                <div style={{ flexGrow: 1 }} />
                <Box marginRight={"12px"} marginY={'auto'}>
                    <IconButton sx={{marginX: '4px',}}>
                        <EditIcon/>
                    </IconButton>
                    <IconButton>
                        <DescriptionIcon sx={{marginX: '4px'}}/>
                    </IconButton>
                    <IconButton>
                        <DeleteIcon sx={{marginX: '4px'}}/>
                    </IconButton>
                    {
                        
                        (onSubTopic === undefined) && (onTopic) ?  (
                            <IconButton sx={{ marginX: '4px', }} onClick={()=>{
                                courseContext.addTopic(moduleIndex)
                            }}>
                                <AddIcon/>
                            </IconButton>
                        ) : null
                    }
                </Box>
            </Card>
            <Collapse in={onTopic} sx={{
                // background: "lightgray",
                // margin: "auto",
                marginTop: "6px",
                paddingY: "16px",
                width: "98%",
                borderRadius: "12px",
                "& .MuiCollapse-wrapper": {
                    // marginX: "auto",
                    // background: "red"
                },
                "& .MuiCollapse-wrapperInner": {
                    width: "95%",
                    marginX: 'auto'
                    // marginX: 0
                },
                "&.MuiCollapse-hidden":{
                    display: 'none'
                }
            }}>
                        {
                            courseContext.data[moduleIndex].topics.map((topic, topicIndex)=>{
                                console.log(topic)
                                return (
                                    <Box marginY={onTopic && onSubTopic ? "12px" : "4px"} key={topic.title}>
                                        <TopicTile moduleIndex={moduleIndex} topicIndex={topicIndex} onSubTopic={onSubTopic}/>
                                    </Box>
                                )
                            })
                        }
            </Collapse>
        </>
    )
}

export default ModuleTile