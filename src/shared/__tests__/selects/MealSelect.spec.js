import assert from 'assert';
import * as MealSelect from '../../selects/MealSelect';

describe('MealSelect', () => {

  describe('selectMeals', () => {
    const store = {
      meals: 'Meals',
      ingredients: 'Ingredients'
    }

    const state = MealSelect.selectMeals(store)

    it('returns meals', () => {
      assert.deepEqual(state, { meals: 'Meals' })
    })
  })

  describe('selectIngredientsFromMeal', () => {
    const meal = {
      ingredientIds: [1]
    }

    const otherMeal = {
      ingredientIds: [2]
    }

    const ingredient = {
      id: 1
    }

    const store = {
      meals: [meal, otherMeal],
      ingredients: [ingredient]
    }

    const expectedState = {
      meal: meal,
      ingredients: [ingredient]
    }

    const state = MealSelect.selectIngredientsFromMeal(meal)(store)

    it('returns the meal and it\'s assigned ingredients', () => {
      assert.deepEqual(state, expectedState)
    })
  })
})
