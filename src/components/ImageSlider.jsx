<<<<<<< HEAD
import { Component } from "react";
import "./images.css";
import { getMemes } from "../utils/getMemes";
import ImageCaption from "./ImageCaption";

=======
import { Component } from 'react';
import './images.css'
import getMemes from '../utils/getMemes';
import ImageCaption from './ImageCaption';
>>>>>>> f34ea9fbf4fb1c3206330c4233c51fd5d8392f56
class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      selectedImage: "",
=======
      selectedImage: [],
>>>>>>> f34ea9fbf4fb1c3206330c4233c51fd5d8392f56
      data: [],
    };
  }

  handleImageClick = (image) => {
    console.log(this.selectedImage)
    this.setState({ selectedImage: image });

  };

  componentDidMount() {
    getMemes().then((basel) => this.setState({ data: basel }));
  }

  render() {
    const { data } = this.state;

    return (
      <div className='container'>
        <div className="slider">
          {data.map((image, index) => (
            <div id={image.id} key={index} className="image-wrapper">
              <img
                id={image.id}
                src={image.url}
                alt={`Image ${index + 1}`}
                onClick={() => this.handleImageClick(image)}

              />
            </div>
          ))}
        </div>
        <ImageCaption selectedImage={this.state.selectedImage.url} id={this.state.selectedImage.id} />
      </div>
    )
  }


}

export default ImageSlider;
