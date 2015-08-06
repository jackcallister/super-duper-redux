import React from 'react';
import { Connector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectMeals } from '../selectors/MealsSelector';
import * as MealsActions from '../actions/MealsActions';
import Meal from './Meal';


class Meals {

  componentWillMount() {
    this.props.beginLoadingMeals();
  }

  render() {
    const meals = this.props.meals.map( meal =>
      <Meal key={meal.id} meal={meal} />
    );

    return (
      <ul>
       {meals}
      </ul>
    );
  }
}

export default class MealsConnector {

  render() {
    return (
      <Connector select={selectMeals}>
        {({ meals, dispatch }) =>
          <Meals meals={meals} {...bindActionCreators(MealsActions, dispatch)} />
        }
      </Connector>
    );
  }
}
