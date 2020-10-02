import React, { Component } from 'react';
import ImageForm from '../ImageForm/ImageForm';
import ImageList from '../ImageList/ImageList';


class SearchView extends Component {

  render() {
    return (
      <div>
        <ImageForm />
        <ImageList />
      </div>
    );
  }
}


export default SearchView;
