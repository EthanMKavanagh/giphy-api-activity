import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageListItem from '../ImageListItem/ImageListItem';


class ImageList extends Component {

  render() {
    return (
      <div>
        {this.props.images.map(image =>
          <ImageListItem
            image={image}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  images: reduxState.imageReducer
});

export default connect(mapStateToProps)(ImageList);