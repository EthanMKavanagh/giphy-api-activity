import React, { Component } from 'react';
import { connect } from 'react-redux';



class ImageListItem extends Component {


  faveImage = () => {
    console.log('in faveImage');
    this.props.dispatch({
      type: 'CREATE_FAVE',
      payload: this.props.image
    })
  }

  render() {
    return (
      <div>
        <img src={this.props.image} />
        <button
          onClick={this.faveImage}
        >fave
        </button>
      </div>
    );
  }
}


const mapStateToProps = (reduxState) => ({
  images: reduxState.imageReducer
});
export default connect(mapStateToProps)(ImageListItem);