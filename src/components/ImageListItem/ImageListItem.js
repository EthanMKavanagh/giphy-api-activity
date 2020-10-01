import React, { Component } from 'react';

class ImageListItem extends Component {

  faveImage = (event) => {
    console.log('in faveImage');
    this.props.dispatch({
      type: 'CREATE_FAVE',
      payload: this.props.image.url
    })

  }

  render() {
    return (
      <div>
        <img src={this.props.url} />
        <button
          onClick={this.faveImage}
        >fave
        </button>
      </div>
    );
  }
}

export default ImageListItem;