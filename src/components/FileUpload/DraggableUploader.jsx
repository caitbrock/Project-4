import React from "react";

class DraggableUploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ display: "flex", flexDirection: " column" }}>
        <div className="sub-header"> Drag an Image</div>
        <div className="draggable-container">
          <input
            type="file"
            id="file-browser-input"
            name="file-beowser-input"
            ref={(input) => (this.fileInput = input)}
            onDragOver={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          />
        </div>
      </div>
    );
  }
}

export default DraggableUploader;
