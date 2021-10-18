import './ImageGalleryItem.scss'
import React, {Component} from 'react';

class ImageGalleryItem extends Component {
    
    onClick = (event) => {
        const largeImageURL = event.target.dataset.url;
        const largeImageAlt = event.target.dataset.alt;
        this.props.onClick(largeImageURL, largeImageAlt);
    }

    render() {
        return (
            this.props.list.map(item => <li key={item.id} onClick={this.onClick} className="ImageGalleryItem">
                <img src={item.webformatURL} alt={item.tags} data-alt={item.tags} data-url={item.largeImageURL} className="ImageGalleryItem-image" />
            </li>)
        )
    }
}

export default ImageGalleryItem;