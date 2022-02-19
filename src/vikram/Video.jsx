import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import image2 from './Image/Image2.png';
import image1 from './Image/image1.png';
import { CardMedia } from '@mui/material';


export default function VideoCard(props) {
  let {title, subTitle, duration} = props
  const [expanded] = React.useState(false);
    


  return (
    <Card sx={{ maxWidth: 330 , boxShadow: 0.2 , borderRadius: 3 }}>
    <CardMedia>
      <img src={image2} alt='' style={{paddingLeft:'4%', paddingTop: '2%', textAlign:'center'}} ></img>
      <CardHeader
      style={{padding:'2% 5% 2% 5%'}}

      avatar={
        <Avatar sx={{ bgcolor: [100]}} aria-label="recipe" elementStyle={{padding:'%'}}>
        <img src={image1} alt=''></img>  
        </Avatar>
      }
      action={
        <IconButton aria-label="settings" style={{fontSize:'80%'}}>
        {duration}
        </IconButton>
      }
      title={title}
      subheader={subTitle}
      
    />
      </CardMedia>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      </Collapse>
    </Card>
  );
}
