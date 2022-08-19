import React from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import FileUpload from "../FileUpload/FileUpload";
import header from "../../Header-IM.jpg";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import "./CreatePost.css";

class CreatePost extends React.Component {
  state = {
    title: "",
    description: "",
    destination: "",
    selectedFile: null,
    tags: [],
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
    this.setState({ selectedFile: evt.target.files[0] });
  };

  // const handleDeleteTag = (tagToDelete) => () => {
  //   setTagData((tags) =>
  //     tags.filter((tag) => tag.key !== tagToDelete.key)
  //   );
  // };

  handlePost = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append("file", this.state.selectedFile);
      console.log(this.state.selectedFile);

      fetch("http://localhost:8080/", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .catch((err) => console.error(err));
      let jwt = localStorage.getItem("token");
      let fetchResponse = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + jwt,
        },
        body: JSON.stringify({
          title: this.state.title,
          description: this.state.description,
          destination: this.state.destination,
        }), // <-- send this object to server
      });
      let serverResponse = await fetchResponse.json(); // <-- decode fetch response
      console.log("Success:", serverResponse); // <-- log server response
      this.setState({ title: "", description: "", destination: "" }); // if order sent without errors, set state to empty
    } catch (err) {
      console.error("Error:", err); // <-- log if error
    }
  };

  render() {
    return (
      <>
        <div
          className="bannerheader"
          style={{ backgroundImage: `url(${header})` }}
        ></div>
        <div className="addpost">
          <div className="uploadform">
            <form
              action="/"
              enctype="multipart/form-data"
              method="post"
              onSubmit={this.handlePost}
            >
              <label>
                <input
                  type="file"
                  class="form-control-file"
                  name="file"
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                  required
                />
              </label>
              <label>
                Description:
                <input
                  type="text"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                  required
                />
              </label>
              <label>
                Location:
                <input
                  type="text"
                  name="destination"
                  value={this.state.destination}
                  onChange={this.handleChange}
                  required
                />
              </label>
              <button className="submit" type="submit">
                Inspire Others
                <span>
                  <PublicRoundedIcon />
                </span>
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default CreatePost;
