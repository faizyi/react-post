import * as React from 'react';
import './post.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea } from '@mui/material';
// import cars from './../../../cars/960x0.webp'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
// import { Style } from '@mui/icons-material';

export default function Post({carsImg}) {
  return (
    <Card className='card-post' sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={carsImg}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            <br /><br />
            <div className='icon'>
              <ThumbUpIcon/>Like
              <ShareIcon/>Share
              <CommentIcon/>Comment
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

  );
}
