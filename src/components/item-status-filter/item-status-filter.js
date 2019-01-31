import React, { Component } from "react";
import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {
  render() {
    return (
      <div className="btn-group">
        <button type="button" className="btn">
          All
        </button>
        <button type="button" className="btn">
          Active
        </button>
        <button type="button" className="btn">
          Done
        </button>
      </div>
    );
  }
}
