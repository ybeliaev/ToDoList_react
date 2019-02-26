import React, { Component } from "react";

import "./search-panel.css";

export default class SeachPanel extends Component {
  state = {
    term: ""
  };
  onSearchChange = e => {
    const term = e.target.value;
    this.setState({ term });
    this.props.makeSearchChange(term);
  };
  render() {
    return (
      <input
        type="text"
        placeholder="seach.."
        className="seach-input"
        value={this.state.term}
        onChange={this.onSearchChange}
      />
    );
  }
}
