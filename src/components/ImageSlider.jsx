import { Component } from "react";
import "./images.css";
import { getMemes } from "../utils/getMemes";
import ImageCaption from "./ImageCaption";

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: [],
      data: [],
      active:0
    };
  }

  handleActive = (id) => {
    this.setState({ active: id });
  };
  handleImageClick = (image) => {
    this.setState({ selectedImage: image });
  };

  componentDidMount() {
    getMemes().then((result) => this.setState({ data: result }));
  }

  render() {
    const { data } = this.state;

    return (
      <div className="🎮">
        <div className="slider">
          {data.map((image, index) => (
            <div id={image.id} key={index} className="image-wrapper">
              <img
                id={image.id}
                src={image.url}
                alt={`Image ${index + 1}`}
                className={this.state.active === image.id ?'active':""}
                onClick={() => {
                  this.handleImageClick(image)
                  this.handleActive(image.id)
                  }}
              />
            </div>
          ))}
        </div>
        <ImageCaption
          selectedImage={this.state.selectedImage.url}
          id={this.state.selectedImage.id}
        />
      </div>
    );
  }
}

export default ImageSlider;
