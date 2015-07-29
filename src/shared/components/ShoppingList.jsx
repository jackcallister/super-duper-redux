import React from 'react';
import { Connector } from 'react-redux';
import includes from 'lodash/collection/includes';
import reduce from 'lodash/collection/reduce';

class ShoppingList extends React.Component {

  render() {
    let ingredientQuantities = {};

    this.props.ingredientIds.forEach( id =>
      ingredientQuantities[id] = ingredientQuantities[id] ? ingredientQuantities[id] + 1 : 1
    );

    const meals = this.props.meals.map((meal) => {
      return <li key={meal.id}> {meal.name} </li>;
    });

    return (
      <div>
        Your meals
        <ul>
          {meals}
        </ul>

        Your shopping list

        <ul>
        </ul>
      </div>
    );
  }
}

function selectMeals(state) {
  const shoppingList = state.shoppingList;
  const meals = state.meals.filter( meal =>
    includes(shoppingList, meal.id)
  );

  const ingredientIds = reduce(meals, (collector, meal) => {
    return collector.concat(meal.ingredientIds)
  }, []);

  return { meals: meals, ingredientIds: ingredientIds };
}

export default class ShoppingListConnector extends React.Component {

  render() {
    return (
      <Connector select={selectMeals}>
        {({ meals, ingredientIds }) =>
          <ShoppingList key='shoppingList' meals={meals} ingredientIds={ingredientIds} />
        }
      </Connector>
    );
  }
}
