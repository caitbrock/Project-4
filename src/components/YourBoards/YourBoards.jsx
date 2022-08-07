import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <div className='yourboard'>
    <Card className="Boards">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="India"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Board #1
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Info about where/when/why this location/board has been created
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
   <Card className="Boards">
   <CardActionArea>
     <CardMedia
       component="img"
       height="140"
       image=""
       alt="Camping"
     />
     <CardContent>
       <Typography gutterBottom variant="h5" component="div">
         Board #2
       </Typography>
       <Typography variant="body2" color="text.secondary">
       Info about where/when/why this location/board has been created
       </Typography>
     </CardContent>
   </CardActionArea>
 </Card>
 <Card className="Boards">
   <CardActionArea>
     <CardMedia
       component="img"
       height="140"
       image=""
       alt="Hikes"
     />
     <CardContent>
       <Typography gutterBottom variant="h5" component="div">
       Board #3
       </Typography>
       <Typography variant="body2" color="text.secondary">
         Info about where/when/why this location/board has been created
       </Typography>
     </CardContent>
   </CardActionArea>
 </Card>

</div>
  );
}