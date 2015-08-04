import includes from 'lodash/collection/includes'

function selectIngredientsFromMeal(meal) {

  return function (store) {
    const ingredients = store.ingredients.collection.filter((ingredient) => {
      return includes(meal.ingredientIds, ingredient.id);
    });

    return { meal: meal, ingredients: ingredients }
  }
}

export {
  selectIngredientsFromMeal
}
