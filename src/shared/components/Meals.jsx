import React from 'react';
import { Connector } from 'react-redux';
import { bindActionCreators } from 'redux';
import Meal from './Meal';

class Meals extends React.Component {

  render() {
    const meals = this.props.meals.map( meal =>
      <Meal key={meal.id} {...meal} />
    );

    return (
      <ul>
       {meals}
      </ul>
    );
  }
}

function select(state) {
  return { meals: state.meals };
}

export default class MealsConnector extends React.Component {

  render() {
    return (
      <Connector select={select}>
        {({ meals }) =>
          <Meals meals={meals} />
        }
      </Connector>
    );
  }
}
