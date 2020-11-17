import React, {Component} from 'react';
import './App.css';
//import {yes, no} from './objects'
import Header from "./Components/Header.js"; 
import Image from "./Components/Image.js";

class App extends Component {
  render() {
    return(
      <>
      <Header text = "Hello" />
      <Image />
      </>


    )
  }




  
}

export default App;
