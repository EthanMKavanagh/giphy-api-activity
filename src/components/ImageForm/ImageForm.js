import React, { Component } from "react";
import { connect } from "react-redux";

class ImageForm extends Component {
  state = {
    image: "",
  };
  searchImages = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: "FETCH_IMAGE",
      payload: this.state.image,
    });
  };

  handleInputChange = (event) => {
    console.log("in handleInputChange", event.target.value);
    this.setState({
      image: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.searchImages}>
          <input
            type="text"
            placeholder="Search Giphy Catergories"
            value={this.state}
            onChange={this.handleInputChange}
          ></input>

          <input type="Submit" value="Search for Image" />
        </form>
      </div>
    ); //end return
  } // end render
} //end class

export default ImageForm;
