import React from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';
import Ingredients from './Ingredients';
import { selectIngredientsFromMeal } from '../selects/mealSelects';
import * as MealsActions from '../actions/MealsActions';

class Meal {

  selectMeal(e) {
    this.props.selectMeal(this.props.id);
  }

  deleteMeal(e) {
    this.props.deleteMeal(this.props.id);
  }

  render() {
    return (
      <li>
        <p onClick={(e) => { this.selectMeal(e) }}>
          {this.props.name}
        </p>

        <Ingredients ingredients={this.props.ingredients} />
      </li>
    );
  }
}

export default class MealConnector {

  render() {

    return (
      <Connector select={selectIngredientsFromMeal(this.props.meal)}>
        {({ meal, ingredients, dispatch }) =>
          <Meal {...meal} ingredients={ingredients} {...bindActionCreators(MealsActions, dispatch)} />
        }
      </Connector>
    );
  }
}
