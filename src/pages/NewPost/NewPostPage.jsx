// import "./NewOrderPage.css";
// import React from "react";
// import { Link } from "react-router-dom";
// import FileUpload from "../FileUpload/FileUpload";
// import DraggableUploader from "../FileUpload/DraggableUploader";

// class newPostPage extends React.Component {
//   state = {
//     Caption: "",
//     Description: "",
//     Destination: "",
//   };

//   handlePost = async () => {
//     try {
//       let jwt = localStorage.getItem("token");
//       let fetchResponse = await fetch("/api/posts", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer " + jwt,
//         },
//         body: JSON.stringify({
//           Caption: this.state.Caption,
//           Description: this.state.Description,
//           Destination: this.state.Destination,
//         }), // <-- send this object to server
//       });
//       let serverResponse = await fetchResponse.json(); // <-- decode fetch response
//       console.log("Success:", serverResponse); // <-- log server response
//       this.setState({ Caption: "", Description: "", Destination: "" }); // if order sent without errors, set state to empty
//     } catch (err) {
//       console.error("Error:", err); // <-- log if error
//     }
//   };

//   render() {
//     return (
//       <div className="addpost">
//         <FileUpload />
//         <form action="/posts" method="POST">
//           <label>
//             Caption: <input type="text" name="Caption" />{" "}
//           </label>
//           <br />
//           <label>
//             Description: <input type="text" name="Description" />{" "}
//           </label>
//           <br />
//           <label>
//             Destination: <input type="text" name="Destination" />{" "}
//           </label>
//           <input type="submit" value="Add Post" />
//         </form>
//         <DraggableUploader />
//       </div>
//     );
//   }
// }
