import React, { Component } from "react";
import { createPortal } from 'react-dom';
import './Modal.scss'

const modalRoot = document.querySelector('#modal-root')


export default class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = e => {
            if (e.code === 'Escape') {
                this.props.onClick();
            }
        }

    onClick = (e) => {
        if (e.currentTarget === e.target) {
            this.props.onClick()
    }
}
    render() {
        return createPortal(
            <div className="Overlay" onClick={this.onClick}>
                <div className="Modal">
                    <img src={this.props.largeImageURL} alt={this.props.alt} />
                </div>
            </div>, modalRoot
        )
    }
}