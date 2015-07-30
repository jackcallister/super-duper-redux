import React from 'react';

export default class Ingredient {

  render() {
    return (
      <li key={this.props.id}>{this.props.name}</li>
    );
  }
}
