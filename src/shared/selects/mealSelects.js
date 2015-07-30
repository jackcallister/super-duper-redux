import includes from 'lodash/collection/includes';

function selectMeals(state) {
  return { meals: state.meals };
}

function selectIngredientsFromMeal(meal) {

  return function (state) {
    const ingredients = state.ingredients.filter((ingredient) => {
      return includes(meal.ingredientIds, ingredient.id);
    });

    return { meal: meal, ingredients: ingredients };
  }
}

export {
  selectMeals,
  selectIngredientsFromMeal
}