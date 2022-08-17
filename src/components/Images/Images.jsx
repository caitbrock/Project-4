import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Chip from "@mui/material/Chip";


function Images() {
  return (
          <Card className="imagecard" style={{margin: '20px'}}>
          <CardActionArea>
            <CardMedia component="img" height="140" image="" alt="Random Image" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Title
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Short description of image
              </Typography>
            <Chip label="#Tag1" variant="outlined" />
            <Chip label="#Tag2" variant="outlined" />
            <Chip label="#Tag3" variant="outlined" />
            </CardContent>
          </CardActionArea>
        </Card>
  )
}

export default Images