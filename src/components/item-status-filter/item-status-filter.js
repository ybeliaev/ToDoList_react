import React, { Component } from "react";
import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {
  render() {
    return (
      <div className="btn-group">
        <button type="button" className="btn has-ripple">
          All
        </button>
        <button type="button" className="btn has-ripple">
          Active
        </button>
        <button type="button" className="btn ripple">
          Done
        </button>
      </div>
    );
  }
}
