import React, { Component } from "react";

import Header from "../Header/Header";
import SearchView from "../SearchView/SearchView";
import FavoritesView from "../FavoritesView/FavoritesView.js";
import ImageForm from "../ImageForm/ImageForm";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <SearchView /> */}
        <h1>Giphy Search!</h1>
        {/* <FavoritesView /> */}
        <ImageForm />
      </div>
    );
  }
}

export default App;
