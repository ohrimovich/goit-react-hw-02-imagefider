import "./App.css";
import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from "./components/Saerchbar/Searchbar";
import FeachImage from "./components/feachImage/FeachImage";


class App extends Component {

  state = {
    imageName: '',
  }
 
  formSubmit = imageName => {
    this.setState({imageName})
  }


  render() {
    console.log(this.state.imageName)
    const {imageName} = this.state
    return (
      
      <>
        <Searchbar onChange={this.formSubmit} />
        <ToastContainer autoClose={3000} />
        <FeachImage name={imageName} onClick={this.toggleModal} />

      </>
    )
 
    
  };
}

export default App;


