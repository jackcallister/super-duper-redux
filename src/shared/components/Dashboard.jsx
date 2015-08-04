import React from 'react';
import Meals from './Meals';
import ShoppingList from './ShoppingList';
import MealForm from './MealForm';

export default class Dashboard {

  render() {
    return (
      <section>
        <Meals />
        <ShoppingList />
        <MealForm />
      </section>
    );
  }
}
