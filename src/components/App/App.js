import React, { Component } from 'react';
import Header from '../Header/Header';
import SearchView from '../SearchView/SearchView';


class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <SearchView />
      </div>
    );
  }

}

export default App;
