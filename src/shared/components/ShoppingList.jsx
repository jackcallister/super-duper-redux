import React from 'react';
import { Connector } from 'react-redux';
import { selectSelectedMeals } from '../selectors/MealsSelector';

class ShoppingList {

  render() {
    const meals = this.props.meals.map((meal) => {
      return <li key={meal.id}> {meal.name} </li>;
    });

    const ingredients = this.props.ingredients.map((ingredient) => {
      return <li key={ingredient.id}> {ingredient.name} x {ingredient.count} </li>;
    });

    return (
      <div>
        Your meals
        <ul>
          {meals}
        </ul>

        Your shopping list

        <ul>
          {ingredients}
        </ul>
      </div>
    );
  }
}

export default class ShoppingListConnector {

  render() {
    return (
      <Connector select={selectSelectedMeals}>
        {({ meals, ingredients }) =>
          <ShoppingList meals={meals}
                        ingredients={ingredients} />
        }
      </Connector>
    );
  }
}
