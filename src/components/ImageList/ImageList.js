import React, { Component } from 'react';
import { connect } from 'react-redux';


class ImageList extends Component {

  render() {
    return (
      <div>

      </div>
    );
  }
}

const MapStateToProps = (reduxState) => ({
  images: reduxState.imageReducer
});

export default ImageList;