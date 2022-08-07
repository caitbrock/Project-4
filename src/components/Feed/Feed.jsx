import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


function Feed() {
  return (
    <div className='feed'>
 <Card className="Boards">
   <CardActionArea>
   <Chip label="#Tag1" variant="outlined" />
   <Chip label="#Tag2" variant="outlined" />
   <Chip label="#Tag3" variant="outlined" />
     <CardMedia
       component="img"
       height="140"
       image=""
       alt="Random Image"
     />
     <CardContent>
       <Typography gutterBottom variant="h5" component="div">
       Title
       </Typography>
       <Typography variant="body2" color="text.secondary">
         Short description of image
       </Typography>
     </CardContent>
   </CardActionArea>
 </Card>
 <Card className="Boards">
   <CardActionArea>
   <Chip label="#Tag1" variant="outlined" />
   <Chip label="#Tag2" variant="outlined" />
   <Chip label="#Tag3" variant="outlined" />
     <CardMedia
       component="img"
       height="140"
       image=""
       alt="Random Image"
     />
     <CardContent>
       <Typography gutterBottom variant="h5" component="div">
       Title
       </Typography>
       <Typography variant="body2" color="text.secondary">
         Short description of image
       </Typography>
     </CardContent>
   </CardActionArea>
 </Card>
 <Card className="Boards">
   <CardActionArea>
   <Chip label="#Tag1" variant="outlined" />
   <Chip label="#Tag2" variant="outlined" />
   <Chip label="#Tag3" variant="outlined" />
     <CardMedia
       component="img"
       height="140"
       image=""
       alt="Random Image"
     />
     <CardContent>
       <Typography gutterBottom variant="h5" component="div">
       Title
       </Typography>
       <Typography variant="body2" color="text.secondary">
         Short description of image
       </Typography>
     </CardContent>
   </CardActionArea>
 </Card>
    </div>

  )
}

export default Feed