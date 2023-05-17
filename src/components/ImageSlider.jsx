<<<<<<< HEAD
import { Component } from "react";
import "./images.css";
import getMemes from "../utils/getMemes";

=======
import { Component } from 'react';
import './images.css'
import getMemes from '../utils/getMemes';
import ImageCaption from './ImageCaption';
>>>>>>> bb1a369be092c16b5a5bed87a17f59c998a23a22
class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      selectedImage: null,
      data: [],
=======
      selectedImage: "",
      data: []
>>>>>>> bb1a369be092c16b5a5bed87a17f59c998a23a22
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
<<<<<<< HEAD
      <div>
=======
      <div className='container'>
>>>>>>> bb1a369be092c16b5a5bed87a17f59c998a23a22
        <div className="slider">
          {data.map((image, index) => (
            <div key={index} className="image-wrapper">
              <img
                src={image.url}
                alt={`Image ${index + 1}`}
<<<<<<< HEAD
                onClick={() => this.handleImageClick(image)}
              />
            </div>
          ))}
        </div>
=======
                onClick={() => this.handleImageClick(image.url)}
              />
            </div>
          ))}

        </div>
        <ImageCaption selectedImage={this.state.selectedImage} />
>>>>>>> bb1a369be092c16b5a5bed87a17f59c998a23a22
      </div>
    );
  }
}

<<<<<<< HEAD
export default ImageSlider;
=======
export default ImageSlider;
>>>>>>> bb1a369be092c16b5a5bed87a17f59c998a23a22
