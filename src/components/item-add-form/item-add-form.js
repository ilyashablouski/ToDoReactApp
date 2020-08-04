import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
  }

  render() {
    return (
      <form className="item-add-form d-flex mt-3"
        onSubmit={this.onSubmit}>
        <input type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="What needs to be done"
          required />

        <button type="submit"
          className="btn btn-outline-secondary btn-sm">
          Add Item
        </button>
      </form>
    )
  }
}
