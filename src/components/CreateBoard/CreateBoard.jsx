import React from "react";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import "./CreateBoard.css";

class CreateBoard extends React.Component {
  state = {
    title: "",
    description: "",
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
      let fetchResponse = await fetch("/api/boards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + jwt,
        },
        body: JSON.stringify({
          title: this.state.title,
          description: this.state.description,
        }), // <-- send this object to server
      });
      let serverResponse = await fetchResponse.json(); // <-- decode fetch response
      console.log("Success:", serverResponse); // <-- log server response
      this.setState({ title: "", description: ""}); // if order sent without errors, set state to empty
    } catch (err) {
      console.error("Error:", err); // <-- log if error
    }
  };

  render() {
    return (
      <>
          <div className="uploadform">
            <form
              className="addpost"
              action="/"
              enctype="multipart/form-data"
              method="post"
              onSubmit={this.handlePost}
            >
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
              <div>
              <button className="submit" type="submit">
                Create Board
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

export default CreateBoard;
