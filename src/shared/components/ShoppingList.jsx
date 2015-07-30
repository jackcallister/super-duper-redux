import React from 'react';
import { Connector } from 'react-redux';
import includes from 'lodash/collection/includes';
import reduce from 'lodash/collection/reduce';

class ShoppingList extends React.Component {

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

function select(state) {
  const meals = state.meals.filter((meal) => {
    return includes(state.shoppingList, meal.id);
  });

  const ingredients = reduce(meals, (ingredients, meal) => {
    meal.ingredientIds.forEach((ingredientId) => {
      let ingredient;
      ingredient = ingredients.find((ingredient) => {
        return ingredient.id === ingredientId;
      });

      if (ingredient) {
        ingredient.count += 1;
      } else {
        ingredient = state.ingredients.find((ingredient) => {
          return ingredient.id === ingredientId;
        });
        ingredient.count = 1;
        ingredients.push(ingredient);
      }
    });

    return ingredients;
  }, []);

  return { meals: meals, ingredients: ingredients };
}

export default class ShoppingListConnector extends React.Component {

  render() {
    return (
      <Connector select={select}>
        {({ meals, ingredients }) =>
          <ShoppingList key='shoppingList' meals={meals} ingredients={ingredients} />
        }
      </Connector>
    );
  }
}
