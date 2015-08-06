import includes from 'lodash/collection/includes'
import reduce from 'lodash/collection/reduce'

function selectMeal(store) {
  return { meal: store.meals.resource }
}

function selectMeals(store) {
  return { meals: store.meals.collection }
}

function selectSelectedMeals(store) {
  const meals = store.meals.collection.filter((meal) => {
    return includes(store.meals.selectedMealIds, meal.id)
  });

  const ingredients = reduce(meals, (ingredients, meal) => {
    meal.ingredientIds.forEach((ingredientId) => {
      let ingredient

      ingredient = ingredients.find((ingredient) => {
        return ingredient.id === ingredientId
      })

      if (ingredient) {
        ingredient.count += 1
      } else {
        ingredient = store.ingredients.collection.find((ingredient) => {
          return ingredient.id === ingredientId
        })
        ingredient.count = 1
        ingredients.push(ingredient)
      }
    })

    return ingredients
  }, [])

  return { meals: meals, ingredients: ingredients }
}

export {
  selectMeal,
  selectMeals,
  selectSelectedMeals
}
