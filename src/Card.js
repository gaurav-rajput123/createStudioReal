import * as React from 'react';
import './Card.css';
import { styled } from '@mui/material/styles';

import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';

import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { courseArray } from './Context';
import { NavLink } from 'react-router-dom';
import { Button, Grid, Card } from '@mui/material';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
    })
}));

export default function RecipeReviewCard({ courseDetails, data, id }) {
    // console.log(props)
    const courseContext = React.useContext(courseArray)
    console.log(courseDetails)
    let { title, date, description, image } = courseDetails;
    console.log(courseDetails)
    const [expanded, setExpanded] = React.useState(false);


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Grid sx={{ maxWidth: "300px", minHeight: "300px", margin: '1%', boxShadow: '5px 5px 5px #E5E5E5', borderRadius: '12px' }}>
            <Card >
                <CardMedia className='yourcourse' component="img" height="170" image={"https://storage-mediaoutput.s3.ap-south-1.amazonaws.com//thumbnails/" + id + '.png'} alt="Paella dish" sx={{ borderRadius: '10px' }} />
                <div style={{ display: 'flex' }}>
                    <CardHeader
                        action={<IconButton aria-label="settings"></IconButton>}



                        style={{ padding: '2% 5% 2% 0%', margin: "5% 5% 5% 0%", fontSize: '16px' }}

                        avatar={
                            <Avatar sx={{ bgcolor: [100], height: '44px', width: '37px' }} aria-label="recipe" elementStyle={{ padding: '%' }}>
                                <img src={""} alt='AP'></img>
                            </Avatar>

                        }
                        title="Lady Hinata"
                        subheader={title}

                    />

                    <CardActions disableSpacing>
                        <NavLink to={'/mycoursecreate'} state={{
                            details: courseDetails,
                            courseContent: data,
                            courseId: id

                        }} style={{ textDecoration: 'none' }}>
                            <Button variant="outlined" className='btn' sx={{ borderRadius: "16px" }}
                                onClick={() => {
                                    
                                    let newCourseContext = {...courseContext}
                                    newCourseContext.courseDesciption = courseDetails.description
                                    newCourseContext.courseDuration = courseDetails.duration
                                    newCourseContext.courseId = id
                                    newCourseContext.data = data.data
                                    newCourseContext.courseTitle = courseDetails.title
                                    newCourseContext.organisation = courseDetails.organisation
                                    newCourseContext.skillsGained = courseDetails.skills
                                    newCourseContext.courseNumber = courseDetails.number
                                    console.log(newCourseContext)
                                    courseContext.setCourseState(newCourseContext)
                                }}>
                                <Typography sx={{ fontSize: '12px' }}>Start Learning</Typography>
                            </Button>
                        </NavLink>
                    </CardActions>
                </div>
            </Card>
        </Grid>
    );
}
