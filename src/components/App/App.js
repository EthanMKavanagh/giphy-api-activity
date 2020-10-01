import React, { Component } from 'react';
import FavoritesView from '../FavoritesView/FavoritesView.js'

class App extends Component {

  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
        <FavoritesView />
      </div>

    );
  }

}

export default App;
