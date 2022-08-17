// import React from "react";
// import "./ImageButton.css";
// import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
// import Link from "react-router-dom";
// import FileUpload from "../FileUpload/FileUpload";
// import DraggableUploader from "../FileUpload/DraggableUploader";

// class ImageButton extends React.Component {
//   state = {
//     title: "",
//     description: "",
//     destination: "",
//   };

//   handleChange = (evt) => {
//     this.setState({
//       [evt.target.name]: evt.target.value,
//       error: "",
//     });
//   };

//   handlePost = async (e) => {
//     e.preventDefault();
//     try {
//       let jwt = localStorage.getItem("token");
//       let fetchResponse = await fetch("/api/posts", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer " + jwt,
//         },
//         body: JSON.stringify({
//           title: this.state.title,
//           description: this.state.description,
//           destination: this.state.destination,
//         }), // <-- send this object to server
//       });
//       let serverResponse = await fetchResponse.json(); // <-- decode fetch response
//       console.log("Success:", serverResponse); // <-- log server response
//       this.setState({ title: "", description: "", destination: "" }); // if order sent without errors, set state to empty
//     } catch (err) {
//       console.error("Error:", err); // <-- log if error
//     }
//   };

//   render() {
//     return (
//       <div className="addpost">
//         <FileUpload />
//         <form onSubmit={this.handlePost}>
//           <label>
//             Caption:
//             <input
//               type="text"
//               name="title"
//               value={this.state.title}
//               onChange={this.handleChange}
//               required
//             />
//           </label>
//           <br />
//           <label>
//             Description:
//             <input
//               type="text"
//               name="description"
//               value={this.state.description}
//               onChange={this.handleChange}
//               required
//             />
//           </label>
//           <br />
//           <label>
//             Destination:
//             <input
//               type="text"
//               name="destination"
//               value={this.state.destination}
//               onChange={this.handleChange}
//               required
//             />
//           </label>
//           <button className="submit" />
//           <span>
//             <AddPhotoAlternateIcon />
//           </span>
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default ImageButton;
