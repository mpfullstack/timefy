/**
 * @Author: Marc Pérez Castells <welvi>
 * @Date:   2018-05-24T19:34:40+02:00
 * @Email:  info@marcperez.cat
 * @Last modified by:   welvi
 * @Last modified time: 2018-05-25T19:51:50+02:00
 */



import React, { Component } from 'react';
import './App.css';
import Router from './router';

// React Router example
// https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default App;
