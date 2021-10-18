import React, {Component} from 'react';
import './ImageGallery.scss'

class ImageGallery extends Component {
    
    render() {
        return (
            <ul className="ImageGallery" >
                {this.props.children}
            </ul>
        )
    }
}

export default ImageGallery;