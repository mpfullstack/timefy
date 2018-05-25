/**
 * @Author: Marc Pérez Castells <welvi>
 * @Date:   2018-05-24T19:34:40+02:00
 * @Email:  info@marcperez.cat
 * @Last modified by:   welvi
 * @Last modified time: 2018-05-25T20:22:31+02:00
 */



import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store, history } from './redux/store';
import Router from './router';

import './App.css';

// React Router example
// https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router history={history} />
        </Provider>
      </div>
    );
  }
}

export default App;
