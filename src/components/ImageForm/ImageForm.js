import React, { Component } from "react";
import { connect } from "react-redux";

class ImageForm extends Component {
  state = {
    image: "",
  };
  searchImage = (event) => {
    console.log("in searchImage", event);

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
        <input
          type="text"
          placeholder="Search Giphy Catergories"
          value={this.state.image}
          onChange={this.handleInputChange}
        ></input>

        <button type="Submit" onClick={(event) => this.searchImage(event)}>
          Submit
        </button>
      </div>
    ); //end return
  } // end render
} //end class

export default connect()(ImageForm);
