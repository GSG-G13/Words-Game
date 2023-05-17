import { Component } from 'react';

class ImageCaption extends Component {




    render() {
        const { selectedImage, id } = this.props;
        console.log(id);
        return (
            <div> <div className="selected-image">
                {selectedImage && <img src={selectedImage} alt="Selected" />}
            </div>
            </div>


        );
    }
}

export default ImageCaption;