import React from "react";
import header from "../../Header-IM.jpg";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import "./CreatePost.css";

class CreatePost extends React.Component {
  state = {
    title: "",
    description: "",
    destination: "",
    images: "",
    imageFile: [],
    tags: [],
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
    //this.setState({ selectedFile: evt.target.files });
  };

  // handlePhoto = async (e) => {
  //   e.preventDefault();
  //   try {
  //     this.setState = { selectedFile: arr };
  //   } catch {
  //     console.log("hello", this.setState.selectedFile);
  //   }
  // };

  handlePost = async (e) => {
    e.preventDefault();
    try {
      let imageArray; //Declaring image array
      let { url } = await fetch("/s3Url").then((res) => res.json()); //Fetching url from s3 backend point converting into json
      const imageUrl = url.split("?")[0];
      imageArray = imageUrl;
      let jwt = localStorage.getItem("token");
      let file = this.state.imageFile;
      let sendPhoto = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: file,
      });
      let sendPostData = await fetch("/api/posts/createPost", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + jwt,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: this.state.title,
          description: this.state.description,
          destination: this.state.destination,
          images: imageArray,
        }),
      });
      //Error checking
      if (!sendPostData.ok) {
        throw new Error("Fetch failed - Bad request");
      } else {
        window.location.href = "/";
      }
    } catch (err) {
      console.log("Submit error", err);
    }
  };

  render() {
    return (
      <>
        <div
          className="bannerheader"
          style={{ backgroundImage: `url(${header})` }}
        ></div>

        <div className="uploadform">
          <form
            className="addpost"
            action="/createPost"
            enctype="multipart/form-data"
            method="post"
            onSubmit={this.handlePost}
          >
            <label className="addpostlabel">
              <input
                type="file"
                class="form-control-file"
                name="imageFile"
                value={this.state.imageFile}
                onChange={this.handleChange}
              />
            </label>
            <label className="addpostlabel">
              Title:
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
                required
              />
            </label>
            <label className="addpostlabel">
              Description:
              <input
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
                required
              />
            </label>
            <label className="addpostlabel">
              Location:
              <input
                type="text"
                name="destination"
                value={this.state.destination}
                onChange={this.handleChange}
                required
              />
            </label>
            <div>
              <button className="submit" type="submit">
                Inspire Others
                <span>
                  <PublicRoundedIcon />
                </span>
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default CreatePost;

// handlePost = async (e) => {
//   e.preventDefault();
//   try {
//     let formData = new FormData();
//     formData.append("file", this.state.selectedFile);
//     console.log(this.state.selectedFile);

//     fetch("http://localhost:8080/", {
//       method: "POST",
//       body: formData,
//     })
//       .then((res) => res.json())
//       .catch((err) => console.error(err));
//     let jwt = localStorage.getItem("token");
//     let fetchResponse = await fetch("/api/posts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + jwt,
//       },
//       body: JSON.stringify({
//         title: this.state.title,
//         description: this.state.description,
//         destination: this.state.destination,
//       }), // <-- send this object to server
//     });
//     let serverResponse = await fetchResponse.json(); // <-- decode fetch response
//     console.log("Success:", serverResponse); // <-- log server response
//     this.setState({ title: "", description: "", destination: "" }); // if order sent without errors, set state to empty
//   } catch (err) {
//     console.error("Error:", err); // <-- log if error
//   }
// };
