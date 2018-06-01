import React, { Component } from 'react';
import {Header} from './components/header';
import {Search} from './components/search';
import {CenterContent} from './components/centerContent';
import {Player} from './components/player';
import {Footer} from './components/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Search/>
        <CenterContent/>
        <Footer/>
        <Player/>
      </div>
    );
  }
}

export default App;
