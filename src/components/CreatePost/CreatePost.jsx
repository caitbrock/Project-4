import React from "react";
import FileUpload from "../FileUpload/FileUpload";
import header from "../../Header-IM.jpg";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import "./CreatePost.css";

class CreatePost extends React.Component {
  state = {
    title: "",
    description: "",
    destination: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handlePost = async (e) => {
    e.preventDefault();
    try {
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
            <form onSubmit={this.handlePost}>
            <label>
                {/* //JASON
                <input type="file" class="form-control-file" name="file" /> */}
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
              <button className="submit">
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
