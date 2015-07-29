import React from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';
import Ingredient from './Ingredient';
import * as MealsActions from '../actions/MealsActions';

export default class Ingredients extends React.Component {

  render() {
    const ingredients = this.props.ingredients.map( ingredient =>
      <Connector key={ingredient.id}>
        {({ dispatch }) =>
          <Ingredient mealId={this.props.mealId} {...ingredient} {...bindActionCreators(MealsActions, dispatch)} />
        }
      </Connector>
    );

    return (
      <ul>
        {ingredients}
      </ul>
    );
  }
}
