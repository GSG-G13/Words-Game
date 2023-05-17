import { Component } from "react";
import "./images.css";
import getMemes from "../utils/getMemes";

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: null,
      data: [],
    };
  }

  handleImageClick = (image) => {
    this.setState({ selectedImage: image });
  };

  componentDidMount() {
    getMemes().then((basel) => this.setState({ data: basel.data.memes }));
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <div className="slider">
          {data.map((image, index) => (
            <div key={index} className="image-wrapper">
              <img
                src={image.url}
                alt={`Image ${index + 1}`}
                onClick={() => this.handleImageClick(image)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ImageSlider;
