import React from 'react';
import { Connector } from 'react-redux';
import { selectMeals } from '../selectors/MealsSelector';
import Meal from './Meal';


class Meals {

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
        {({ meals }) =>
          <Meals meals={meals} />
        }
      </Connector>
    );
  }
}
