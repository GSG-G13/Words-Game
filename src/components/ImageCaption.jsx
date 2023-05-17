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
    const { selectedImage, data } = this.props;
    return (
      <div>
        {" "}
        <div className="selected-image">
          {selectedImage && <img src={selectedImage} alt="Selected" />}
        </div>
        <div>
          <input
            className="topText"
            name="topText"
            onChange={(e) =>
              this.setState({
                topText: e.target.value,
              })
            }
          />
          <input
            className="bottomText"
            name="bottomText"
            onChange={(e) =>
              this.setState({
                bottomText: e.target.value,
              })
            }
          />
          <button
            onClick={(e) => {
              console.log(e.target.value);
              memeCaption(
                e.target.value,
                this.state.topText,
                this.state.bottomText
              ).then(console.log);
            }}
          >
            Generate meme
          </button>
        </div>
      </div>
    );
  }
}

export default ImageCaption;
