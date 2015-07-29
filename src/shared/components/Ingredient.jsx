import React from 'react';

export default class Ingredient extends React.Component {

  removeIngredient(e) {
    console.log('clicked')
    this.props.removeIngredient({ id: this.props.mealId, ingredientId: this.props.id });
  }

  render() {
    return (
      <li onClick={(e) => { this.removeIngredient(e) }}>Click to remove -- {this.props.name}</li>
    );
  }
}
