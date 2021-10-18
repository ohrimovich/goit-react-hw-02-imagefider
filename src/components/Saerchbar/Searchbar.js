import React, {Component} from 'react';
import './Searchbar.scss'
import { toast } from 'react-toastify'

class Searchbar extends Component {
    
    state = {
        imageName: '',
    }

    handlerNameChange = event => {
        this.setState({
            imageName: event.currentTarget.value.toLowerCase()
        })
    }

    handlerSubmit = event => {
        event.preventDefault();

        if (this.state.imageName.trim() === '') {
            toast.error('Enter name of image, what would you like to find');
            return;

        }

        this.props.onChange(this.state.imageName)
        this.setState({imageName: ''})

    }

    render() {
        return(
        <header className="Searchbar">
            <form onSubmit={this.handlerSubmit} className="SearchForm">
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>

                <input
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    value = {this.state.imageName}
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={this.handlerNameChange}
                />
            </form>
        </header>
        )
}
}

export default Searchbar;