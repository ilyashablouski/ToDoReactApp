import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

  state = {
    typedText: ''
  };

  onChangeSearchInput = (e) => {
    const typedText = e.target.value;
    this.setState({ typedText });
    this.props.onChangeSearchInput(typedText);
  }

  render() {
    return (
      <input type="text"
        className="form-control search-input"
        placeholder="type to search"
        onChange={this.onChangeSearchInput}
        value={this.state.typedText} />
    )
  };
};
