import React, { Component } from "react";

class SearchView extends Component {
  state = {
    test: null,
  };

  componentDidMount() {
    console.log("_template did mount");
  }

  render() {
    return (
      <div className="_template">
        <header className="_template-header">
          <h1>_template</h1>
        </header>
      </div>
    ); //end return
  } // end render
} //end class

export default SearchView;
