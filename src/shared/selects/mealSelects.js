import includes from 'lodash/collection/includes';

function selectMeals(store) {
  return { meals: store.meals };
}

function selectIngredientsFromMeal(meal) {

  return function (store) {
    const ingredients = store.ingredients.filter((ingredient) => {
      return includes(meal.ingredientIds, ingredient.id);
    });

    return { meal: meal, ingredients: ingredients };
  }
}

export {
  selectMeals,
  selectIngredientsFromMeal
}