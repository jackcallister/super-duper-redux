import includes from 'lodash/collection/includes';
import reduce from 'lodash/collection/reduce';

function selectShoppingList(state) {
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

export {
  selectShoppingList
}
