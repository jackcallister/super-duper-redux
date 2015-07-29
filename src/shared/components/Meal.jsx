import React from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';
import includes from 'lodash/collection/includes';
import Ingredients from './Ingredients';
import * as MealsActions from '../actions/MealsActions';

function select(ingredientIds) {
  return function(state) {
    const ingredients = state.ingredients.filter( ingredient =>
      includes(ingredientIds, ingredient.id)
    );

    return { ingredients: ingredients };
  }
}

class Meal extends React.Component {

  selectMeal(e) {
    this.props.selectMeal(this.props.id);
  }

  deleteMeal(e) {
    this.props.deleteMeal(this.props.id);
  }

  render() {
    return (
      <li>
        <p onClick={(e) => { this.selectMeal(e) }}>{this.props.name}</p>

        <Connector select={select(this.props.ingredientIds)}>
          {({ ingredients }) =>
            <Ingredients ingredients={ingredients} mealId={this.props.id} />
          }
        </Connector>
      </li>
    );
  }
}

export default class MealConnector extends React.Component {

  render() {
    return (
      <Connector>
        {({ dispatch }) =>
          <Meal {...this.props} {...bindActionCreators(MealsActions, dispatch)} />
        }
      </Connector>
    );
  }
}
