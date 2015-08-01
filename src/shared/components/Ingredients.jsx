import React from 'react';
import { Connector } from 'react-redux';
import Ingredient from './Ingredient';

export default class Ingredients {

  render() {
    const ingredients = this.props.ingredients.map((ingredient) => {
      return <Ingredient key={ingredient.id} {...ingredient} />;
    });

    return (
      <ul>
        {ingredients}
      </ul>
    );
  }
}
