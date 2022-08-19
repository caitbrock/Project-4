import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Chip from "@mui/material/Chip";

function Images(props) {
  return (
    <div
      onClick={() => {
        props.handleBoard;
      }}
      className="imagecard"
      style={{ margin: "20px", maxWidth: 350, minWidth: 350 }}
    >
      <div>
        <div component="img" height="140" image="" alt="Random Image" />
        <div>
          <div gutterBottom variant="h5" component="div">
            {props.title}
          </div>
          <div variant="body2" color="text.secondary">
            {props.destination}
          </div>
          <form
          class="delete-meal"
          action="/calories/<%=calorie._id%>/meals/<%= r._id%>?_method=DELETE"
          method="POST"
        >        <input type="submit" value="Delete Meal"> 
        </form>
        </div>
      </div>
    </div>
  );
}

export default Images;

// <Card className="imagecard" style={{ margin: "20px", maxWidth: 350, minWidth: 350, height: '100%', width: '100%'}}>
// <CardActionArea>
//   <CardMedia component="img" height="140" image="" alt="Random Image" />
//   <CardContent>
//     <Typography gutterBottom variant="h5" component="div">
//       {props.title}
//     </Typography>
//     <Typography variant="body2" color="text.secondary">
//       {props.destination}
//     </Typography>
//     <Chip label="#Tag1" variant="outlined" />
//     <Chip label="#Tag2" variant="outlined" />
//     <Chip label="#Tag3" variant="outlined" />
//   </CardContent>
// </CardActionArea>
// </Card>
