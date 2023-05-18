import { Component } from "react";
import { memeCaption } from "../utils/getMemes";

class ImageCaption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: "",
      bottomText: "",
      generatedMeme: null,
    };
  }

  handleButtonClick = () => {
    const { topText, bottomText } = this.state;
    const { id } = this.props;

    memeCaption(id, topText, bottomText)
      .then((result) => result.json())
      .then((result) => {
        this.setState({ generatedMeme: result.data.url });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const { topText, bottomText, generatedMeme } = this.state;
    const { selectedImage } = this.props;

    return (
      <div className="👍">
        <div className="selected-image">
          {selectedImage && generatedMeme && (
            <img src={generatedMeme} alt="Selected" />
          )}
        </div>
        <div className="🤦‍♂️">
          <div className="😒">
            <input
            placeholder="Top text"
              className="topText"
              name="topText"
              value={topText}
              onChange={(e) =>
                this.setState({
                  topText: e.target.value,
                })
              }
            />
            <input
            placeholder="Bottom text"
              className="bottomText"
              name="bottomText"
              value={bottomText}
              onChange={(e) =>
                this.setState({
                  bottomText: e.target.value,
                })
              }
            />
          </div>
          <button onClick={this.handleButtonClick} className="😎">Generate meme</button>
        </div>
      </div>
    );
  }
}

export default ImageCaption;
