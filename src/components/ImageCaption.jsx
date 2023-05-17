import { Component } from 'react';

class ImageCaption extends Component {




    render() {
        const { selectedImage } = this.props;
        return (
            <div> <div className="selected-image">
            {selectedImage && <img src={selectedImage} alt="Selected" />}
        </div>
         </div>
        
           
        );
    }
}

export default ImageCaption;