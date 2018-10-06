import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Header from './components/Header'
import MovieBrowser from './views/MovieBrowser'
import MovieDetail from './views/MovieDetail';

class App extends Component {

  render() {

    return (
      <div>
      <Header/>
      <Route exact path="/" component={MovieBrowser}/>
      <Route path="/Homepage" component={MovieBrowser}/>
      <Route path="/MovieDetail" component={MovieDetail}/>
      </div>
    );
  }
}

export default App;