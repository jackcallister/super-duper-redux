import React from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';
import Ingredients from './Ingredients';
import { selectIngredientsFromMeal } from '../selects/MealSelect';
import * as MealsActions from '../actions/MealsActions';

class Meal {

  render() {
    return (
      <li>
        <p onClick={(e) => { this.props.selectMeal(this.props.id) }}>
          {this.props.name}
        </p>

        <Ingredients ingredients={this.props.ingredients} />
      </li>
    );
  }
}

export default class MealConnector {

  render() {
    const select = selectIngredientsFromMeal(this.props.meal);

    return (
      <Connector select={select}>
        {({ meal, ingredients, dispatch }) =>
          <Meal ingredients={ingredients}
                {...meal}
                {...bindActionCreators(MealsActions, dispatch)} />
        }
      </Connector>
    );
  }
}
