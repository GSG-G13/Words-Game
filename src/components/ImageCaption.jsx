import { Component } from "react";
import { memeCaption } from "../utils/getMemes";

class ImageCaption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: "",
      bottomText: "",
    };
  }

  render() {
    const { selectedImage, id } = this.props;
    console.log(id);
    return (
      <div>
        {" "}
        <div className="selected-image">
          {selectedImage && <img src={selectedImage} alt="Selected" />}
        </div>
      </div>
    );
  }
}

export default ImageCaption;
