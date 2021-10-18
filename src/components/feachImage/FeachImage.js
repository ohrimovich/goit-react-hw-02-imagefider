import React, { Component } from "react";
import ImageGallery from '../ImageGallery/ImageGallery'
import Button from "../Button/Button";
import { toast } from 'react-toastify';
import PixabayAPI from "../../services/PixabayAPI";
import ImageGalleryItem from "../ImageGallaryItem/ImageGalleryItem";
import Modal from '../Modal/Modal';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import './FetchImage.scss'


class FeachImage extends Component {

    state = {
        images: [],
        isVisible: false,
        loading: false,
        page: 1,
        showModal: false,
        largeImage: '',
        alt: '',
    }

    componentDidUpdate(prevProps) {
        if (prevProps.name !== this.props.name) {
            this.setState({ loading: true });
            PixabayAPI.fetchImage( this.props.name )
                .then(res => res.hits.length === 0 ? this.clearList():
                    this.setState((prevState) => {
                    return {
                        images: res.hits,
                        isVisible: true,
                        page: prevState.page + 1
                   }
                   
                })).catch(error => console.log(error)).finally(() => this.setState({loading: false}))
         
        }
           window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
                });
    }

      toggleModal = (largeImageURL='',largeImageAlt='') => {
    this.setState(({ showModal}) => ({
        showModal: !showModal,
        largeImage: largeImageURL,
        alt: largeImageAlt,
    }))
  }

    clearList() {
        this.setState({
            images: []
        })
        toast.error('Nothing not found')
        return;
    }
    
    onLoadMore = () => {
        this.setState({ loading: true });
         PixabayAPI.fetchImage( this.props.name, this.state.page )
              .then(res => this.setState(({ images, page }) => {
                  return {
                      images: [...images, ...res.hits],
                      page: page + 1
                    }
              })).finally(() => this.setState({loading: false}))
          
    }

    render() {
        const {largeImage, alt, images, isVisible, showModal, loading } = this.state
        return (
            <>
                
                <ImageGallery >
                    <ImageGalleryItem list={images} onClick={this.toggleModal}/>
              </ImageGallery>
                {isVisible && <Button onLoadMore={this.onLoadMore} />}
                {showModal && <Modal largeImageURL={largeImage} alt={alt} onClick={this.toggleModal} />}
                {loading && <div className='Spinner'><Loader type="TailSpin"
                    color="#00BFFF"
                    height={50}
                    width={50}
                    timeout={20000}
                    /></div>
                }
            </>
        )
    }
}

export default FeachImage;