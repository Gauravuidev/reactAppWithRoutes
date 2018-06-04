import React, { Component } from 'react';

import { Header } from './components/header';
import { Search } from './components/search';
import { CenterContent } from './components/centerContent';
import { Player } from './components/player';
import { Footer } from './components/footer';
import './App.css';

/*=================Redux Implementation======================*/
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
/*=================Other Components Implementation======================*/


class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <Header />
          <Search />
          <CenterContent />
          <Footer />
          <Player />
        </div>
      </Provider>
    );
  }
}

export default App;
